import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";

type Job = {
  id: number;
  title: string;
  status: boolean; 
};

const LS_KEY = "jobs";

export default function Es9() {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Job[];
        setJobs(parsed);
        return;
      } catch {}
    }

    setJobs([
      { id: 1, title: "Code", status: false },
      { id: 2, title: "Quét nhà", status: false },
      { id: 3, title: "Giặt quần áo", status: false },
      { id: 4, title: "Lau nhà", status: false },
    ]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(jobs));
  }, [jobs]);

  const doneCount = useMemo(() => jobs.filter(j => j.status).length, [jobs]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = taskName.trim();

    // validate
    if (!value) {
      setError("Tên công việc không được để trống");
      return;
    }
    const isDup = jobs.some(j => j.title.toLowerCase() === value.toLowerCase());
    if (isDup) {
      setError("Tên công việc không được phép trùng");
      return;
    }

    const newJob: Job = {
      id: Date.now(),
      title: value,
      status: false,
    };

    setJobs(prev => [...prev, newJob]);
    setTaskName("");
    setError("");
  };

  const handleToggle = (id: number) => {
    setJobs(prev =>
      prev.map(j => (j.id === id ? { ...j, status: !j.status } : j)),
    );
  };

  const askDelete = (id: number) => {
    setPendingDeleteId(id);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setPendingDeleteId(null);
  };

  const confirmDelete = () => {
    if (pendingDeleteId != null) {
      setJobs(prev => prev.filter(j => j.id !== pendingDeleteId));
    }
    closeModal();
  };
  const startEdit = (job: Job) => {
    setEditingId(job.id);
    setEditValue(job.title);
  };

  const commitEdit = () => {
    const val = editValue.trim();
    if (!val) return; 
    const isDup = jobs.some(
      j => j.id !== editingId && j.title.toLowerCase() === val.toLowerCase(),
    );
    if (isDup) return;

    setJobs(prev => prev.map(j => (j.id === editingId ? { ...j, title: val } : j)));
    setEditingId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ marginBottom: 40, textAlign: "center" }}>
                  Danh sách công việc
                </h3>

        
                <form
                  onSubmit={handleSubmit}
                  className="d-flex justify-content-center align-items-center mb-2"
                >
                  <div className="form-outline flex-fill">
                    <input
                      className={`form-control ${error ? "is-invalid" : ""}`}
                      id="form2"
                      type="text"
                      placeholder="Nhập tên công việc"
                      value={taskName}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form2">
                      Thêm công việc
                    </label>
                    {error && (
                      <div className="invalid-feedback d-block">{error}</div>
                    )}
                  </div>
                  <button className="btn btn-info ms-2" type="submit">
                    Thêm
                  </button>
                </form>

                <ul className="nav nav-tabs mb-4 pb-2" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                      {jobs.map(job => (
                        <li
                          key={job.id}
                          className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                          style={{ backgroundColor: "#f4f6f7" }}
                        >
                          <div className="d-flex align-items-center">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              checked={job.status}
                              onChange={() => handleToggle(job.id)}
                            />

                            {editingId === job.id ? (
                              <div className="d-flex align-items-center">
                                <input
                                  className="form-control form-control-sm"
                                  style={{ width: 260 }}
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      e.preventDefault();
                                      commitEdit();
                                    } else if (e.key === "Escape") {
                                      cancelEdit();
                                    }
                                  }}
                                  autoFocus
                                />
                                <button
                                  type="button"
                                  className="btn btn-sm btn-success ms-2"
                                  onClick={commitEdit}
                                  title="Lưu"
                                >
                                  Lưu
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-secondary ms-2"
                                  onClick={cancelEdit}
                                  title="Hủy"
                                >
                                  Hủy
                                </button>
                              </div>
                            ) : job.status ? (
                              <span style={{ textDecoration: "line-through" }}>
                                {job.title}
                              </span>
                            ) : (
                              <span>{job.title}</span>
                            )}
                          </div>

                          <div>
                            <button
                              type="button"
                              className="btn btn-link p-0 text-info"
                              title="Sửa công việc"
                              onClick={() => startEdit(job)}
                              disabled={editingId === job.id}
                            >
                              <i className="fas fa-pencil-alt me-3" />
                            </button>

                            <button
                              type="button"
                              className="btn btn-link p-0 text-danger"
                              title="Xóa công việc"
                              onClick={() => askDelete(job.id)}
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>

                    
                    <div
                      className="mt-3 p-2 ps-3 pe-3"
                      style={{
                        background: "#eef1f3",
                        borderRadius: 6,
                        fontWeight: 500,
                      }}
                    >
                      Công việc đã hoàn thành: {doneCount} / {jobs.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {isOpenModal && (
              <div>
                <div
                  className="position-fixed top-0 start-0 w-100 h-100"
                  style={{ background: "rgba(0,0,0,0.35)", zIndex: 1040 }}
                  onClick={closeModal}
                />
                <div
                  className="position-fixed top-50 start-50 translate-middle card p-3"
                  style={{ width: 420, zIndex: 1050 }}
                >
                  <h5 className="mb-3">Xác nhận xóa</h5>
                  <p className="mb-4">Bạn có chắc chắn muốn xóa công việc này không?</p>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2" onClick={closeModal}>
                      Hủy
                    </button>
                    <button className="btn btn-danger" onClick={confirmDelete}>
                      Đồng ý
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

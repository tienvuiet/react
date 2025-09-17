import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

type Article = {
  id: number;
  title: string;
  img: string;
  date: string;
  status: boolean;
  content?: string;
};

export default function ArticleTable() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState<{ title?: string; img?: string; content?: string }>(
    {}
  );

  const API_BASE = "http://localhost:8080/article";

  const fetchArticle = async (): Promise<void> => {
    try {
      const response = await axios.get(API_BASE);
      setArticles(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleOpen = () => {
    setIsEdit(false);
    setEditingArticle(null);
    handleReset();
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setEditingArticle(null);
    setIsEdit(false);
    setErrors({});
  };
  const handleReset = () => {
    setNewTitle("");
    setNewImg("");
    setNewContent("");
    setErrors({});
  };

  const todayVN = useMemo(() => new Date().toLocaleDateString("vi-VN"), []);
  // const baseValid = newTitle.trim() !== "" && newImg.trim() !== "" && newContent.trim() !== "";


  const isTitleDuplicate = (title: string, excludeId?: number) => {
    const t = title.trim().toLowerCase();
    return articles.some(
      (a) => a.title?.trim().toLowerCase() === t && (excludeId ? a.id !== excludeId : true)
    );
  };

  const runValidate = () => {
    const nextErrors: typeof errors = {};
    if (!newTitle.trim()) nextErrors.title = "Tên bài viết không được để trống";
    if (!newImg.trim()) nextErrors.img = "Hình ảnh không được để trống";
    if (!newContent.trim()) nextErrors.content = "Nội dung không được để trống";

    const excludeId = isEdit && editingArticle ? editingArticle.id : undefined;
    if (newTitle.trim() && isTitleDuplicate(newTitle, excludeId)) {
      nextErrors.title = "Tên bài viết đã tồn tại";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };


  const handleAddArticle = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!runValidate()) return;

    try {
      setIsSubmitting(true);
      const response = await axios.post(API_BASE, {
        title: newTitle.trim(),
        img: newImg.trim(),
        date: todayVN,
        content: newContent.trim(),
        status: false,
      });

      if (response.status === 201) {
        alert("Thêm thành công");
        handleClose();
        await fetchArticle();
      } else {
        alert("Thêm thất bại. Kiểm tra API.");
      }
    } catch (error) {
      console.log("Error: ", error);
      alert("Thêm thất bại. Kiểm tra API.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleEdit = (article: Article) => {
    setIsEdit(true);
    setEditingArticle(article);
    setNewTitle(article.title || "");
    setNewImg(article.img || "");
    setNewContent(article.content || "");
    setErrors({});
    setIsOpen(true);
  };

  const handleUpdateArticle = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (isSubmitting || !editingArticle) return;
    if (!runValidate()) return;

    try {
      setIsSubmitting(true);

      const payload: Article = {
        ...editingArticle,
        title: newTitle.trim(),
        img: newImg.trim(),
        content: newContent.trim(),
      };
      const response = await axios.put(`${API_BASE}/${editingArticle.id}`, payload);

      if (response.status === 200 || response.status === 204) {
        alert("Cập nhật thành công");
        handleClose();
        await fetchArticle();
      } else {
        alert("Cập nhật thất bại. Kiểm tra API.");
      }
    } catch (error) {
      console.log("Error: ", error);
      alert("Cập nhật thất bại. Kiểm tra API.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleBlockPost = async (article: Article) => {
    const nextStatus = !article.status;
    const confirmBlock = confirm(
      `Bạn có chắc chắn muốn ${article.status ? "bỏ chặn" : "chặn"} bài viết "${article.title}"?`
    );
    if (!confirmBlock) return;

    const updated: Article = { ...article, status: nextStatus };
    setArticles((arts) => arts.map((a) => (a.id === article.id ? updated : a)));

    try {
      const response = await axios.patch(`${API_BASE}/${article.id}`, { status: nextStatus });
      if (response.status === 200 || response.status === 204) {
        alert(`${nextStatus ? "Đã xuất bản" : "Đã chuyển thành bản nháp"}`);
      } else {
        alert("Cập nhật trạng thái thất bại.");
 
        setArticles((arts) => arts.map((a) => (a.id === article.id ? article : a)));
      }
    } catch (error) {
      console.log("Error: ", error);
      setArticles((arts) => arts.map((a) => (a.id === article.id ? article : a)));
    }
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredArticles = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return articles;
    return articles.filter((a) =>
      `${a.title ?? ""} ${a.content ?? ""}`.toLowerCase().includes(q)
    );
  }, [articles, search]);


  const onSubmit = isEdit ? handleUpdateArticle : handleAddArticle;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            className="border rounded px-3 py-2 w-64"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpen}>
          Thêm mới bài viết
        </button>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border px-4 py-2">STT</th>
            <th className="border px-4 py-2">Tiêu đề</th>
            <th className="border px-4 py-2">Hình ảnh</th>
            <th className="border px-4 py-2">Ngày viết</th>
            <th className="border px-4 py-2">Trạng thái</th>
            <th className="border px-4 py-2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.length === 0 ? (
            <tr>
              <td colSpan={6} className="border px-4 py-8 text-center text-gray-500">
                Không tìm thấy bài viết phù hợp.
              </td>
            </tr>
          ) : (
            filteredArticles.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 text-left">{item.title}</td>
                <td className="border px-4 py-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 mx-auto rounded-full object-cover"
                    onError={(e) => ((e.target as HTMLImageElement).style.visibility = "hidden")}
                  />
                </td>
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">
                  {item.status ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded">
                      Đã xuất bản
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded">Bản nháp</span>
                  )}
                </td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                    onClick={() => handleBlockPost(item)}
                  >
                    {item.status ? "Chặn" : "Xuất bản"}
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(item)}
                  >
                    Sửa
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Xóa</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isOpen && (
        <form onSubmit={onSubmit}>
          <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
            <div className="absolute inset-0 bg-black/30" onClick={handleClose} />
            <div
              className="relative bg-white w-[520px] max-w-[95vw] rounded-xl shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  {isEdit ? "Cập nhật bài viết" : "Thêm mới bài viết"}
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleClose}
                  aria-label="Đóng"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tên bài viết</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className={`w-full border rounded px-3 py-2 ${
                      errors.title ? "border-red-400" : ""
                    }`}
                    placeholder="Nhập tiêu đề"
                  />
                  {errors.title && <p className="text-xs text-red-600 mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Hình ảnh (URL)</label>
                  <input
                    type="text"
                    value={newImg}
                    onChange={(e) => setNewImg(e.target.value)}
                    className={`w-full border rounded px-3 py-2 ${errors.img ? "border-red-400" : ""}`}
                    placeholder="URL hình ảnh"
                  />
                  {errors.img && <p className="text-xs text-red-600 mt-1">{errors.img}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Nội dung</label>
                  <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className={`w-full border rounded px-3 py-2 min-h-[140px] ${
                      errors.content ? "border-red-400" : ""
                    }`}
                    placeholder="Nhập nội dung"
                  />
                  {errors.content && <p className="text-xs text-red-600 mt-1">{errors.content}</p>}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={handleClose}
                  className="border px-4 py-2 rounded"
                >
                  Hủy
                </button>
                {!isEdit && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="border px-4 py-2 rounded"
                  >
                    Làm mới
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded text-white ${isSubmitting ? "bg-blue-300" : "bg-blue-600"}`}
                >
                  {isSubmitting ? (isEdit ? "Đang cập nhật..." : "Đang lưu...") : isEdit ? "Cập nhật" : "Xuất bản"}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

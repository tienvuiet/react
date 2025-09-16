import axios from "axios";

export default function Ex5() {
    const getStudentById = async (id: number) => {
        try {
            const response = await axios.get(`http://localhost:8080/students/${id}`);
            if (response.data) {
                console.log("Thông tin sinh viên:", response.data);
            } 
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                console.log("Không tìm thấy sinh viên");
            } 
        }
    };

    getStudentById(60);

    return (
        <div>
            <h2>Detail all student</h2>
        </div>
    );
}

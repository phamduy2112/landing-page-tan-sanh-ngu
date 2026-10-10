import React from 'react';
import SectionHeading from './section-heading';

// 1. Tạo mảng dữ liệu (có thể lấy từ API sau này)
const scheduleData = [
  {
    id: 1,
    program: "IELTS",
    level: "IELTS 5.0",
    startDate: "14 tháng 10, 2026",
    status: "GẦN HẾT CHỖ",
    isFull: true, // Biến này để đổi màu hiển thị trạng thái
    days: "Thứ 2/4/6",
    time: "17:30 - 19:30",
    district: "Quận 10",
    link: "#map1",
  },
  {
    id: 2,
    program: "IELTS",
    level: "IELTS 6.5",
    startDate: "20 tháng 10, 2026",
    status: "ĐANG TUYỂN",
    isFull: false,
    days: "Thứ 3/5/7",
    time: "19:00 - 21:00",
    district: "Quận 1",
    link: "#map2",
  }
];

const ScheduleTable = () => {
  return (
    <div className="p-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto mb-10">
        <SectionHeading
          eyebrow="LỊCH KHAI GIẢNG"
          title="Lịch Khai Giảng Tại"
          highlight="Tân Sanh Ngữ"
          desc="Cập nhật liên tục lịch khai giảng các lớp học mới nhất với nhiều ưu đãi hấp dẫn."
          className="text-center"
        />
      </div>
      <div className="max-w-7xl mx-auto bg-white overflow-hidden shadow-sm rounded-xl">
        <table className="w-full text-left border-collapse border border-gray-100">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase font-semibold">
              <th className="py-4 px-6 w-48">Trình độ</th>
              <th className="py-4 px-6">
                <i className="fa-solid fa-graduation-cap mr-2"></i>Lớp khai giảng
              </th>
              <th className="py-4 px-6">
                <i className="fa-solid fa-check mr-2"></i>Tình trạng
              </th>
              <th className="py-4 px-6">
                <i className="fa-regular fa-clock mr-2"></i>Buổi học
              </th>

              <th className="py-4 px-6 text-center">Đăng ký</th>
            </tr>
          </thead>
          <tbody>
            {/* 2. Dùng map để duyệt qua mảng dữ liệu và tạo ra các thẻ <tr> */}
            {scheduleData.map((course) => (
              <tr key={course.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">

                {/* Trình độ */}
                <td className="py-6 px-6 border-r border-gray-100 align-top">
                  <div className="text-[#cc252c] text-2xl font-black mb-1">
                    {course.program}<span className="text-[10px] align-top">&reg;</span>
                  </div>
                  <div className="text-gray-800 font-bold text-lg">{course.level}</div>
                </td>

                {/* Lớp khai giảng */}
                <td className="py-6 px-6 text-gray-700 align-top">
                  {course.startDate}
                </td>

                {/* Tình trạng */}
                <td className="py-6 px-6 align-top">
                  <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full border ${course.isFull
                    ? "text-[#cc252c] border-red-200 bg-red-50/50" // Màu đỏ nếu gần hết chỗ
                    : "text-green-600 border-green-200 bg-green-50/50" // Màu xanh nếu đang tuyển
                    }`}>
                    {course.status}
                  </span>
                </td>

                {/* Buổi học */}
                <td className="py-6 px-6 align-top">
                  <div className="font-bold text-gray-700">{course.days}</div>
                  <div className="text-gray-500 text-sm mt-1">{course.time}</div>
                </td>



                {/* Đăng ký */}
                <td className="py-6 px-6 text-center align-middle">
                  <a
                    href={"#tu-van"}
                    className="bg-[#cc252c] hover:bg-red-700 text-white font-bold py-2 px-5 rounded-md shadow-sm transition-colors text-sm whitespace-nowrap"
                  >
                    Đăng ký ngay
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
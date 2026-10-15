import React from 'react';
import SectionHeading from './section-heading';

// 1. Tạo mảng dữ liệu (có thể lấy từ API sau này)
const scheduleData = [
  {
    id: 1,
    program: "IELTS",
    level: "IELTS Foundation & Pre-IELTS",
    startDate: "Lớp Online sắp khai giảng",
    status: "ĐANG TUYỂN",
    isFull: false,
    days: "Thứ 2 / 4 / 6",
    time: "19:30 - 21:00 (Online)",
  },
  {
    id: 2,
    program: "TOEIC",
    level: "TOEIC Chuẩn Đầu Ra (Aim 650+)",
    startDate: "Lớp Online sắp khai giảng",
    status: "ĐANG TUYỂN",
    isFull: false,
    days: "Thứ 3 / 5 / 7",
    time: "19:30 - 21:00 (Online)",
  },
  {
    id: 3,
    program: "GIAO TIẾP",
    level: "Tiếng Anh Phản Xạ Thực Chiến",
    startDate: "Lớp Online sắp khai giảng",
    status: "ĐANG TUYỂN",
    isFull: false,
    days: "Thứ 2 / 4 / 6",
    time: "20:00 - 21:30 (Online)",
  },
];

const ScheduleTable = () => {
  return (
    <div className="p-8 bg-gray-50 font-sans" id="lich-hoc">
      <div className="max-w-7xl mx-auto mb-10">
        <SectionHeading
          eyebrow="LỊCH KHAI GIẢNG CÁC LỚP ONLINE"
          title="Lịch Khai Giảng Trực Tuyến Tại"
          highlight="Tân Sanh Ngữ"
          desc="Cập nhật liên tục lịch khai giảng các lớp học Online mới nhất. Sĩ số tinh gọn để đảm bảo giảng viên theo sát và tương tác tối đa."
          className="text-center"
        />
      </div>
      <div className="max-w-7xl mx-auto bg-white overflow-x-auto shadow-sm rounded-xl border border-gray-100">
        <table className="w-full min-w-[760px] table-fixed text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase font-semibold bg-gray-50/60">
              <th className="py-4 px-6 w-[32%]">Trình độ & Khóa học</th>
              <th className="py-4 px-6 w-[20%]">
                <i className="fa-solid fa-graduation-cap mr-2"></i>Lớp khai giảng
              </th>
              <th className="py-4 px-6 w-[16%] text-center">
                <i className="fa-solid fa-check mr-2"></i>Tình trạng
              </th>
              <th className="py-4 px-6 w-[18%]">
                <i className="fa-regular fa-clock mr-2"></i>Lịch học
              </th>
              <th className="py-4 px-6 w-[14%] text-center">Đăng ký</th>
            </tr>
          </thead>
          <tbody>
            {/* 2. Dùng map để duyệt qua mảng dữ liệu và tạo ra các thẻ <tr> */}
            {scheduleData.map((course) => (
              <tr key={course.id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">

                {/* Trình độ */}
                <td className="py-5 px-6 align-middle">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-primary/10 text-primary mb-1.5">
                    {course.program}
                  </span>
                  <div className="text-gray-900 font-bold text-[15px] leading-snug">{course.level}</div>
                </td>

                {/* Lớp khai giảng */}
                <td className="py-5 px-6 text-gray-700 text-sm align-middle font-medium">
                  {course.startDate}
                </td>

                {/* Tình trạng */}
                <td className="py-5 px-6 text-center align-middle">
                  <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full border ${course.isFull
                    ? "text-primary border-primary/20 bg-primary/5"
                    : "text-emerald-700 border-emerald-200 bg-emerald-50"
                    }`}>
                    {course.status}
                  </span>
                </td>

                {/* Buổi học */}
                <td className="py-5 px-6 align-middle">
                  <div className="font-bold text-gray-800 text-sm">{course.days}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{course.time}</div>
                </td>

                {/* Đăng ký */}
                <td className="py-5 px-6 text-center align-middle">
                  <a
                    href={"#tu-van"}
                    className="bg-accent hover:bg-secondary-hover text-primary font-bold py-2 px-4 rounded-lg shadow-sm transition hover:shadow-md text-xs whitespace-nowrap inline-block"
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
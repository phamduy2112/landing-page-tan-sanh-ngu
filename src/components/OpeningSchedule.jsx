
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";

import {
  HiOutlineAcademicCap,
  HiOutlineCheck,
  HiOutlineClock,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineXMark,
  HiOutlineArrowRight,
} from "react-icons/hi2";

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

export default function ScheduleTable() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Đóng modal bằng ESC và khóa cuộn trang
  useEffect(() => {
    if (!selectedCourse) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCourse(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCourse]);

  // Đóng modal và cuộn đến form tư vấn
  const handleRegister = () => {
    setSelectedCourse(null);

    requestAnimationFrame(() => {
      const section = document.getElementById("tu-van");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  return (
    <section
      id="lich-hoc"
      className="bg-gray-50 px-4 py-10 font-sans lg:py-16"
    >
      <div className="mx-auto mb-10 max-w-7xl">
        <SectionHeading
          eyebrow="LỊCH KHAI GIẢNG CÁC LỚP ONLINE"
          title="Lịch Khai Giảng Trực Tuyến Tại"
          highlight="Tân Sanh Ngữ"
          desc="Cập nhật liên tục lịch khai giảng các lớp học Online mới nhất. Sĩ số tinh gọn để đảm bảo giảng viên theo sát và tương tác tối đa."
          className="text-center"
        />
      </div>

      {/* BẢNG LỊCH KHAI GIẢNG */}
      <div className="mx-auto max-w-7xl overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/60 text-xs font-semibold uppercase text-gray-500">
              <th className="w-[32%] px-6 py-4">
                Trình độ & Khóa học
              </th>

              <th className="w-[20%] px-6 py-4">
                <span className="flex items-center gap-2">
                  <HiOutlineAcademicCap className="h-4 w-4 shrink-0" />
                  Lớp khai giảng
                </span>
              </th>

              <th className="w-[16%] px-6 py-4 text-center">
                <span className="flex items-center justify-center gap-2">
                  <HiOutlineCheck className="h-4 w-4 shrink-0" />
                  Tình trạng
                </span>
              </th>

              <th className="w-[18%] px-6 py-4">
                <span className="flex items-center gap-2">
                  <HiOutlineClock className="h-4 w-4 shrink-0" />
                  Lịch học
                </span>
              </th>

              <th className="w-[14%] px-6 py-4 text-center">
                Đăng ký
              </th>
            </tr>
          </thead>

          <tbody>
            {scheduleData.map((course) => (
              <tr
                key={course.id}
                className="border-b border-gray-100 transition-colors last:border-b-0 hover:bg-gray-50/80"
              >
                {/* TRÌNH ĐỘ */}
                <td className="px-6 py-5 align-middle">
                  <span className="mb-1.5 inline-block rounded bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    {course.program}
                  </span>

                  <div className="text-[15px] font-bold leading-snug text-gray-900">
                    {course.level}
                  </div>
                </td>

                {/* KHAI GIẢNG */}
                <td className="px-6 py-5 align-middle text-sm font-medium text-gray-700">
                  {course.startDate}
                </td>

                {/* TÌNH TRẠNG */}
                <td className="px-6 py-5 text-center align-middle">
                  <span
                    className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-xs font-semibold ${course.isFull
                      ? "border-primary/20 bg-primary/5 text-primary"
                      : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                  >
                    {course.status}
                  </span>
                </td>

                {/* LỊCH HỌC */}
                <td className="px-6 py-5 align-middle">
                  <div className="text-sm font-bold text-gray-800">
                    {course.days}
                  </div>

                  <div className="mt-0.5 text-xs text-gray-500">
                    {course.time}
                  </div>
                </td>

                {/* NÚT ĐĂNG KÝ */}
                <td className="px-6 py-5 text-center align-middle">
                  <button
                    type="button"
                    disabled={course.isFull}
                    onClick={() => setSelectedCourse(course)}
                    className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-xs font-bold text-primary shadow-sm transition hover:bg-secondary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Đăng ký ngay
                    <HiOutlineArrowRight className="h-3.5 w-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL THÔNG TIN KHÓA HỌC */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-[3px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCourse(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-modal-title"
            className="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            {/* HEADER MODAL */}
            <div className="relative bg-primary px-7 pb-7 pt-8 text-white">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                aria-label="Đóng cửa sổ"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <HiOutlineXMark className="h-5 w-5" />
              </button>

              <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                TÂN SANH NGỮ
              </span>

              <h3
                id="course-modal-title"
                className="pr-4 text-2xl font-bold leading-snug"
              >
                {selectedCourse.level}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Khám phá lộ trình học phù hợp và bắt đầu hành trình
                chinh phục tiếng Anh cùng Tân Sanh Ngữ.
              </p>
            </div>

            {/* NỘI DUNG MODAL */}
            <div className="px-7 py-7">
              <div className="mb-6 space-y-4">
                {/* CHƯƠNG TRÌNH ĐÀO TẠO */}
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HiOutlineAcademicCap className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-xs text-gray-500">
                      Chương trình đào tạo
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {selectedCourse.program}
                    </p>
                  </div>
                </div>

                {/* LỊCH HỌC DỰ KIẾN */}
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HiOutlineCalendarDays className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-xs text-gray-500">
                      Lịch học dự kiến
                    </p>

                    <p className="text-sm font-semibold text-gray-900">
                      {selectedCourse.days}
                    </p>

                    <p className="mt-0.5 text-sm text-gray-600">
                      {selectedCourse.time}
                    </p>
                  </div>
                </div>

                {/* THÔNG TIN KHAI GIẢNG */}
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HiOutlineCheckCircle className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-xs text-gray-500">
                      Thông tin khai giảng
                    </p>

                    <p className="text-sm font-semibold text-gray-900">
                      {selectedCourse.startDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* NỘI DUNG TƯ VẤN */}
              <div className="mb-6 rounded-xl border border-primary/10 bg-primary/5 p-4">
                <p className="text-sm leading-relaxed text-gray-700">
                  Đăng ký tư vấn để được đội ngũ Tân Sanh Ngữ
                  hỗ trợ tìm hiểu chương trình, đánh giá trình độ
                  và lựa chọn lộ trình học phù hợp với mục tiêu
                  của bạn.
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={handleRegister}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-primary transition hover:bg-secondary-hover"
              >
                Đăng ký tư vấn ngay
                <HiOutlineArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Tư vấn chương trình và lộ trình học
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

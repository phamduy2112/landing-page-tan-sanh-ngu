import ButtonCTA from "./button-cta";
import SectionHeading from "./section-heading";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function OpeningSchedule() {
  return (
    <section id="lich-khai-giang" className="overflow-hidden bg-white py-10 lg:py-16 px-4 md:px-0">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          eyebrow="LỊCH HỌC MỚI NHẤT"
          title="Lịch Khai Giảng Tại"
          highlight="Tân Sanh Ngữ"
          desc="Cập nhật lịch khai giảng các khóa học tiếng Anh. Nhanh tay đăng ký để giữ chỗ và nhận ngay các ưu đãi hấp dẫn trong tháng!"
          className="mb-4 text-center"
        />

        {/* Khung chứa hình ảnh lịch khai giảng */}
        <div className="relative flex justify-center overflow-hidden rounded-[24px] shadow-xl border border-primary/10 bg-surface-muted p-2 md:p-4">
          <img
            // TẠM THỜI ĐỂ PLACEHOLDER - BẠN THAY ĐƯỜNG DẪN HÌNH VÀO ĐÂY NHÉ
            src="/assets/dangcapnhan.png"
            alt="Lịch khai giảng Tân Sanh Ngữ"
            className="w-full max-w-[800px] h-auto object-cover rounded-[16px] transition duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Nút Call To Action */}
        <div className="mt-4 flex justify-center">

          <ButtonCTA text="Đăng ký tư vấn" />

        </div>
      </div>
    </section>
  );
}

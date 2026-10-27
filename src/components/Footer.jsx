
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

export default function Footer() {
  return (
    <footer
      className="bg-primary pb-0 pt-[60px] text-surface"
      id="footer"
    >
      <div className="container mx-auto grid w-[calc(100%-3rem)] max-w-[1200px] gap-8 pb-10 md:w-[calc(100%-5rem)] md:grid-cols-[1.3fr_.8fr_1.2fr] md:gap-10 lg:gap-[70px]">

        {/* THÔNG TIN TRUNG TÂM */}
        <div>
          <a
            className="flex items-center gap-2.5"
            href="#top"
            aria-label="Tân Sanh Ngữ - Về đầu trang"
          >
            <img
              src="/assets/LOGO3.png"
              className="h-auto w-[150px]"
              alt="Tân Sanh Ngữ Logo"
            />
          </a>

          <p className="mt-[18px] max-w-[310px] text-[12px] leading-relaxed text-surface/75">
            Trung tâm đào tạo ngoại ngữ Online: IELTS, TOEIC
            và Tiếng Anh Giao tiếp thực chiến.
          </p>
        </div>

        {/* KHÁM PHÁ */}
        <div className="grid content-start justify-items-start gap-3">
          <h2 className="mb-2 text-[14px] font-bold text-highlight">
            Khám phá
          </h2>

          {[
            { label: "Khóa học Online", href: "#courses" },
            { label: "Lịch khai giảng", href: "#lich-hoc" },
            { label: "Về Tân Sanh Ngữ", href: "#about" },
            { label: "Câu hỏi thường gặp", href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] text-surface/75 transition-colors hover:text-highlight"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* LIÊN HỆ */}
        <div className="grid content-start gap-4">
          <h2 className="mb-1 text-[14px] font-bold text-highlight">
            Liên hệ
          </h2>

          {/* ĐỊA CHỈ */}
          <div className="flex items-start gap-3">
            <HiOutlineMapPin className="mt-0.5 shrink-0 text-[19px] text-highlight" />

            <a
              href="https://www.google.com/maps/search/?api=1&query=27%2F25%2F4%20Nguy%E1%BB%85n%20V%C4%83n%20S%C4%83ng%2C%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20TPHCM"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-1 text-[12px] leading-relaxed text-surface/75 transition-colors hover:text-highlight"
            >
              <span>
                27/25/4 Nguyễn Văn Săng, phường Tân Sơn Nhì,
                TP. Hồ Chí Minh
              </span>

              <HiOutlineArrowTopRightOnSquare className="mt-0.5 shrink-0 text-[13px] opacity-60 transition group-hover:opacity-100" />
            </a>
          </div>

          {/* SỐ ĐIỆN THOẠI */}
          <div className="flex items-start gap-3">
            <HiOutlinePhone className="mt-0.5 shrink-0 text-[19px] text-highlight" />

            <div className="flex flex-col gap-1">
              <a
                href="tel:0938588350"
                className="text-[12px] text-surface/75 transition-colors hover:text-highlight"
              >
                0938 588 350
              </a>

              <a
                href="tel:0945892539"
                className="text-[12px] text-surface/75 transition-colors hover:text-highlight"
              >
                0945 892 539
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-3">
            <HiOutlineEnvelope className="mt-0.5 shrink-0 text-[19px] text-highlight" />

            <a
              href="mailto:tansanhngu@gmail.com"
              className="break-all text-[12px] text-surface/75 transition-colors hover:text-highlight"
            >
              tansanhngu@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container mx-auto flex min-h-[55px] w-[calc(100%-3rem)] max-w-[1200px] flex-col justify-center gap-2 border-t border-surface/20 py-4 text-[11px] text-surface/65 md:w-[calc(100%-5rem)] md:flex-row md:items-center md:justify-between md:py-0">
        <span>
          © {new Date().getFullYear()} Tân Sanh Ngữ · Ngoại ngữ Online thực chiến
        </span>

        <span>
          Landing Page phát triển bởi InnoLabs
        </span>
      </div>
    </footer>
  );
}

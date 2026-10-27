
export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[660px] items-center overflow-hidden bg-primary text-surface md:min-h-[min(800px,41.67vw)]"
      id="top"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/assets/dangcapnhan.png')] bg-contain bg-no-repeat bg-[center_45%]"
        role="img"
        aria-label="Ảnh minh họa lớp học ngoại ngữ"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/20"
        aria-hidden="true"
      />

      {/* Decoration */}
      <div
        className="pointer-events-none absolute -right-64 -top-64 -z-10 h-[520px] w-[520px] rounded-full border border-surface/20"
        aria-hidden="true"
      />

      <div className="container relative mx-auto flex min-h-inherit w-[calc(100%-3rem)] max-w-[1200px] items-center py-12 md:w-[calc(100%-5rem)] md:py-24">

        <div className="w-full max-w-[660px] animate-rise-in md:w-[63%]">

          {/* ZONE 1 */}
          <p className="mb-[17px] text-[11px] font-extrabold uppercase tracking-[.11em] text-highlight sm:text-[12px]">
            <span className="mr-2 inline-block h-0.5 w-6 bg-current align-middle" />
            Progress today, success tomorrow
          </p>

          {/* ZONE 2 */}
          <h1
            id="hero-title"
            className="mb-[22px] max-w-[720px] font-heading text-[36px] font-extrabold leading-[1.4] sm:text-[42px] md:text-[56px]"
          >
            Kiến tạo nền tảng, <div className="hidden sm:block"></div>
            <span className="text-highlight">
              vươn tầm bản sắc.
            </span>
          </h1>

          {/* ZONE 3 */}
          <p className="mb-8 max-w-[590px] text-[14px] leading-[1.8] text-surface/90 md:text-[17px]">
            Tại Tân Sanh Ngữ, Tiếng Anh là một trải nghiệm rèn luyện
            mang đậm dấu ấn cá nhân. Dựa trên bề dày truyền thống giáo
            dục và sự thấu hiểu phương pháp tân tiến, chúng tôi mang
            đến các lộ trình phù hợp với từng bản sắc học viên, giúp
            bạn không chỉ học mà còn tự tin sử dụng Tiếng Anh như
            ngôn ngữ thứ hai.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex sm:max-w-[800px] flex-col gap-3 sm:flex-row">
            {/* Nút 1: Màu vàng thương hiệu (Accent/Gold) nổi bật nhất */}
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-accent px-5 py-3.5 text-center text-sm font-extrabold text-primary shadow-md transition hover:-translate-y-0.5 hover:bg-secondary-hover hover:shadow-lg"
              href="#tu-van"
            >
              Nhận tư vấn lộ trình Online
              <span aria-hidden="true">↗</span>
            </a>

            {/* Nút 2: Nền trắng chữ Navy (Solid Surface) nổi bật cấp 2 */}
            <a
              className="inline-flex min-h-[52px] items-center justify-center rounded bg-surface px-5 py-3.5 text-center text-sm font-bold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-surface-muted hover:shadow-md"
              href="#lich-khai-giang"
            >
              Lịch Khai Giảng
            </a>

            {/* Nút 3: Nền trong suốt viền trắng tinh tế (Outlined Glass) */}
            <a
              className="inline-flex min-h-[52px] items-center justify-center rounded border border-surface/70 bg-surface/10 px-5 py-3.5 text-center text-sm font-bold text-surface backdrop-blur-sm transition hover:border-surface hover:bg-surface/20"
              href="#courses"
            >
              Khám phá khóa học
            </a>
          </div>


        </div>

        {/* CIRCLE BADGE */}
        <div
          className="absolute bottom-[16%] right-[4%] hidden aspect-square w-[142px] rotate-[9deg] flex-col items-center justify-center rounded-full border border-surface/65 text-center before:absolute before:inset-[7px] before:rounded-full before:border before:border-dashed before:border-surface/55 lg:flex"
          aria-hidden="true"
        >
          <span className="text-[8px] font-bold tracking-[.1em]">
            HỌC ONLINE
          </span>
          <b className="my-1 text-[22px] leading-none text-highlight">
            thực
            <br />
            chiến
          </b>
          <span className="text-[8px] font-bold tracking-[.1em]">
            THEO MỤC TIÊU
          </span>
        </div>

        {/* SCROLL INDICATOR */}
        <a
          className="absolute bottom-7 right-8 hidden items-center gap-2 text-[10px] text-surface/75 md:flex"
          href="#kho-khan"
          aria-label="Cuộn để khám phá"
        >
          <span className="h-[30px] w-[21px] rounded-full border border-current" />
          Cuộn để khám phá
        </a>
      </div>
    </section>
  );
}

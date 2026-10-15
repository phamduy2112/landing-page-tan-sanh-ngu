export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[660px] items-center overflow-hidden bg-primary text-surface md:min-h-[min(800px,41.67vw)]" id="top" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-20 bg-[url('/assets/dangcapnhan.png')] bg-contain bg-no-repeat bg-[center_45%]" role="img" aria-label="Ảnh minh họa lớp học ngoại ngữ" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-64 -top-64 -z-10 h-[520px] w-[520px] rounded-full border border-surface/20" aria-hidden="true" />
      <div className="container relative mx-auto flex min-h-inherit w-[calc(100%-3rem)] max-w-[1200px] items-center py-20 md:w-[calc(100%-5rem)] md:py-24">
        <div className="w-full max-w-[660px] animate-rise-in md:w-[63%]">
          <p className="mb-[17px] text-[11px] font-extrabold tracking-[.11em] text-highlight"><span className="mr-2 inline-block h-0.5 w-6 bg-current align-middle" />TRUNG TÂM ĐÀO TẠO NGOẠI NGỮ TÂN SANH NGỮ</p>
          <h1 className="mb-[22px] max-w-[720px] font-heading text-[36px] font-extrabold leading-[1.13] sm:text-[42px] md:text-[56px]">Chinh phục ngoại ngữ Online <em className="text-highlight not-italic">thực chiến & hiệu quả.</em></h1>
          <p className="mb-8 max-w-[590px] text-[15px] leading-[1.8] text-surface/90 md:text-[17px]">Khóa học Online tương tác cao: Tiếng Anh Giao tiếp, TOEIC chuẩn đầu ra và IELTS mục tiêu dành cho học sinh THPT, sinh viên cùng người đi làm.</p>
          <div className="flex max-w-[520px] flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded bg-accent px-6 py-3.5 text-center text-sm font-extrabold text-primary transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-secondary-hover" href="#tu-van">Nhận tư vấn lộ trình Online <span aria-hidden="true">↗</span></a>
            <a className="inline-flex min-h-[52px] items-center justify-center rounded border border-surface/65 bg-surface/10 px-6 py-3.5 text-center text-sm font-bold text-surface transition hover:bg-surface/20" href="#courses">Khám phá các khóa học</a>
          </div>
          <div className="mt-8 flex items-center gap-2.5 text-xs text-surface/85"><span className="text-xl text-highlight" aria-hidden="true">✦</span><span>Linh hoạt thời gian · Tương tác hai chiều cùng giảng viên · Cam kết tiến bộ</span></div>
        </div>
        <div className="absolute bottom-[16%] right-[4%] hidden aspect-square w-[142px] rotate-[9deg] flex-col items-center justify-center rounded-full border border-surface/65 text-center before:absolute before:inset-[7px] before:rounded-full before:border before:border-dashed before:border-surface/55 lg:flex" aria-hidden="true"><span className="text-[8px] font-bold tracking-[.1em]">HỌC ONLINE</span><b className="my-1 text-[22px] leading-none text-highlight">thực<br />chiến</b><span className="text-[8px] font-bold tracking-[.1em]">THEO MỤC TIÊU</span></div>
        <a className="absolute bottom-7 right-8 hidden items-center gap-2 text-[10px] text-surface/75 md:flex" href="#kho-khan" aria-label="Cuộn để khám phá"><span className="h-[30px] w-[21px] rounded-full border border-current" /> Cuộn để khám phá</a>
      </div>
    </section>
  )
}

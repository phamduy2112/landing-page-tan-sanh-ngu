export default function Footer() {
  return (
    <footer className="bg-primary pb-0 pt-[60px] text-surface" id="footer">
      <div className="container mx-auto grid w-[calc(100%-3rem)] max-w-[1200px] gap-8 pb-10 md:w-[calc(100%-5rem)] md:grid-cols-[1.3fr_.8fr_1fr] md:gap-[70px]">
        <div>
          <a className="flex items-center gap-2.5" href="#top">
            <img src="/assets/LOGO3.png" className='w-[150px] h-auto' alt="Tân Sanh Ngữ Logo" />
          </a>
          <p className="mt-[18px] max-w-[310px] text-[11px] text-surface/70">Trung tâm đào tạo ngoại ngữ Online: IELTS, TOEIC và Tiếng Anh Giao tiếp thực chiến.</p>
        </div>
        <div className="grid content-start justify-items-start gap-2"><h2 className="mb-2 text-xs font-bold text-highlight">Khám phá</h2><a className="text-[11px] text-surface/75 hover:text-highlight" href="#courses">Khóa học Online</a><a className="text-[11px] text-surface/75 hover:text-highlight" href="#lich-hoc">Lịch khai giảng</a><a className="text-[11px] text-surface/75 hover:text-highlight" href="#about">Về Tân Sanh Ngữ</a><a className="text-[11px] text-surface/75 hover:text-highlight" href="#faq">Câu hỏi thường gặp</a></div>
        <div className="grid content-start justify-items-start gap-2"><h2 className="mb-2 text-xs font-bold text-highlight">Liên hệ</h2><p className="text-[11px] text-surface/75">Hotline: [Chờ cập nhật số chính thức]</p><p className="text-[11px] text-surface/75">Zalo / Fanpage: [Chờ cập nhật kênh chính thức]</p></div>
      </div>
      <div className="container mx-auto flex min-h-[55px] w-[calc(100%-3rem)] max-w-[1200px] flex-col justify-center border-t border-surface/20 text-[9px] text-surface/65 md:w-[calc(100%-5rem)] md:flex-row md:items-center md:justify-between"><span>© Tân Sanh Ngữ · Ngoại ngữ Online thực chiến</span><span>Landing Page phát triển bởi InnoLabs</span></div>
    </footer>
  )
}

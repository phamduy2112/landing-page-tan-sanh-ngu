export default function Footer() {
  return (
    <footer className="bg-primary pb-0 pt-[60px] text-surface" id="footer">
      <div className="container mx-auto grid w-[calc(100%-3rem)] max-w-[1200px] gap-8 pb-10 md:w-[calc(100%-5rem)] md:grid-cols-[1.3fr_.8fr_1fr] md:gap-[70px]">
        <div>
          <a className="flex items-center gap-2.5" href="#top">
            <img src="../public/assets/LOGO3.png" className='w-[150px] h-auto' alt="" />

          </a>
          <p className="mt-[18px] max-w-[310px] text-[11px] text-surface/70">Chương trình ngoại ngữ cho trẻ em và người học Online.</p>
          {/* TODO: replace with approved data */}



        </div>
        <div className="grid content-start justify-items-start gap-2"><h2 className="mb-2 text-xs font-bold text-highlight">Khám phá</h2><a className="text-[11px] text-surface/75 hover:text-highlight" href="#programs">Chương trình</a><a className="text-[11px] text-surface/75 hover:text-highlight" href="#pathway">Lộ trình tư vấn</a><a className="text-[11px] text-surface/75 hover:text-highlight" href="#teachers">Giáo viên</a><a className="text-[11px] text-surface/75 hover:text-highlight" href="#faq">Câu hỏi thường gặp</a></div>
        <div className="grid content-start justify-items-start gap-2"><h2 className="mb-2 text-xs font-bold text-highlight">Liên hệ</h2><p className="text-[11px] text-surface/75">Địa chỉ, số điện thoại, email và giờ hoạt động: TODO</p><p className="text-[11px] text-surface/75">Liên kết mạng xã hội: TODO</p></div>
      </div>
      <div className="container mx-auto flex min-h-[55px] w-[calc(100%-3rem)] max-w-[1200px] flex-col justify-center border-t border-surface/20 text-[9px] text-surface/65 md:w-[calc(100%-5rem)] md:flex-row md:items-center md:justify-between"><span>© Tân Sanh Ngữ</span><span>Mockup giao diện · Thông tin đang chờ duyệt</span></div>
    </footer>
  )
}

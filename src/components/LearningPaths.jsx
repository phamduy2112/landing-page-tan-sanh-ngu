const paths = [
  { number: '01', icon: '✳', title: 'Khóa học cho trẻ', detail: 'Tiếng Anh Offline · PreStarter đến Flyers', href: '#program-kids', tone: 'bg-highlight text-primary' },
  { number: '02', icon: '◎', title: 'Khóa học Online', detail: 'IELTS · TOEIC · Giao tiếp · Tiếng Nhật', href: '#program-online', tone: 'bg-primary/10 text-primary' },
]

export default function LearningPaths() {
  return (
    <section className="overflow-hidden py-[72px] md:py-28" id="audiences" aria-labelledby="audiences-title">
      <div className="container mx-auto w-[calc(100%-3rem)] max-w-[1200px] md:w-[calc(100%-5rem)]">
        <div className="mx-auto mb-11 max-w-[700px] text-center">
          <p className="mb-4 text-[11px] font-extrabold tracking-[.11em] text-accent">CHỌN HÀNH TRÌNH CỦA BẠN</p>
          <h2 className="mb-3 font-heading text-[28px] font-extrabold leading-tight text-primary md:text-[38px]" id="audiences-title">Bạn đang tìm lớp học cho ai?</h2>
          <p className="text-sm text-text-muted md:text-[15px]">Chọn nhóm học phù hợp để xem chương trình đào tạo.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {paths.map((path) => <a className="group relative flex min-h-[145px] items-center gap-4 overflow-hidden rounded-[10px] border border-primary/10 bg-surface p-5 shadow-[0_12px_36px_rgba(20,34,73,0.08)] transition hover:-translate-y-1 hover:shadow-xl md:min-h-[174px] md:gap-[22px] md:px-[38px]" href={path.href} key={path.number}>
            <span className="absolute right-5 top-4 text-[11px] font-bold text-text-muted/70">{path.number}</span>
            <span className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full text-[29px] md:h-[62px] md:w-[62px] md:text-[35px] ${path.tone}`} aria-hidden="true">{path.icon}</span>
            <span className="grid gap-1"><strong className="text-[17px] font-extrabold text-primary md:text-[21px]">{path.title}</strong><small className="max-w-[230px] text-[10px] text-text-muted md:text-xs">{path.detail}</small></span>
            <span className="z-10 ml-auto text-2xl text-accent transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
            <span className="pointer-events-none absolute -bottom-20 -right-10 h-[200px] w-[200px] rounded-full border border-primary/10" aria-hidden="true" />
          </a>)}
        </div>
      </div>
    </section>
  )
}

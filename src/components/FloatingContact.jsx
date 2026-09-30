export default function FloatingContact() {
  return (
    <div className="fixed bottom-3 right-2 z-40 grid gap-1.5 md:bottom-5 md:right-4 md:gap-2" aria-label="Kênh liên hệ">
      {/* TODO: replace with approved contact links */}
      <a className="grid min-h-[39px] min-w-[39px] place-items-center rounded-full border-2 border-surface bg-primary px-2.5 text-[8px] font-extrabold text-surface shadow-lg transition hover:-translate-y-1 md:min-h-12 md:min-w-12 md:text-[9px]" href="#tu-van" aria-label="Liên hệ qua điện thoại" title="Call · cập nhật số điện thoại">Call</a>
      <a className="grid min-h-[39px] min-w-[39px] place-items-center rounded-full border-2 border-surface bg-accent px-2.5 text-[8px] font-extrabold text-surface shadow-lg transition hover:-translate-y-1 md:min-h-12 md:min-w-12 md:text-[9px]" href="#tu-van" aria-label="Liên hệ qua Zalo" title="Zalo · cập nhật liên kết">Zalo</a>
      <a className="grid min-h-[39px] min-w-[39px] place-items-center rounded-full border-2 border-surface bg-primary/80 px-2.5 text-[8px] font-extrabold text-surface shadow-lg transition hover:-translate-y-1 md:min-h-12 md:min-w-12 md:text-[9px]" href="#tu-van" aria-label="Liên hệ qua Messenger" title="Messenger · cập nhật liên kết">Msg</a>
    </div>
  )
}

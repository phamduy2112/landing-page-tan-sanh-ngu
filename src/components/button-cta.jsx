export default function ButtonCTA({ text = "Đăng ký tư vấn" }) {
  return (
    <a
      href="#tu-van"
      className="group mt-2 inline-flex w-fit items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-[13px] font-extrabold text-surface transition hover:bg-accent"
    >
      {text}
      <span className="text-lg transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
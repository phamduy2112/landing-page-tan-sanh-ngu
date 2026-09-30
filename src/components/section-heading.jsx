export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  desc,
  className = "",
}) {
  return (
    <div className={`mb-4 px-5  md:px-0 ${className}`}>
      {eyebrow && (
        <span className="mb-2 inline-block text-[11px] font-extrabold tracking-[0.14em] text-accent md:text-[12px]">
          {eyebrow}
        </span>
      )}

      <h2 className=" text-[26px] font-bold leading-[1.25] tracking-[-0.6px] text-[#142249] sm:text-[30px] capitalize md:text-[34px] ">
        {title}{" "}
        {highlight && <span className="text-accent">{highlight}</span>}
      </h2>

      {desc && (
        <p className="mx-auto mt-3 max-w-[720px] text-[14px] leading-[1.65] text-text-muted">
          {desc}
        </p>
      )}
    </div>
  );
}
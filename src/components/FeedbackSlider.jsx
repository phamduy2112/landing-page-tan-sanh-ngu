import { useState } from "react";
import SectionHeading from "./section-heading";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const feedbackImages = [
  {
    image: "/assets/dangcapnhan.png",
    alt: "Hoạt động học tập tại Tân Sanh Ngữ",
  },
  {
    image: "/assets/dangcapnhan.png",
    alt: "Khoảnh khắc học viên tại Tân Sanh Ngữ",
  },
  {
    image: "/assets/dangcapnhan.png",
    alt: "Hình ảnh lớp học tại Tân Sanh Ngữ",
  },
  {
    image: "/assets/dangcapnhan.png",
    alt: "Trải nghiệm học tập tại Tân Sanh Ngữ",
  },
  {
    image: "/assets/dangcapnhan.png",
    alt: "Chia sẻ từ phụ huynh và học viên Tân Sanh Ngữ",
  },
];

export default function FeedbackSlider() {
  const [index, setIndex] = useState(0);

  const previousSlide = () => {
    setIndex(
      (current) =>
        (current - 1 + feedbackImages.length) % feedbackImages.length,
    );
  };

  const nextSlide = () => {
    setIndex((current) => (current + 1) % feedbackImages.length);
  };

  const visibleImages = Array.from(
    { length: Math.min(3, feedbackImages.length) },
    (_, offset) => feedbackImages[(index + offset) % feedbackImages.length],
  );

  return (
    <section id="feedback" className="overflow-hidden bg-surface-muted py-4 lg:py-12">
      <div className="container mx-auto w-[calc(100%-2rem)] max-w-[1200px] md:w-[calc(100%-5rem)]">
        <div className="mb-8 flex items-end justify-between gap-5 max-md:block">
          <SectionHeading
            eyebrow="HÌNH ẢNH THỰC TẾ"
            title="Khoảnh khắc học tập tại"
            highlight="Tân Sanh Ngữ"
            desc="Cùng xem những hình ảnh hoạt động và trải nghiệm học tập của học viên tại trung tâm."
            className="mb-0 max-w-[720px]  px-0 text-center sm:text-left [&>p]:mx-0"
          />

          <div className="mt-5 flex shrink-0 gap-3 md:mt-0 hidden md:block">
            <button
              type="button"
              aria-label="Ảnh trước"
              onClick={previousSlide}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface text-xl text-primary transition hover:bg-primary hover:text-surface"
            >
                            <GrFormPrevious className="text-[24px]" />
              
            </button>

            <button
              type="button"
              aria-label="Ảnh tiếp theo"
              onClick={nextSlide}
              className="grid h-11 w-11 place-items-center rounded-full bg-accent text-xl text-surface transition hover:bg-primary"
            >
                         <MdOutlineNavigateNext className="text-[24px]" />
           
            </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-hidden md:gap-6">
          {visibleImages.map((item, position) => (
            <article
              key={`${item.image}-${index}-${position}`}
              className="group relative aspect-[4/5] w-[82%] shrink-0 overflow-hidden rounded-[22px] bg-surface shadow-[0_10px_28px_rgba(20,34,73,0.1)] md:w-[calc((100%-3rem)/3)]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />

              <span className="absolute bottom-4 left-4 rounded-full bg-highlight px-3 py-1.5 text-[10px] font-extrabold tracking-[0.08em] text-primary">
                TÂN SANH NGỮ
              </span>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {feedbackImages.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Xem ảnh ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 rounded-full transition-all ${
                index === dotIndex
                  ? "w-7 bg-accent"
                  : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
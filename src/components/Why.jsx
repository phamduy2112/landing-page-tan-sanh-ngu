import { useRef, useState } from "react";
import SectionHeading from "./section-heading";

const items = [
  {
    title: "Lộ Trình Phù Hợp",
    desc: "Chương trình được định hướng theo độ tuổi, trình độ hiện tại và mục tiêu học của từng người học.",
    icon: "route",
  },
  {
    title: "Học Đúng Hình Thức",
    desc: "Trẻ em học trực tiếp để tăng tương tác; học sinh, sinh viên và người đi làm có thể học Online linh hoạt.",
    icon: "online",
  },
  {
    title: "Giáo Viên Đồng Hành",
    desc: "Người học được hỗ trợ trong quá trình luyện tập, theo dõi tiến độ và phát triển năng lực ngoại ngữ.",
    icon: "teacher",
  },
  {
    title: "Tư Vấn Trước Khi Chọn Lớp",
    desc: "Trao đổi nhu cầu trước khi đăng ký để lựa chọn chương trình phù hợp hơn với người học.",
    icon: "consultation",
  },
];

function RouteIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8">
      <path
        d="M15 16h28l8 8v25H15V16Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M43 16v9h8M24 29h18M24 36h14M24 43h9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m43 48 4 4 8-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OnlineIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8">
      <rect
        x="10"
        y="13"
        width="44"
        height="31"
        rx="4"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M25 53h14M32 44v9M23 27h18M23 34h12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m42 38 3 3 6-7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TeacherIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8">
      <circle cx="32" cy="23" r="9" stroke="currentColor" strokeWidth="3" />
      <path
        d="M16 51c1-10 7-16 16-16s15 6 16 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M47 16h7M50.5 12.5v7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8">
      <path
        d="M13 17h38v25H30l-10 8v-8h-7V17Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M23 27h18M23 34h11"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Icon({ type }) {
  if (type === "route") return <RouteIcon />;
  if (type === "online") return <OnlineIcon />;
  if (type === "teacher") return <TeacherIcon />;

  return <ConsultationIcon />;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="m7 4 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m15 6-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({ item, mobile = false }) {
  return (
    <article
      className={`group flex min-h-[250px] flex-col items-center rounded-[20px] border border-primary/10 bg-surface px-5 py-7 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl ${
        mobile ? "w-full shrink-0 snap-center" : "h-full"
      }`}
    >
      <div className="mb-3 grid h-[50px] w-[50px] place-items-center rounded-[20px] bg-highlight text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-accent">
        <Icon type={item.icon} />
      </div>

      <h3 className="max-w-[290px] text-[17px] font-extrabold leading-[1.4] text-primary">
        {item.title}
      </h3>

      <p className="mx-auto mt-1 max-w-[300px] text-[13px] leading-[1.7] text-text-muted">
        {item.desc}
      </p>

      <a
        href="#tu-van"
        className="inline-flex items-center gap-1 pt-2 text-[13px] font-bold text-accent transition-all duration-200 hover:gap-2 hover:text-primary"
      >
        Nhận tư vấn lộ trình
        <ArrowIcon />
      </a>
    </article>
  );
}

export default function WhySection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const newIndex = Math.max(0, Math.min(index, items.length - 1));
    const target = slider.children[newIndex];

    if (!target) return;

    slider.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = Array.from(slider.children);

    const closestIndex = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(slider.scrollLeft - card.offsetLeft);

        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Infinity },
    );

    setCurrentIndex(closestIndex.index);
  };

  return (
    <section id="ly-do-chon" className="w-full overflow-hidden bg-surface-muted py-10 lg:py-16">
      <div className="mx-auto max-w-[1320px] md:px-8">
        <SectionHeading
          eyebrow="VÌ SAO CHỌN TÂN SANH NGỮ"
          title="Học đúng hướng,"
          highlight="tiến bộ từng ngày"
          desc="Tân Sanh Ngữ đồng hành cùng người học từ bước xác định nhu cầu đến khi lựa chọn chương trình và hình thức học phù hợp."
          className=" text-center"
        />

        {/* Mobile */}
        <div className="md:hidden">
          <div className="px-4">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item) => (
                <Card key={item.title} item={item} mobile />
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => goToSlide(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Slide trước"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-surface disabled:cursor-not-allowed disabled:opacity-30"
            >
              <PrevIcon />
            </button>

            <span className="min-w-[50px] text-center text-[13px] font-bold text-accent">
              {currentIndex + 1} / {items.length}
            </span>

            <button
              type="button"
              onClick={() => goToSlide(currentIndex + 1)}
              disabled={currentIndex === items.length - 1}
              aria-label="Slide tiếp theo"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-surface disabled:cursor-not-allowed disabled:opacity-30"
            >
              <NextIcon />
            </button>
          </div>
        </div>

        {/* Tablet + Desktop */}
        <div className="hidden grid-cols-2 gap-5 px-5 md:grid md:px-0 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import SectionHeading from "./section-heading";
import { MdKeyboardArrowRight } from "react-icons/md";

const courses = [
  {
    number: "01",
    type: "GIAO TIẾP",
    title: "Tiếng Anh Giao Tiếp",
    desc: "Nền tảng và chuyên sâu.",
    cta: "Tư vấn lộ trình",
    href: "#dang-ky",
    badgeClass: "bg-primary",
    linkClass: "text-primary",
  },
  {
    number: "02",
    type: "TOEIC",
    title: "TOEIC Foundation",
    desc: "Xây dựng nền tảng vững chắc.",
    cta: "Tư vấn khóa học",
    href: "#dang-ky",
    badgeClass: "bg-accent",
    linkClass: "text-accent",
  },
  {
    number: "03",
    type: "TOEIC",
    title: "TOEIC Luyện Đề",
    desc: "Reading & Listening (Aim 600+)",
    cta: "Tư vấn khóa học",
    href: "#dang-ky",
    badgeClass: "bg-accent",
    linkClass: "text-accent",
  },
  {
    number: "04",
    type: "IELTS",
    title: "IELTS Foundation",
    desc: "Aim 4.5",
    cta: "Tư vấn khóa học",
    href: "#dang-ky",
    badgeClass: "bg-primary",
    linkClass: "text-primary",
  },
  {
    number: "05",
    type: "IELTS",
    title: "Pre - IELTS",
    desc: "Aim 5.0 ~ 5.5",
    cta: "Tư vấn khóa học",
    href: "#dang-ky",
    badgeClass: "bg-primary",
    linkClass: "text-primary",
  },
  {
    number: "06",
    type: "IELTS",
    title: "IELTS Intermediate",
    desc: "Aim 6.0 ~ 6.5",
    cta: "Tư vấn khóa học",
    href: "#dang-ky",
    badgeClass: "bg-primary",
    linkClass: "text-primary",
  },
  {
    number: "07",
    type: "VSTEP / TOEFL...",
    title: "Các Chứng Chỉ Tiếng Anh Khác",
    desc: "Chương trình đào tạo VSTEP, TOEFL và các chứng chỉ theo nhu cầu.",
    cta: "Tư vấn khóa học",
    href: "#dang-ky",
    badgeClass: "bg-primary",
    linkClass: "text-primary",
  },
];

function CourseCard({ item }) {
  return (
    <article className="group bg-white flex flex-col overflow-hidden rounded-[24px] border border-primary/10 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl" id="">
      <div className="relative h-[200px] shrink-0 overflow-hidden md:h-[260px]">
        <img
          src="/assets/dangcapnhan.png"
          alt="Tư vấn lộ trình học tại Tân Sanh Ngữ"
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
        {/* 
        <span className="absolute left-4 top-4 md:left-5 md:top-5 rounded-full bg-surface/95 px-3 py-2 text-[10px] font-extrabold tracking-[0.1em] text-primary">
          {item.number} / 06
        </span> */}

        <span
          className={`absolute bottom-4 left-4 md:bottom-5 md:left-5 rounded-full px-3 py-2 text-[10px] font-extrabold tracking-[0.1em] text-surface ${item.badgeClass}`}
        >
          {item.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6 lg:p-8">
        <h3 className="text-[20px] font-extrabold leading-[1.2] text-primary md:text-[23px] lg:text-[23px]">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-[1.7] text-text-muted">
          {item.desc}
        </p>

        <div className="my-4 h-px w-full bg-primary/10" />

        {item.list && item.list.length > 0 && (
          <ul className="mb-6 flex flex-1 flex-wrap gap-2 content-start">
            {item.list.map((course) => (
              <li
                key={course}
                className={`rounded-full px-3 py-2 text-[12px] font-bold ${item.chipClass}`}
              >
                {course}
              </li>
            ))}
          </ul>
        )}

        <a
          href={item.href}
          className={`group/link mt-auto inline-flex w-fit items-center gap-2 text-[13px] font-extrabold text-[#f26922]`}
        >
          {item.cta}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            <MdKeyboardArrowRight size={18} />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function CoursesSection() {
  const categories = ["TOEIC", "IELTS", "GIAO TIẾP", "CHỨNG CHỈ KHÁC"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCourses = courses.filter((course) => {
    if (activeCategory === "CHỨNG CHỈ KHÁC") {
      return !["TOEIC", "IELTS", "GIAO TIẾP"].includes(course.type);
    }
    return course.type === activeCategory;
  });

  return (
    <section id="courses" className="overflow-hidden bg-surface-muted py-8 lg:py-16 px-4 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="CHƯƠNG TRÌNH ĐÀO TẠO"
          title="Các Khóa Học Tại"
          highlight="Tân Sanh Ngữ"
          desc="Các khóa học chất lượng đáp ứng các nhu cầu thiết yếu trong phát triển bản thân trên con đường học tập và làm việc. Mọi khóa học đều được miễn phí buổi học thử đầu tiên (1 khóa = 8 buổi)."
          className="mb-2 text-center"
        />

        <div className="mb-5 flex w-full overflow-x-auto snap-x snap-mandatory justify-start md:justify-center gap-3 md:gap-4 pb-2 md:pb-0 px-2 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 snap-center rounded-full px-5 py-2.5 md:px-8 md:py-3 text-[14px] md:text-[16px] font-bold transition-all duration-300 ${activeCategory === category
                ? "bg-[#18395e] text-white shadow-lg md:scale-105"
                : "bg-white text-[#18395e] border border-[#18395e]/20 hover:bg-[#18395e]/5 md:hover:scale-105"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((item) => (
            <CourseCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import SectionHeading from "./section-heading";
import { MdKeyboardArrowRight } from "react-icons/md";

const courses = [
  // GIAO TIẾP
  {
    number: "01",
    type: "GIAO TIẾP",
    title: "Tiếng Anh Giao Tiếp Phản Xạ",
    desc: "Củng cố phát âm chuẩn, rèn phản xạ hội thoại tự nhiên trong đời sống hàng ngày và môi trường học tập, làm việc.",
    cta: "Tư vấn lộ trình Online",
    href: "#tu-van",
    badgeClass: "bg-primary text-surface",
    linkClass: "text-primary",
  },
  {
    number: "02",
    type: "GIAO TIẾP",
    title: "Tiếng Anh Giao Tiếp Công Sở",
    desc: "Nâng cao vốn từ vựng thực tế, kỹ năng thuyết trình, trao đổi email và tự tin phỏng vấn tuyển dụng.",
    cta: "Tư vấn lộ trình Online",
    href: "#tu-van",
    badgeClass: "bg-primary text-surface",
    linkClass: "text-primary",
  },

  // TOEIC
  {
    number: "03",
    type: "TOEIC",
    title: "TOEIC Foundation",
    desc: "Lấy lại căn bản ngữ pháp, xây dựng vốn từ vựng học thuật và làm quen các dạng bài nghe - đọc trọng tâm.",
    cta: "Tư vấn khóa TOEIC",
    href: "#tu-van",
    badgeClass: "bg-secondary text-primary font-bold",
    linkClass: "text-primary",
  },
  {
    number: "04",
    type: "TOEIC",
    title: "TOEIC Luyện Đề Chuẩn Đầu Ra",
    desc: "Rèn chiến thuật làm bài thi Listening & Reading, khắc phục bẫy đề thi, bứt phá điểm số xét tốt nghiệp và đi làm.",
    cta: "Tư vấn khóa TOEIC",
    href: "#tu-van",
    badgeClass: "bg-secondary text-primary font-bold",
    linkClass: "text-primary",
  },

  // IELTS
  {
    number: "05",
    type: "IELTS",
    title: "IELTS Foundation",
    desc: "Xây nền ngữ pháp vững chắc, chuẩn hóa phát âm và làm quen tư duy học thuật cho người mới bắt đầu.",
    cta: "Tư vấn khóa IELTS",
    href: "#tu-van",
    badgeClass: "bg-primary text-surface",
    linkClass: "text-primary",
  },
  {
    number: "06",
    type: "IELTS",
    title: "Pre - IELTS",
    desc: "Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết, tiếp cận cấu trúc đề thi và chiến thuật xử lý câu hỏi.",
    cta: "Tư vấn khóa IELTS",
    href: "#tu-van",
    badgeClass: "bg-primary text-surface",
    linkClass: "text-primary",
  },
  {
    number: "07",
    type: "IELTS",
    title: "IELTS INTERMEDIATE",
    desc: "Luyện đề chuyên sâu, được giảng viên sửa bài chi tiết từng kỹ năng, tối ưu điểm số xét tuyển ĐH và du học.",
    cta: "Tư vấn khóa IELTS",
    href: "#tu-van",
    badgeClass: "bg-primary text-surface",
    linkClass: "text-primary",
  },
];

function CourseCard({ item }) {
  return (
    <article className="group bg-white flex flex-col overflow-hidden rounded-[24px] border border-primary/10 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[200px] shrink-0 overflow-hidden md:h-[260px]">
        <img
          src="/assets/dangcapnhan.png"
          alt="Tư vấn lộ trình học Online tại Tân Sanh Ngữ"
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

        <span
          className={`absolute bottom-4 left-4 md:bottom-5 md:left-5 rounded-full px-3 py-2 text-[10px] font-extrabold tracking-[0.1em] ${item.badgeClass}`}
        >
          {item.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6 lg:p-8">
        <h3 className="text-[20px] font-bold leading-[1.2] text-primary md:text-[23px] lg:text-[23px]">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-[1.7] text-text-muted">
          {item.desc}
        </p>

        <div className="my-4 h-px w-full bg-primary/10" />

        <a
          href={item.href}
          className="group/link mt-auto inline-flex w-fit items-center gap-2 text-[13px] font-bold text-primary transition-colors hover:text-accent-dark"
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
  const categories = ["IELTS", "TOEIC", "GIAO TIẾP"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCourses = courses.filter((course) => course.type === activeCategory);

  return (
    <section id="courses" className="overflow-hidden bg-surface-muted py-10 lg:py-16 px-4 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="CHƯƠNG TRÌNH ĐÀO TẠO ONLINE"
          title="Các Khóa Học Online Tại"
          highlight="Tân Sanh Ngữ"
          desc="Hệ thống chương trình ngoại ngữ Online tương tác cao, bám sát nhu cầu học tập, xét tốt nghiệp và thăng tiến sự nghiệp."
          className="mb-2 text-center"
        />

        <div className="mb-5 flex w-full overflow-x-auto snap-x snap-mandatory justify-start md:justify-center gap-3 md:gap-4 pb-2 md:pb-0 px-2 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 snap-center rounded-full px-5 py-2.5 md:px-8 md:py-3 text-[14px] md:text-[16px] font-bold transition-all duration-300 ${activeCategory === category
                ? "bg-primary text-surface shadow-lg md:scale-105"
                : "bg-surface text-primary border border-primary/20 hover:bg-primary/5 md:hover:scale-105"
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
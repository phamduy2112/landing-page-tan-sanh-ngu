
import { useState } from "react";
import SectionHeading from "./section-heading";
import {
  MdCheck,
  MdCalendarMonth,
  MdOutlinePerson,
  MdTrackChanges,
  MdArrowForward,
} from "react-icons/md";

const courses = [
  // IELTS
  {
    number: "01",
    type: "IELTS",
    title: "IELTS Foundation (nền tảng)",
    desc: "Hệ thống ngữ pháp, từ vựng tiếng Anh từ đầu, làm quen bài thi IELTS và từng bước rèn luyện cả 4 kỹ năng với mục tiêu 4.5+.",
    goals: [
      "Làm quen cấu trúc bài thi IELTS",
      "Củng cố ngữ pháp và từ vựng nền tảng",
      "Phát triển 4 kỹ năng Listening - Reading - Writing - Speaking",
      "Xây dựng tư duy sử dụng tiếng Anh",
      "Chuẩn bị kiến thức cho lớp IELTS INTERMEDIATE (trung cấp)",
    ],
    duration: "Thời lượng: Bổ sung sau",
    format: "Hình thức: 1-1 hoặc nhóm 4-6 học viên",
    audience: "Đối tượng: Người mới bắt đầu học IELTS",
    outcome: "Mục tiêu: IELTS Overall 4.5+",
    cta: "Tư vấn khóa IELTS",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },
  {
    number: "02",
    type: "IELTS",
    title: "IELTS Intermediate (trung cấp)",
    desc: "Tiếp nối chương trình nền tảng, tăng cường thực hành, rèn luyện và phát triển kỹ năng làm bài IELTS với mục tiêu 5.5+.",
    goals: [
      "Mở rộng từ vựng và ngữ pháp học thuật",
      "Nâng cao năng lực Listening - Reading",
      "Phát triển kỹ năng Writing - Speaking",
      "Luyện tập các dạng bài IELTS phổ biến",
      "Cải thiện khả năng vận dụng tiếng Anh",
    ],
    duration: "Thời lượng: Bổ sung sau",
    format: "Hình thức: 1-1 hoặc nhóm 4-6 học viên",
    audience: "Đối tượng: Học viên đã hoàn thành IELTS Foundation (4.5+) hoặc kiểm tra năng lực đầu vào",
    outcome: "Mục tiêu: IELTS Overall 5.5+",
    cta: "Tư vấn khóa IELTS",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },
  {
    number: "03",
    type: "IELTS",
    title: "IELTS Advanced",
    desc: "Luyện đề chuyên sâu, hoàn thiện chiến thuật làm bài và nâng cao toàn diện 4 kỹ năng, hướng đến mục tiêu IELTS 6.5+.",
    goals: [
      "Thành thạo các dạng bài IELTS",
      "Luyện đề theo cấu trúc bài thi thực tế",
      "Nâng cao kỹ năng Writing và Speaking",
      "Cải thiện tốc độ và độ chính xác",
      "Phát triển khả năng tự học hiệu quả",
    ],
    duration: "Đang cập nhật",
    audience: "Học viên đạt IELTS 5.5+ hoặc vượt qua bài kiểm tra đầu vào",
    outcome: "IELTS Overall 6.5+",
    cta: "Tư vấn khóa IELTS",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },

  // TOEIC
  {
    number: "04",
    type: "TOEIC",
    title: "TOEIC Foundation",
    desc: "Hệ thống toàn bộ kiến thức ngữ pháp, từ vựng và phát triển tư duy Listening - Reading, bám sát cấu trúc đề thi TOEIC mới nhất.",
    goals: [
      "Nắm vững cấu trúc đề thi TOEIC",
      "Củng cố nền tảng ngữ pháp và từ vựng",
      "Làm quen các dạng bài Listening - Reading trong đề thi",
      "Rèn luyện kỹ năng làm bài cơ bản",
      "Xây dựng nền tảng để học TOEIC hiệu quả",
    ],
    duration: "Thời lượng: Đang cập nhật",
    audience: "Đối tượng: Người mới bắt đầu học TOEIC",
    outcome: "Hình thức: 1-1 hoặc nhóm 4-6 học viên",
    cta: "Tư vấn khóa TOEIC",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },
  {
    number: "05",
    type: "TOEIC",
    title: "TOEIC Advanced",
    desc: "Tập trung luyện đề Listening - Reading, nâng cao kỹ năng xử lý câu hỏi và tối ưu điểm số TOEIC 650+.",
    goals: [
      "Nắm vững chiến thuật làm bài TOEIC",
      "Luyện tập và rèn luyện các dạng bài Listening - Reading",
      "Nâng cao tốc độ và độ chính xác khi làm bài",
      "Phân tích lỗi sai và cải thiện điểm yếu",
      "Rèn luyện kỹ năng quản lý thời gian",
    ],
    duration: "Thời lượng: Đang cập nhật",
    audience: "Đối tượng: Học viên có nền tảng TOEIC 400+ và thực hiện bài kiểm tra đầu vào",
    outcome: "Hình thức: 1-1 hoặc nhóm 4-6 học viên",
    cta: "Tư vấn khóa TOEIC",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },

  // GIAO TIẾP
  {
    number: "06",
    type: "GIAO TIẾP",
    title: "Giao tiếp tiếng Anh (Cuộc sống hằng ngày)",
    desc: "Luyện nói tiếng Anh qua các chủ đề gần gũi, thân thuộc trong cuộc sống thường nhật. Giúp duy trì phản xạ và sử dụng tiếng Anh một cách tự nhiên.",
    goals: [
      "Ôn tập, hệ thống các kiến thức ngữ pháp và từ vựng quan trọng",
      "Mở rộng vốn từ vựng thông dụng",
      "Thực hành giao tiếp trong các tình huống",
      "Phát triển phản xạ nghe - nói tự nhiên",
      "Duy trì và cải thiện sự tự tin khi giao tiếp bằng tiếng Anh",
    ],
    duration: "Hình thức: 1-1 hoặc nhóm 4-6 học viên",
    audience: "Đối tượng: Người muốn duy trì và phát triển tiếng Anh giao tiếp",
    outcome: "Đầu vào: Kiểm tra khả năng sử dụng ngoại ngữ",
    cta: "Tư vấn khóa giao tiếp",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },
  {
    number: "07",
    type: "GIAO TIẾP",
    title: "Giao tiếp tiếng Anh (Chuyên nghiệp nơi công sở)",
    desc: "Phát triển khả năng sử dụng tiếng Anh tự tin, hiệu quả trong các tình huống giao tiếp và làm việc thực tế trong môi trường công sở.",
    goals: [
      "Mở rộng từ vựng và mẫu câu công việc",
      "Rèn luyện kỹ năng đàm phán, thuyết trình qua các chủ đề",
      "Thực hành viết email chuyên nghiệp bằng tiếng Anh",
      "Thực hành trình bày và trao đổi thông tin trong cuộc họp giả lập",
      "Rèn luyện kỹ năng quản lý thời gian",
    ],
    duration: "Hình thức: 1-1 hoặc nhóm 4-6 học viên",
    audience: "Đối tượng: Người đi làm có nền tảng tiếng Anh khá",
    outcome: "Đầu vào: Kiểm tra khả năng sử dụng ngoại ngữ",
    cta: "Tư vấn khóa giao tiếp",
    image: "/assets/dangcapnhan.png",
    href: "#tu-van",
  },
];

function CourseCard({ item }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      {/* HÌNH ẢNH */}
      <div className="relative h-[145px] shrink-0 overflow-hidden bg-primary/5 md:h-[155px]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

        <span className="absolute bottom-3 left-4 rounded-full bg-primary px-3 py-1 text-[11px] font-extrabold tracking-wide text-white shadow-md">
          {item.type}
        </span>
      </div>

      {/* NỘI DUNG CARD */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {/* TÊN KHÓA HỌC */}
        <div>
          <h3 className="text-[19px] font-bold leading-[1.3] text-primary md:text-[21px]">
            {item.title}
          </h3>

          <p className="mt-2 text-[14px] leading-[1.6] text-text-muted">
            {item.desc}
          </p>
        </div>

        {/* ĐƯỜNG PHÂN CÁCH */}
        <div className="my-4 h-px bg-primary/10" />

        {/* MỤC TIÊU */}
        <div>
          <h4 className="text-[14px] font-bold uppercase tracking-wide text-[#344054]">
            Mục tiêu khóa học
          </h4>

          <ul className="mt-3 space-y-2">
            {item.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MdCheck className="text-[15px] text-primary" />
                </span>

                <span className="text-[14px] leading-[1.5] text-[#475467]">
                  {goal}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* THÔNG TIN HỌC TẬP */}
        <div className="mt-5">
          <h4 className="text-[14px] font-bold uppercase tracking-wide text-[#344054]">
            Thông tin học tập
          </h4>

          <div className="mt-3 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <MdCalendarMonth className="mt-0.5 shrink-0 text-[21px] text-primary" />
              <p className="text-[14px] leading-[1.5] text-[#475467]">
                {item.duration}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <MdOutlinePerson className="mt-0.5 shrink-0 text-[21px] text-primary" />
              <p className="text-[14px] leading-[1.5] text-[#475467]">
                {item.audience}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <MdTrackChanges className="mt-0.5 shrink-0 text-[21px] text-primary" />
              <p className="text-[14px] leading-[1.5] text-[#475467]">
                {item.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-5">
          <a
            href={item.href}
            className="group/btn flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-center text-[14px] font-bold text-white shadow-sm transition-all duration-300 hover:brightness-110 hover:shadow-lg"
          >
            {item.cta}

            <MdArrowForward className="text-[19px] transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CoursesSection() {
  const categories = ["IELTS", "TOEIC", "GIAO TIẾP"];

  const [activeCategory, setActiveCategory] = useState("IELTS");

  const filteredCourses = courses.filter(
    (course) => course.type === activeCategory
  );

  return (
    <section
      id="courses"
      className="overflow-hidden bg-surface-muted px-4 py-10 md:px-6 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* TIÊU ĐỀ SECTION */}
        <SectionHeading
          eyebrow="CHƯƠNG TRÌNH ĐÀO TẠO ONLINE"
          title="Các Khóa Học Tại"
          highlight="Tân Sanh Ngữ"
          className="mb-4 text-center"
        />

        {/* TAB DANH MỤC */}
        <div className="mb-6 flex w-full snap-x snap-mandatory justify-start gap-2.5 overflow-x-auto px-1 pb-2 md:justify-center md:gap-4 md:px-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 snap-center rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-300 md:px-9 md:py-3 md:text-[15px] ${activeCategory === category
                ? "bg-primary text-white shadow-lg md:scale-105"
                : "border border-primary/20 bg-white text-primary hover:bg-primary/5"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* DANH SÁCH CARD */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((item) => (
            <CourseCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
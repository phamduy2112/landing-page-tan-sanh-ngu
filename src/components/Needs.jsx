import SectionHeading from "./section-heading";
import { MdKeyboardArrowRight } from "react-icons/md";

const courses = [
  {
    number: "01",
    type: "HỌC OFFLINE",
    title: "Tiếng Anh trẻ em",
    desc: "Chương trình dành cho trẻ từ tiền tiểu học đến Cambridge Kids, học trực tiếp trong môi trường có giáo viên đồng hành và theo sát.",
    image: "/course-kids.jpg",
    imageAlt: "Lớp học tiếng Anh trẻ em tại Tân Sanh Ngữ",
    list: ["PreStarter & Starters", "Movers & Flyers", "Lộ trình Cambridge Kids"],
    cta: "Tư vấn lớp cho bé",
    href: "#dang-ky",
    badgeClass: "bg-primary",
    chipClass: "bg-highlight text-primary",
    linkClass: "text-primary",
  },
  {
    number: "02",
    type: "HỌC ONLINE",
    title: "Ngoại ngữ cho người lớn",
    desc: "Các khóa học linh hoạt dành cho học sinh THPT, sinh viên và người đi làm đang cần cải thiện năng lực ngoại ngữ theo mục tiêu.",
    image: "/course-online.jpg",
    imageAlt: "Học viên tham gia khóa học ngoại ngữ online",
    list: ["IELTS & TOEIC", "Tiếng Anh giao tiếp", "Tiếng Nhật"],
    cta: "Tư vấn khóa học Online",
    href: "#dang-ky",
    badgeClass: "bg-accent",
    chipClass: "bg-surface-muted text-accent",
    linkClass: "text-accent",
  },
];

function CourseCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-primary/10  shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[260px] overflow-hidden md:h-[300px]">
        {/* <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        /> */}
   <img
            src="/assets/dangcapnhan.png"
            alt="Tư vấn lộ trình học tại Tân Sanh Ngữ"
            className=" h-full w-full object-contain "
          />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-surface/95 px-3 py-2 text-[10px] font-extrabold tracking-[0.1em] text-primary">
          {item.number} / 02
        </span>

        <span
          className={`absolute bottom-5 left-5 rounded-full px-3 py-2 text-[10px] font-extrabold tracking-[0.1em] text-surface ${item.badgeClass}`}
        >
          {item.type}
        </span>
      </div>

      <div className="flex h-[260px] flex-col p-6 md:p-8">
        <h3 className="text-[23px] font-extrabold leading-[1.2] text-primary md:text-[25px]">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-[1.7] text-text-muted">
          {item.desc}
        </p>

        <div className="my-3 h-px bg-primary/10" />

        <ul className="flex flex-wrap gap-2">
          {item.list.map((course) => (
            <li
              key={course}
              className={`rounded-full px-3 py-2 text-[12px] font-bold ${item.chipClass}`}
            >
              {course}
            </li>
          ))}
        </ul>

        <a
          href={item.href}
          className={`group/link
            hidden lg:inline-flex
            mt-6  w-fit items-center gap-2  text-[13px] font-extrabold ${item.linkClass}`}
        >
          {item.cta}

          <span
            className={` `}
          >
            <MdKeyboardArrowRight  />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function CoursesSection() {
  return (
    <section id="programs" className="overflow-hidden bg-white py-4 lg:py-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="CHƯƠNG TRÌNH ĐÀO TẠO"
          title="Chọn khóa học phù hợp"
          highlight="với mục tiêu của bạn"
          desc="Tân Sanh Ngữ xây dựng chương trình theo độ tuổi, trình độ hiện tại và hình thức học phù hợp với từng người học."
          className="text-center"
        />

        <div className="grid gap-6 md:grid-cols-2 ]">
          {courses.map((item) => (
            <CourseCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
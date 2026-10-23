
import SectionHeading from "./section-heading";

const teachers = [
  {
    name: "Thầy Duy",
    experience: "Thông tin kinh nghiệm giảng dạy sẽ được cập nhật.",
    img: "/assets/Duy Profile0011.jpg",
  },
  {
    name: "Cô Thư",
    experience: "Thông tin kinh nghiệm giảng dạy sẽ được cập nhật.",
    img: "/assets/IMG_3440.JPG",
  },
];

function TeacherCard({ teacher }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-primary/10 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="h-[240px] overflow-hidden bg-surface-muted sm:h-[500px]">
        <img
          src={teacher.img}
          alt={teacher.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Information */}
      <div className="p-5">
        <h3 className="mb-2 text-[20px] font-bold text-primary">
          {teacher.name}
        </h3>

        <div className="mb-3 h-[2px] w-9 rounded-full bg-accent" />

        <p className="text-[13px] leading-[1.7] text-text-muted">
          {teacher.experience}
        </p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section
      id="teachers"
      className="w-full scroll-mt-24 bg-surface-muted py-10 lg:py-14"
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading
          eyebrow="ĐỘI NGŨ GIÁO VIÊN"
          title="Đồng hành cùng học viên là"
          highlight="đội ngũ giáo viên tận tâm"
          desc="Giáo viên tại Tân Sanh Ngữ đồng hành cùng người học trong quá trình xây dựng nền tảng, luyện tập và phát triển năng lực ngoại ngữ."
          className="mx-auto mb-7 max-w-[760px] text-center [&>p]:mx-auto"
        />

        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-5 sm:grid-cols-2">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}

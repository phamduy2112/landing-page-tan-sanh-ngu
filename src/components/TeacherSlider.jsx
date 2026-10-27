import { HiOutlineAcademicCap, HiOutlineCheckBadge } from "react-icons/hi2";
import SectionHeading from "./section-heading";

const teachers = [
  {
    name: "Mr. Duy",
    img: "/assets/Duy Profile0011.jpg",
    qualifications: [
      "Thạc sĩ tại Trường ĐH Bách Khoa – ĐHQG TP.HCM",
      "Kỹ sư Cơ Điện tử tại Trường ĐH Bách Khoa – ĐHQG TP.HCM",
    ],
  },
  {
    name: "Ms. Taylor",
    img: "/assets/IMG_3440.JPG",
    qualifications: [
      "Thạc sĩ tại Curtin University",
      "Cử nhân Ngôn ngữ Anh tại Trường ĐH Ngoại ngữ - Tin học (HUFLIT)",
      "Chứng chỉ Nghiệp vụ Sư phạm Giảng dạy Đại học và Cao đẳng",
      "IELTS 7.5",
    ],
  },
];

function TeacherCard({ teacher }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Teacher Image */}
      <div className=" overflow-hidden bg-surface-muted sm:h-[550px]">
        <img
          src={teacher.img}
          alt={teacher.name}
          loading="lazy"
          className="h-full w-full object-fill transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Teacher Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Name */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
            <HiOutlineAcademicCap className="h-6 w-6" />
          </div>

          <div>
            <h3 className="text-[20px] font-bold text-primary">
              {teacher.name}
            </h3>

            <p className="text-[12px] font-medium text-text-muted">
              Đội ngũ giảng viên
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-4 h-[2px] w-10 rounded-full bg-accent" />

        {/* Qualifications */}
        <div className="space-y-3">
          {teacher.qualifications.map((qualification, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5"
            >
              <HiOutlineCheckBadge
                className="mt-[3px] h-[17px] w-[17px] shrink-0 text-primary"
              />

              <p className="text-[13px] leading-[1.7] text-text-muted">
                {qualification}
              </p>
            </div>
          ))}
        </div>

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

        {/* Teacher Grid */}
        <div className="mx-auto grid max-w-[820px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.name}
              teacher={teacher}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
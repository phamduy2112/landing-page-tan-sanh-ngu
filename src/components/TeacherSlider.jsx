import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import SectionHeading from "./section-heading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const teachers = [
  {
    name: "Giáo viên Tân Sanh Ngữ",
    role: "GIÁO VIÊN TIẾNG ANH",
    desc: [
      "Thông tin bằng cấp sẽ được cập nhật.",
      "Thông tin kinh nghiệm giảng dạy sẽ được cập nhật.",
    ],
    img: "/assets/dangcapnhan.png",
  },
  {
    name: "Giáo viên Tân Sanh Ngữ",
    role: "GIÁO VIÊN TIẾNG ANH",
    desc: [
      "Thông tin bằng cấp sẽ được cập nhật.",
      "Thông tin kinh nghiệm giảng dạy sẽ được cập nhật.",
    ],
    img: "/assets/dangcapnhan.png",
  },
  {
    name: "Giáo viên Tân Sanh Ngữ",
    role: "GIÁO VIÊN NGOẠI NGỮ",
    desc: [
      "Thông tin bằng cấp sẽ được cập nhật.",
      "Thông tin kinh nghiệm giảng dạy sẽ được cập nhật.",
    ],
    img: "/assets/dangcapnhan.png",
  },
  {
    name: "Giáo viên Tân Sanh Ngữ",
    role: "GIÁO VIÊN NGOẠI NGỮ",
    desc: [
      "Thông tin bằng cấp sẽ được cập nhật.",
      "Thông tin kinh nghiệm giảng dạy sẽ được cập nhật.",
    ],
    img: "/assets/dangcapnhan.png",
  },
];

function TeacherCard({ teacher }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-primary/10 bg-surface shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[260px] shrink-0 overflow-hidden bg-surface-muted sm:h-[280px] lg:h-[300px]">
        <img
          src={teacher.img}
          alt={teacher.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/5 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[10px] font-bold tracking-[0.06em] text-surface">
            <HiOutlineAcademicCap className="shrink-0 text-[14px]" />
            <span className="truncate">{teacher.role}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="break-words text-[19px] font-bold leading-[1.35] text-primary">
          {teacher.name}
        </h3>

        <div className="my-3 h-[3px] w-8 rounded-full bg-highlight" />

        <ul className="space-y-2.5">
          {teacher.desc.map((item, index) => (
            <li
              key={index}
              className="flex min-w-0 items-start gap-2.5 text-[13px] leading-[1.6] text-text-muted"
            >
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
              <span className="min-w-0 break-words">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section
      id="teachers"
      className="w-full scroll-mt-24 overflow-hidden bg-surface-muted py-4 lg:py-12"
    >
      <div className="container mx-auto min-w-0 overflow-hidden px-5 md:px-6">
        <div className="mb-2 flex flex-col gap-5 md:mb-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="ĐỘI NGŨ GIÁO VIÊN"
            title="Đồng hành cùng học viên là"
            highlight="đội ngũ giáo viên tận tâm"
            desc="Giáo viên tại Tân Sanh Ngữ đồng hành cùng người học trong quá trình xây dựng nền tảng, luyện tập và phát triển năng lực ngoại ngữ."
            className="mb-0 max-w-[760px] mx-auto px-0 text-center [&>p]:mx-auto md:[&>p]:mx-0"
          />

          <div className=" shrink-0 justify-center gap-3 hidden md:flex">
            <button
              type="button"
              aria-label="Giáo viên trước"
              className="teacher-prev flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:border-primary hover:bg-primary hover:text-surface"
            >
              <GrFormPrevious className="text-[24px]" />
            </button>

            <button
              type="button"
              aria-label="Giáo viên tiếp theo"
              className="teacher-next flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent transition hover:border-accent hover:bg-accent hover:text-surface"
            >
              <MdOutlineNavigateNext className="text-[24px]" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".teacher-prev",
            nextEl: ".teacher-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 22 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="!w-full !overflow-hidden !pb-12 [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-pagination-bullet]:!h-[7px] [&_.swiper-pagination-bullet]:!w-[7px] [&_.swiper-pagination-bullet]:!bg-primary [&_.swiper-pagination-bullet]:!opacity-25 [&_.swiper-pagination-bullet-active]:!w-[22px] [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-accent [&_.swiper-pagination-bullet-active]:!opacity-100"
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide
              key={`${teacher.name}-${index}`}
              className="!h-auto"
            >
              <TeacherCard teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
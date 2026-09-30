"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "./section-heading";

const feedbacks = [
  {
    name: "Phụ huynh học viên",
    role: "Lớp Tiếng Anh trẻ em",
    content:
      "Con có thêm hứng thú với tiếng Anh thông qua các hoạt động trong lớp. Gia đình cũng yên tâm hơn khi nhận được sự trao đổi và đồng hành trong quá trình học.",
    avatar: "/feedback-1.jpg",
  },
  {
    name: "Phụ huynh học viên",
    role: "Lộ trình Cambridge Kids",
    content:
      "Điều gia đình quan tâm là con được học đúng trình độ và có môi trường tương tác. Trung tâm đã hỗ trợ tư vấn lộ trình phù hợp trước khi bắt đầu.",
    avatar: "/feedback-2.jpg",
  },
  {
    name: "Học viên Tân Sanh Ngữ",
    role: "Khóa học Online",
    content:
      "Hình thức học online giúp mình chủ động hơn về thời gian. Giáo viên hướng dẫn rõ ràng và mình có thêm động lực để duy trì việc học đều đặn.",
    avatar: "/feedback-3.jpg",
  },
  {
    name: "Học viên Tân Sanh Ngữ",
    role: "Khóa học giao tiếp",
    content:
      "Mình được tư vấn theo mục tiêu cá nhân trước khi chọn lớp. Điều này giúp việc học rõ ràng hơn và dễ theo dõi tiến độ của bản thân.",
    avatar: "/feedback-4.jpg",
  },
];

export default function FAQ() {
  return (
    <section
      id="feedback"
      className="w-full overflow-hidden bg-white py-4 md:py-12"
    >
      <div className="container mx-auto w-[calc(100%-2rem)] max-w-[1200px] md:w-[calc(100%-5rem)]">
        <div className="mb-8 flex items-end justify-between gap-5 max-md:block">
          <SectionHeading
            eyebrow="CHIA SẺ TỪ HỌC VIÊN & PHỤ HUYNH"
            title="Cảm nhận trên hành trình học tại"
            highlight="Tân Sanh Ngữ"
            desc="Những chia sẻ từ phụ huynh và học viên sau quá trình trải nghiệm các chương trình học tại trung tâm."
            className="mb-0 px-0 text-left [&>p]:mx-0"
          />

          <div className="mt-5 flex shrink-0 gap-3 md:mt-0">
            <button
              type="button"
              aria-label="Feedback trước"
              className="feedback-prev grid h-11 w-11 place-items-center rounded-full border border-[#37076D]/20 bg-white text-xl text-[#37076D] shadow-[0_8px_25px_rgba(55,7,109,0.1)] transition hover:bg-[#37076D] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Feedback tiếp theo"
              className="feedback-next grid h-11 w-11 place-items-center rounded-full border border-[#74070E]/30 bg-white text-xl text-[#74070E] shadow-[0_8px_25px_rgba(55,7,109,0.1)] transition hover:bg-[#74070E] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".feedback-prev",
            nextEl: ".feedback-next",
          }}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".feedback-prev";
            swiper.params.navigation.nextEl = ".feedback-next";
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!overflow-hidden !pb-12 [&_.swiper-slide]:!h-auto [&_.swiper-pagination-bullet]:!h-[7px] [&_.swiper-pagination-bullet]:!w-[7px] [&_.swiper-pagination-bullet]:!bg-[#37076D] [&_.swiper-pagination-bullet]:!opacity-20 [&_.swiper-pagination-bullet-active]:!w-[24px] [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-[#74070E] [&_.swiper-pagination-bullet-active]:!opacity-100"
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <article className="flex h-full min-h-[255px] flex-col rounded-[20px] border border-[#37076D]/10 bg-white p-5 shadow-[0_8px_30px_rgba(55,7,109,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(55,7,109,0.1)] md:p-6">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#FEE997] text-[26px] font-bold leading-none text-[#74070E]">
                  “
                </div>

                <p className="flex-1 text-[14px] leading-[1.75] text-[#5F5365]">
                  {item.content}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-[#37076D]/10 pt-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-[14px] font-bold text-[#37076D]">
                      {item.name}
                    </h3>

                    <p className="mt-0.5 text-[12px] text-[#786B7D]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
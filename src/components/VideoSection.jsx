"use client";

import ButtonCTA from "./button-cta";
import SectionHeading from "./section-heading";

export default function VideoSection() {
  return (
    <section
      id="video"
      className="w-full overflow-hidden F] py-4 md:py-12"
    >
      <div className="container mx-auto w-[calc(100%-2rem)] max-w-[1200px] md:w-[calc(100%-5rem)]">
        <SectionHeading
          eyebrow="KHÔNG GIAN HỌC TẬP"
          title="Khám phá lớp học tại"
          highlight="Tân Sanh Ngữ"
          desc="Cùng nhìn lại những khoảnh khắc học tập, hoạt động tương tác và trải nghiệm ngoại ngữ của học viên tại Tân Sanh Ngữ."
            className="mb-0 max-w-[760px] mx-auto px-0 text-left md:text-center [&>p]:mx-auto md:[&>p]:mx-0"
        />

        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[24px] border border-[#37076D]/10 bg-[#37076D] shadow-[0_18px_50px_rgba(55,7,109,0.14)]">
          <div className="aspect-video w-full">
            <video
              controls
              preload="metadata"
              poster="/tan-sanh-ngu-video-cover.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/tan-sanh-ngu-video.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <ButtonCTA text="Xem Thêm" />
        </div>
      </div>
    </section>
  );
}
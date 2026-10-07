"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";

const faqs = [
  {
    question: "Tân Sanh Ngữ có những chương trình học nào?",
    answer:
      "Tân Sanh Ngữ hiện có các chương trình tiếng Anh cho trẻ em gồm PreStarter, Starters, Movers và Flyers; cùng các khóa học Online như IELTS, TOEIC, giao tiếp và tiếng Nhật.",
  },
  {
    question: "Trẻ em học theo hình thức nào?",
    answer:
      "Các lớp tiếng Anh dành cho trẻ nhỏ được tổ chức theo hình thức Offline, giúp giáo viên dễ quan sát, tương tác và đồng hành cùng con trong quá trình học.",
  },
  {
    question:
      "Học sinh, sinh viên và người đi làm có thể học Online không?",
    answer:
      "Có. Các chương trình IELTS, TOEIC, giao tiếp và tiếng Nhật được triển khai theo hình thức Online, phù hợp với người học cần chủ động về thời gian.",
  },
  {
    question: "Làm sao để chọn được khóa học phù hợp?",
    answer:
      "Bạn có thể để lại thông tin đăng ký. Tư vấn viên sẽ trao đổi thêm về độ tuổi, trình độ hiện tại, mục tiêu học và hình thức học để gợi ý chương trình phù hợp.",
  },
  {
    question: "Tôi có thể hỏi về lịch học và học phí ở đâu?",
    answer:
      "Bạn hãy để lại thông tin ở form đăng ký hoặc liên hệ trực tiếp với Tân Sanh Ngữ. Trung tâm sẽ tư vấn chi tiết về lịch học, lớp phù hợp và các thông tin liên quan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="w-full overflow-hidden bg-white py-10 lg:py-16"
    >
      <div className="container mx-auto w-[calc(100%-2rem)] max-w-[1000px] md:w-[calc(100%-5rem)]">
        <SectionHeading
          eyebrow="CÂU HỎI THƯỜNG GẶP"
          title="Giải đáp những băn khoăn"
          highlight="trước khi bắt đầu"
          desc="Một số câu hỏi thường gặp về chương trình và hình thức học tại Tân Sanh Ngữ."
          className="mb-4  max-w-[760px] px-0 text-center md:mx-auto md:text-center [&>p]:mx-0 md:[&>p]:mx-auto"
        />

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[18px] border transition duration-300 ${isOpen
                    ? "border-primary/15 bg-surface shadow-[0_12px_30px_rgba(20,34,73,0.09)]"
                    : "border-primary/10 bg-surface hover:border-primary/20"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[15px] font-extrabold leading-[1.5] text-primary md:text-[16px]">
                    {item.question}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xl transition duration-300 ${isOpen
                        ? "rotate-45 bg-accent text-surface"
                        : "bg-highlight text-primary"
                      }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <div className="h-px bg-primary/10" />
                    <p className="pt-4 text-[14px] leading-[1.75] text-text-muted">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>


      </div>
    </section>
  );
}
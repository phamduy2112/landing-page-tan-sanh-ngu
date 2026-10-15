"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";

const faqs = [
  {
    question: "Tân Sanh Ngữ hiện đào tạo những chương trình tiếng Anh Online nào?",
    answer:
      "Trung tâm tập trung đào tạo các chương trình Tiếng Anh Online chất lượng cao gồm: Tiếng Anh Giao tiếp (phản xạ & công sở), Luyện thi TOEIC chuẩn đầu ra và Luyện thi IELTS mục tiêu dành cho học sinh THPT, sinh viên và người đi làm.",
  },
  {
    question: "Học Online tại Tân Sanh Ngữ có tương tác trực tiếp với giảng viên không?",
    answer:
      "Có. Lớp học Online được tổ chức theo hình thức tương tác trực tiếp hai chiều cùng giảng viên. Bạn được sửa lỗi phát âm, hướng dẫn luyện đề và giải đáp thắc mắc ngay trong buổi học, hoàn toàn không phải các video thu sẵn thụ động.",
  },
  {
    question: "Lịch học Online có linh hoạt cho người bận rộn không?",
    answer:
      "Có. Các lớp học Online được sắp xếp vào các khung giờ buổi tối linh hoạt (như 19:30 - 21:00 hoặc 20:00 - 21:30), rất thuận tiện cho học sinh kẹt lịch trên trường, sinh viên và người đi làm.",
  },
  {
    question: "Tôi bị mất gốc hoặc chưa rõ trình độ thì bắt đầu từ đâu?",
    answer:
      "Bạn chỉ cần để lại thông tin tại form đăng ký. Đội ngũ chuyên môn của Tân Sanh Ngữ sẽ liên hệ kiểm tra trình độ đầu vào miễn phí và tư vấn lộ trình học Online phù hợp nhất với năng lực và mục tiêu của bạn.",
  },
  {
    question: "Tôi có thể hỏi thông tin về lịch học và học phí ở đâu?",
    answer:
      "Lịch khai giảng và học phí các lớp Online được cập nhật liên tục. Bạn hãy để lại thông tin ở form tư vấn hoặc liên hệ trực tiếp với Tân Sanh Ngữ để nhận thông tin chi tiết và chính xác nhất.",
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
                  <span className="text-[15px] font-bold leading-[1.5] text-primary md:text-[16px]">
                    {item.question}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xl transition duration-300 ${isOpen
                      ? "rotate-45 bg-accent text-primary"
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
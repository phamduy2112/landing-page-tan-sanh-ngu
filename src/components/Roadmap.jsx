import SectionHeading from "./section-heading";

const steps = [
  {
    number: "01",
    title: "Lắng nghe nhu cầu",
    description:
      "Trao đổi để hiểu độ tuổi, mục tiêu học và mong muốn của phụ huynh hoặc người học.",
  },
  {
    number: "02",
    title: "Đánh giá phù hợp",
    description:
      "Tư vấn chương trình, hình thức học và lộ trình phù hợp với nhu cầu hiện tại.",
  },
  {
    number: "03",
    title: "Trải nghiệm thực tế",
    description:
      "Nhận thêm thông tin cần thiết để người học và gia đình an tâm trước khi lựa chọn.",
  },
  {
    number: "04",
    title: "Sẵn sàng bắt đầu",
    description:
      "Hoàn tất đăng ký và nhận hướng dẫn về lớp học, lịch học cùng các thông tin liên quan.",
  },
];

export default function Roadmap() {
  return (
    <section id="pathway" className="overflow-hidden bg-white py-10 md:py-16">
      <div className="container mx-auto grid w-[calc(100%-2rem)] max-w-[1200px] gap-10 md:w-[calc(100%-5rem)] md:grid-cols-2 md:items-stretch md:gap-16">
        {/* Nội dung - bên trái */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="LỘ TRÌNH TƯ VẤN"
            title="Tìm đúng lớp học,"
            highlight="bắt đầu đúng cách"
            desc="Tân Sanh Ngữ đồng hành cùng bạn từ bước xác định nhu cầu đến khi lựa chọn chương trình phù hợp."
            className=" px-0 text-left [&>p]:mx-0"
          />

          <div className="border-t border-primary/10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="flex gap-4 border-b border-primary/10 py-4 last:border-b-0"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-highlight text-[15px] font-extrabold text-primary">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-[14px] font-extrabold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-[1.7] text-text-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="#tu-van"
            className="group mt-2 inline-flex w-fit items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-[13px] font-extrabold text-surface transition hover:bg-accent"
          >
            Đăng ký tư vấn
            <span className="text-lg transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Ảnh - bên phải */}
        <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-surface md:min-h-[580px]">
          <img
            src="/assets/dangcapnhan.png"
            alt="Tư vấn lộ trình học tại Tân Sanh Ngữ"
            className="absolute inset-0 h-full w-full object-fill"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

         
        </div>
      </div>
    </section>
  );
}
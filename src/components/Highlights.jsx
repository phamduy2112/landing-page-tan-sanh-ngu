
import ButtonCTA from "./button-cta";
import SectionHeading from "./section-heading";

export default function Highlights() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-10 lg:py-16"
    >
      <div className="container mx-auto grid w-[calc(100%-2rem)] max-w-[1200px] items-center gap-10 md:w-[calc(100%-5rem)] md:grid-cols-2 md:gap-16">

        {/* ZONE 5 - HÌNH ẢNH BÊN TRÁI */}
        <div className="relative order-2 min-h-[380px] overflow-hidden rounded-[24px] bg-primary md:order-1 md:min-h-[600px]">
          <img
            src="/assets/dangcapnhan.png"
            alt="Hoạt động học ngoại ngữ tại Tân Sanh Ngữ"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">
            <span className="mb-3 inline-flex rounded-full bg-highlight px-3 py-2 text-[10px] font-bold tracking-[0.1em] text-primary">
              TÂN SANH NGỮ
            </span>

            <h3 className="max-w-[390px] text-[25px] font-bold leading-[1.3] text-surface md:text-[30px]">
              Học Online thực chiến, bứt phá mục tiêu.
            </h3>
          </div>
        </div>

        {/* NỘI DUNG BÊN PHẢI */}
        <div className="order-1 flex flex-col justify-center md:order-2">

          {/* ZONE 1 - GIỚI THIỆU TRUNG TÂM */}
          <SectionHeading
            eyebrow="GIỚI THIỆU TRUNG TÂM TÂN SANH NGỮ"
            title="TÂN SANH NGỮ –"
            highlight="NƠI TIẾNG ANH LÀ HÀNH TRÌNH KHÁM PHÁ VÀ CHINH PHỤC"
            desc="Tại Tân Sanh Ngữ, chúng tôi biến việc học ngoại ngữ thành một hành trình khám phá thú vị với mô hình học trực tuyến tương tác. Giáo trình luôn được thiết kế tinh gọn, đi thẳng vào nhu cầu thi cử các chứng chỉ IELTS, TOEIC hoặc làm việc của từng cá nhân. Hãy để Tân Sanh Ngữ đồng hành cùng bạn tối ưu thời gian và chinh phục mọi mục tiêu ngoại ngữ."
            className="mb-7 px-0 text-center lg:text-left [&>p]:mx-0"
          />

          <div className="grid gap-4">

            {/* ZONE 2 - MÔ HÌNH HỌC ONLINE */}
            <article className="rounded-[20px] bg-primary p-6 text-surface md:p-7">
              <span className="text-[11px] font-bold tracking-[0.12em] text-highlight">
                01 / MÔ HÌNH HỌC ONLINE HIỆU QUẢ
              </span>

              <h3 className="mt-3 text-[22px] font-bold leading-[1.3]">
                Tương tác tăng cường, gia tăng hiệu quả
              </h3>

              <p className="mt-2 max-w-[480px] text-[13px] leading-[1.7] text-surface/75">
                Lớp học Online nhưng tương tác giữa giáo viên và học viên là điểm mạnh tại Tân Sanh Ngữ. Thầy cô sẽ trực tiếp sửa lỗi phát âm, hướng dẫn giải đề và đốc thúc tiến độ mỗi ngày, giúp bạn tiết kiệm thời gian đi lại mà vẫn đạt kết quả cao nhất.
              </p>
            </article>

            {/* ZONE 3 + ZONE 4 */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* ZONE 3 - CHƯƠNG TRÌNH THỰC TIỄN */}
              <article className="rounded-[18px] border border-primary/10 bg-surface p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-accent">
                  02 / CHƯƠNG TRÌNH THỰC TIỄN
                </span>

                <h3 className="mt-3 text-[16px] font-bold leading-[1.4] text-primary">
                  Học đúng trọng tâm, bám đúng mục tiêu
                </h3>

                <p className="mt-2 text-[12px] leading-[1.7] text-text-muted">
                  Cung cấp các khóa học IELTS, TOEIC và tiếng Anh giao tiếp.
                </p>
              </article>

              {/* ZONE 4 - LỘ TRÌNH CÁ NHÂN */}
              <article className="rounded-[18px] bg-highlight p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-primary">
                  03 / LỘ TRÌNH DÀNH RIÊNG CHO BẠN
                </span>

                <h3 className="mt-3 text-[16px] font-bold leading-[1.4] text-primary">
                  Đánh giá, đào tạo, phát triển
                </h3>

                <p className="mt-2 text-[12px] leading-[1.7] text-primary/75">
                  Bạn sẽ được kiểm tra trình độ đầu vào miễn phí để biết chính xác mình đang ở đâu. Từ đó, trung tâm tư vấn lộ trình học vừa sức, tối ưu thời gian để bạn học nhẹ nhàng nhưng vẫn đạt đúng mức điểm mong muốn.
                </p>
              </article>

            </div>
          </div>

          {/* CTA */}
          <ButtonCTA text="Nhận tư vấn lộ trình Online" />
        </div>
      </div>
    </section>
  );
}

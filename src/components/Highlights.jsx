import ButtonCTA from "./button-cta";
import SectionHeading from "./section-heading";

export default function Highlights() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-10 lg:py-16"
    >
      <div className="container mx-auto grid w-[calc(100%-2rem)] max-w-[1200px] items-center gap-10 md:w-[calc(100%-5rem)] md:grid-cols-2 md:gap-16">
        {/* Hình bên trái (hiển thị dưới cùng trên mobile) */}
        <div className="relative min-h-[380px] overflow-hidden rounded-[24px] bg-primary md:min-h-[600px] order-2 md:order-1">
          <img
            src="/assets/dangcapnhan.png"
            alt="Hoạt động học ngoại ngữ tại Tân Sanh Ngữ"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">
            <span className="mb-3 inline-flex rounded-full bg-highlight px-3 py-2 text-[10px] font-extrabold tracking-[0.1em] text-primary">
              TÂN SANH NGỮ
            </span>

            <h3 className="max-w-[390px] text-[25px] font-extrabold leading-[1.3] text-surface md:text-[30px]">
              Học đúng nhu cầu, bắt đầu đúng lộ trình.
            </h3>
          </div>
        </div>

        {/* Content bên phải (hiển thị trên cùng trên mobile) */}
        <div className="flex flex-col justify-center order-1 md:order-2">
          <SectionHeading
            eyebrow="Giới Thiệu Tân Sanh Ngữ"
            title="Tân Sanh Ngữ"
            highlight="nơi ngôn ngữ trở thành lợi thế"
            desc="Chúng tôi không chỉ dạy ngoại ngữ, mà cùng bạn tháo gỡ rào cản giao tiếp và mở ra những cơ hội phát triển mới trong học tập và sự nghiệp."
            className="mb-7 px-0 text-center lg:text-left [&>p]:mx-0"
          />
          <div className="grid gap-4">
            {/* Card lớn */}
            <article className="rounded-[20px] bg-primary p-6 text-surface md:p-7">
              <span className="text-[11px] font-extrabold tracking-[0.12em] text-highlight">
                01 / ĐỊNH HƯỚNG
              </span>

              <h3 className="mt-3 text-[22px] font-extrabold leading-[1.3]">
                Chọn lớp theo nhu cầu học
              </h3>

              <p className="mt-2 max-w-[480px] text-[13px] leading-[1.7] text-surface/75">
                Tư vấn dựa trên độ tuổi, trình độ hiện tại, mục tiêu học và nhóm
                chương trình người học quan tâm.
              </p>
            </article>

            {/* Hai card nhỏ */}
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[18px] border border-primary/10 bg-surface p-5">
                <span className="text-[11px] font-extrabold tracking-[0.12em] text-accent">
                  02 / HÌNH THỨC
                </span>

                <h3 className="mt-3 text-[16px] font-extrabold leading-[1.4] text-primary">
                  Học đúng hình thức
                </h3>

                <p className="mt-2 text-[12px] leading-[1.7] text-text-muted">
                  Trẻ em học Offline; học sinh lớn, sinh viên và người đi làm có
                  thể chọn các chương trình Online.
                </p>
              </article>

              <article className="rounded-[18px] bg-highlight p-5">
                <span className="text-[11px] font-extrabold tracking-[0.12em] text-primary">
                  03 / TƯ VẤN
                </span>

                <h3 className="mt-3 text-[16px] font-extrabold leading-[1.4] text-primary">
                  Lộ trình trước khi bắt đầu
                </h3>

                <p className="mt-2 text-[12px] leading-[1.7] text-primary/75">
                  Trao đổi trước khi đăng ký để người học và phụ huynh chọn
                  chương trình phù hợp hơn.
                </p>
              </article>
            </div>
          </div>

          <ButtonCTA text="Trao đổi nhu cầu học" />
        </div>
      </div>
    </section>
  );
}
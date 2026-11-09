import { useState, useEffect } from 'react';
import { HiOutlineCheckCircle, HiOutlinePaperAirplane } from 'react-icons/hi2';

const initialValues = {
  name: '',
  phone: '',
  audience: '',
  course: '',
  message: '',
  consent: true,
};

const audienceOptions = [
  { value: 'high-school', label: 'Học sinh THPT' },
  { value: 'student', label: 'Sinh viên' },
  { value: 'working', label: 'Người đi làm' },
  { value: 'other', label: 'Khác / Phụ huynh' },
];

const courseGroups = [
  {
    label: 'Chương trình IELTS',
    options: [
      'IELTS Foundation (nền tảng)',
      'IELTS Intermediate (trung cấp)',
      'IELTS Advanced',
    ],
  },
  {
    label: 'Chương trình TOEIC',
    options: [
      'TOEIC Foundation',
      'TOEIC Advanced',
    ],
  },
  {
    label: 'Tiếng Anh Giao Tiếp',
    options: [
      'Giao tiếp tiếng Anh (Cuộc sống hằng ngày)',
      'Giao tiếp tiếng Anh (Chuyên nghiệp nơi công sở)',
    ],
  },
];

export default function ConsultationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Lắng nghe sự kiện chọn khóa học từ các section khác
  useEffect(() => {
    const handleSelectCourse = (event) => {
      const selected = event.detail;
      if (!selected) return;

      const allCourses = courseGroups.flatMap((g) => g.options);
      const exact = allCourses.find((c) => c === selected);
      const matched =
        exact ||
        allCourses.find((c) =>
          selected.toLowerCase().includes(c.toLowerCase().slice(0, 8))
        ) ||
        selected;

      setValues((current) => ({
        ...current,
        course: matched,
      }));
      setErrors((current) => ({ ...current, course: '' }));
    };

    window.addEventListener('tan-sanh-ngu:select-course', handleSelectCourse);
    return () => {
      window.removeEventListener(
        'tan-sanh-ngu:select-course',
        handleSelectCourse
      );
    };
  }, []);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }

  function submitForm(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Vui lòng nhập họ và tên của bạn.';
    }

    const cleanPhone = values.phone.trim().replace(/[\s.-]/g, '');
    const phoneRegex = /^(0|\+?84)(3|5|7|8|9)[0-9]{8}$/;
    if (!cleanPhone) {
      nextErrors.phone = 'Vui lòng nhập số điện thoại liên hệ.';
    } else if (!phoneRegex.test(cleanPhone)) {
      nextErrors.phone =
        'Số điện thoại không hợp lệ (ví dụ: 0912345678).';
    }

    if (!values.audience) {
      nextErrors.audience = 'Vui lòng chọn đối tượng phù hợp.';
    }

    if (!values.course) {
      nextErrors.course = 'Vui lòng chọn khóa học bạn quan tâm.';
    }

    if (!values.consent) {
      nextErrors.consent = 'Vui lòng đồng ý để trung tâm liên hệ tư vấn.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const audienceLabel =
      audienceOptions.find((a) => a.value === values.audience)?.label ||
      values.audience;

    const payload = {
      timestamp: new Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
      }),
      name: values.name.trim(),
      phone: values.phone.trim(),
      audience: audienceLabel,
      course: values.course,
      message: values.message.trim(),
      source: 'Landing Page Tân Sanh Ngữ',
    };

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5QgDSqxNsO2jXjjWwnQh3_wrg7dhxe_p2JIJAjCN5GoYt3pmnoOdmHoD9DXJ0xNIIQg/exec';

    async function sendData() {
      try {
        if (SCRIPT_URL && SCRIPT_URL.trim() !== '') {
          // Gửi dữ liệu tới Google Apps Script Web App
          // Dùng 'text/plain;charset=utf-8' và mode: 'no-cors' để tránh lỗi CORS preflight OPTIONS
          await fetch(SCRIPT_URL.trim(), {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
          });
        } else {
          // Giả lập khi chưa cấu hình VITE_GOOGLE_SHEET_URL
          await new Promise((resolve) => setTimeout(resolve, 600));
        }

        setIsSubmitted(true);
        setValues(initialValues);
      } catch (err) {
        console.error('Lỗi khi gửi form tới Google Sheets:', err);
        setSubmitError(
          'Có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ nhanh nhất.'
        );
      } finally {
        setIsSubmitting(false);
      }
    }

    sendData();
  }

  const fieldClass =
    'min-h-[46px] w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all';
  const labelClass = 'text-xs font-bold text-gray-700 tracking-wide';

  return (
    <section
      className="scroll-mt-20 py-10 lg:py-16 bg-surface-muted"
      id="tu-van"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto grid w-[calc(100%-3rem)] max-w-[1200px] overflow-hidden rounded-[20px] bg-primary shadow-xl md:w-[calc(100%-5rem)] md:grid-cols-[.95fr_1.05fr]">
        {/* CỘT THÔNG TIN TRÁI */}
        <div className="relative overflow-hidden px-7 py-10 text-surface md:px-[54px] md:py-[62px] before:absolute before:-left-[165px] before:-top-[165px] before:h-[310px] before:w-[310px] before:rounded-full before:border before:border-surface/15">
          <p className="relative mb-3 text-[12px] font-bold uppercase tracking-[.11em] text-highlight">
            BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN
          </p>

          <h2
            className="relative mb-4 max-w-[450px] font-heading text-[30px] font-bold leading-tight text-surface md:text-[38px]"
            id="contact-title"
          >
            Cùng tìm khóa học Online phù hợp.
          </h2>

          <p className="relative mb-7 max-w-[440px] text-[14px] leading-relaxed text-surface/85">
            Để lại thông tin và mục tiêu ngoại ngữ của bạn. Đội ngũ Tân Sanh Ngữ
            sẽ liên hệ đánh giá trình độ và tư vấn lộ trình Online hiệu quả nhất.
          </p>

          <div className="relative grid gap-3.5 text-[13px]">
            <span className="flex items-center gap-3">
              <b className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-highlight text-primary text-[11px] font-extrabold">
                ✓
              </b>
              Kiểm tra trình độ đầu vào miễn phí
            </span>

            <span className="flex items-center gap-3">
              <b className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-highlight text-primary text-[11px] font-extrabold">
                ✓
              </b>
              Lộ trình cá nhân hóa theo mục tiêu
            </span>

            <span className="flex items-center gap-3">
              <b className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-highlight text-primary text-[11px] font-extrabold">
                ✓
              </b>
              Linh hoạt thời gian, tương tác trực tiếp
            </span>
          </div>

          <span
            className="absolute bottom-5 right-5 text-[55px] text-highlight opacity-60"
            aria-hidden="true"
          >
            ✳
          </span>
        </div>

        {/* CỘT FORM ĐĂNG KÝ PHẢI */}
        <div className="m-2.5 rounded-[14px] bg-white p-6 md:p-9 shadow-sm">
          {isSubmitted ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center py-8 text-center animate-rise-in">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                <HiOutlineCheckCircle className="h-10 w-10" />
              </div>

              <h4 className="text-xl font-bold text-primary md:text-2xl">
                Gửi yêu cầu tư vấn thành công!
              </h4>

              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-gray-600">
                Cảm ơn bạn đã quan tâm. Đội ngũ tư vấn Tân Sanh Ngữ sẽ liên hệ
                với bạn qua số điện thoại đã cung cấp trong vòng 24 giờ làm việc.
              </p>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-white transition hover:brightness-110 shadow-sm"
              >
                Gửi thêm yêu cầu khác
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-[22px] font-bold text-primary md:text-[24px]">
                Đăng ký tư vấn Online
              </h3>

              <p className="mb-5 mt-1 text-[13px] text-text-muted">
                Điền thông tin bên dưới để nhận tư vấn lộ trình học phù hợp nhất.
              </p>

              <form
                className="grid gap-4 md:grid-cols-2"
                noValidate
                onSubmit={submitForm}
              >
                {/* HỌ VÀ TÊN */}
                <div className="grid content-start gap-1.5">
                  <label className={labelClass} htmlFor="lead-name">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`${fieldClass} ${errors.name ? 'border-red-400 focus:ring-red-200' : ''}`}
                    id="lead-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={values.name}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-semibold text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* SỐ ĐIỆN THOẠI */}
                <div className="grid content-start gap-1.5">
                  <label className={labelClass} htmlFor="lead-phone">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`${fieldClass} ${errors.phone ? 'border-red-400 focus:ring-red-200' : ''}`}
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Ví dụ: 0912 345 678"
                    value={values.phone}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-[11px] font-semibold text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* BẠN ĐANG LÀ */}
                <div className="grid content-start gap-1.5">
                  <label className={labelClass} htmlFor="lead-audience">
                    Bạn đang là <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={`${fieldClass} ${errors.audience ? 'border-red-400 focus:ring-red-200' : ''}`}
                    id="lead-audience"
                    name="audience"
                    value={values.audience}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.audience)}
                  >
                    <option value="">-- Chọn đối tượng --</option>
                    {audienceOptions.map(({ value, label }) => (
                      <option value={value} key={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {errors.audience && (
                    <p className="text-[11px] font-semibold text-red-500">
                      {errors.audience}
                    </p>
                  )}
                </div>

                {/* KHÓA HỌC QUAN TÂM */}
                <div className="grid content-start gap-1.5">
                  <label className={labelClass} htmlFor="lead-course">
                    Khóa học quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={`${fieldClass} ${errors.course ? 'border-red-400 focus:ring-red-200' : ''}`}
                    id="lead-course"
                    name="course"
                    value={values.course}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.course)}
                  >
                    <option value="">-- Chọn khóa học --</option>
                    {courseGroups.map((group) => (
                      <optgroup label={group.label} key={group.label}>
                        {group.options.map((opt) => (
                          <option value={opt} key={opt}>
                            {opt}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Tư vấn lộ trình theo mục tiêu">
                      Chưa rõ (Cần tư vấn lộ trình phù hợp)
                    </option>
                  </select>
                  {errors.course && (
                    <p className="text-[11px] font-semibold text-red-500">
                      {errors.course}
                    </p>
                  )}
                </div>

                {/* GHI CHÚ / CÂU HỎI */}
                <div className="grid gap-1.5 md:col-span-2">
                  <label className={labelClass} htmlFor="lead-message">
                    Mục tiêu hoặc câu hỏi{' '}
                    <span className="font-normal text-text-muted">
                      (không bắt buộc)
                    </span>
                  </label>
                  <textarea
                    className={`${fieldClass} min-h-[76px] resize-y`}
                    id="lead-message"
                    name="message"
                    rows="3"
                    placeholder="Ví dụ: Mục tiêu IELTS 6.5+, muốn học buổi tối..."
                    value={values.message}
                    onChange={updateField}
                  />
                </div>

                {/* ĐỒNG Ý LIÊN HỆ */}
                <div className="md:col-span-2">
                  <label className="flex items-start gap-2.5 text-[12px] leading-relaxed text-gray-600 cursor-pointer">
                    <input
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-primary"
                      type="checkbox"
                      name="consent"
                      checked={values.consent}
                      onChange={updateField}
                    />
                    <span>
                      Tôi đồng ý để Tân Sanh Ngữ liên hệ tư vấn thông tin khóa
                      học qua số điện thoại này.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-[11px] font-semibold text-red-500">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* HIỂN THỊ LỖI KẾT NỐI NẾU CÓ */}
                {submitError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-600 md:col-span-2">
                    {submitError}
                  </div>
                )}

                {/* NÚT SUBMIT */}
                <button
                  className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-secondary-hover disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin text-primary" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Đang gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="h-4 w-4 rotate-45" />
                      <span>Gửi yêu cầu tư vấn</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

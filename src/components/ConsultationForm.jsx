import { useState } from 'react'

const initialValues = { name: '', phone: '', audience: '', course: '', message: '', consent: false }
const audienceOptions = [['high-school', 'Học sinh THPT'], ['student', 'Sinh viên'], ['working', 'Người đi làm']]

export default function ConsultationForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function updateField(event) {
    const { name, value, checked, type } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function submitForm(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Vui lòng nhập họ và tên.'
    if (!/^\+?[\d\s().-]{8,18}$/.test(values.phone.trim())) nextErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ.'
    if (!values.audience) nextErrors.audience = 'Vui lòng chọn đối tượng học.'
    if (!values.course) nextErrors.course = 'Vui lòng chọn chương trình quan tâm.'
    if (!values.consent) nextErrors.consent = 'Vui lòng đồng ý để trung tâm liên hệ tư vấn.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('Vui lòng kiểm tra các thông tin được đánh dấu.')
      return
    }
    setStatus('Thông tin đã được kiểm tra trong bản demo. Form chưa gửi dữ liệu đến hệ thống nào.')
  }

  const fieldClass = 'min-h-11 w-full rounded border border-primary/20 bg-surface px-3 py-2.5 text-[11px] text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'
  const labelClass = 'text-[11px] font-bold text-primary'

  return (
    <section className=" py-10 lg:py-16 bg-surface-muted" id="tu-van" aria-labelledby="contact-title">
      <div className="container mx-auto grid w-[calc(100%-3rem)] max-w-[1200px] overflow-hidden rounded-[18px] bg-primary shadow-xl md:w-[calc(100%-5rem)] md:grid-cols-[.95fr_1.05fr]">
        <div className="relative overflow-hidden px-7 py-10 text-surface md:px-[54px] md:py-[62px] before:absolute before:-left-[165px] before:-top-[165px] before:h-[310px] before:w-[310px] before:rounded-full before:border before:border-surface/15">
          <p className="relative mb-4 text-[11px] font-bold tracking-[.11em] text-highlight">BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN</p><h2 className="relative mb-4 max-w-[450px] font-heading text-[33px] font-bold leading-tight text-surface md:text-[40px]" id="contact-title">Cùng tìm khóa học Online phù hợp.</h2><p className="relative mb-7 max-w-[440px] text-[13px] text-surface/80">Để lại thông tin và mục tiêu ngoại ngữ của bạn. Tân Sanh Ngữ sẽ liên hệ đánh giá trình độ và tư vấn lộ trình Online hiệu quả nhất.</p>
          <div className="relative grid gap-3 text-[11px]"><span className="flex items-center gap-2.5"><b className="grid h-5 w-5 place-items-center rounded-full bg-highlight text-primary">✓</b>Kiểm tra trình độ đầu vào miễn phí</span><span className="flex items-center gap-2.5"><b className="grid h-5 w-5 place-items-center rounded-full bg-highlight text-primary">✓</b>Lộ trình cá nhân hóa theo mục tiêu</span><span className="flex items-center gap-2.5"><b className="grid h-5 w-5 place-items-center rounded-full bg-highlight text-primary">✓</b>Linh hoạt thời gian, tương tác trực tiếp</span></div>
          <span className="absolute bottom-5 right-5 text-[55px] text-highlight" aria-hidden="true">✳</span>
        </div>
        <div className="m-2.5 rounded-[10px] bg-surface p-5 md:p-[34px]">
          <h3 className="mb-0.5 text-[23px] font-bold text-primary">Đăng ký tư vấn Online</h3><p className="mb-5 text-[11px] text-text-muted">Các mục có dấu * là bắt buộc.</p>
          <form className="grid gap-3.5 md:grid-cols-2" noValidate onSubmit={submitForm}>
            <div className="grid content-start gap-1.5"><label className={labelClass} htmlFor="lead-name">Họ và tên *</label><input className={fieldClass} id="lead-name" name="name" autoComplete="name" placeholder="Tên của bạn" value={values.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'error-name' : undefined} />{errors.name && <p className="text-[10px] text-red-500 font-semibold" id="error-name">{errors.name}</p>}</div>
            <div className="grid content-start gap-1.5"><label className={labelClass} htmlFor="lead-phone">Số điện thoại *</label><input className={fieldClass} id="lead-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Số điện thoại liên hệ" value={values.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'error-phone' : undefined} />{errors.phone && <p className="text-[10px] text-red-500 font-semibold" id="error-phone">{errors.phone}</p>}</div>
            <div className="grid content-start gap-1.5"><label className={labelClass} htmlFor="lead-audience">Bạn đang là *</label><select className={fieldClass} id="lead-audience" name="audience" value={values.audience} onChange={updateField} aria-invalid={Boolean(errors.audience)} aria-describedby={errors.audience ? 'error-audience' : undefined}><option value="">Chọn đối tượng</option>{audienceOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select>{errors.audience && <p className="text-[10px] text-red-500 font-semibold" id="error-audience">{errors.audience}</p>}</div>
            <div className="grid content-start gap-1.5"><label className={labelClass} htmlFor="lead-course">Khóa học Online quan tâm *</label><select className={fieldClass} id="lead-course" name="course" value={values.course} onChange={updateField} aria-invalid={Boolean(errors.course)} aria-describedby={errors.course ? 'error-course' : undefined}><option value="">Chọn khóa học</option><optgroup label="Tiếng Anh Giao Tiếp"><option>Tiếng Anh Giao Tiếp Phản Xạ</option><option>Tiếng Anh Giao Tiếp Công Sở</option></optgroup><optgroup label="Luyện Thi TOEIC"><option>TOEIC Foundation</option><option>TOEIC Luyện Đề Chuẩn Đầu Ra</option></optgroup><optgroup label="Luyện Thi IELTS"><option>IELTS Foundation</option><option>Pre - IELTS</option><option>IELTS Bứt Phá Mục Tiêu</option></optgroup></select>{errors.course && <p className="text-[10px] text-red-500 font-semibold" id="error-course">{errors.course}</p>}</div>
            <div className="grid gap-1.5 md:col-span-2"><label className={labelClass} htmlFor="lead-message">Mục tiêu hoặc câu hỏi <span className="font-normal text-text-muted">(không bắt buộc)</span></label><textarea className={`${fieldClass} min-h-[76px] resize-y`} id="lead-message" name="message" rows="3" placeholder="Bạn muốn được tư vấn điều gì?" value={values.message} onChange={updateField} /></div>
            <div className="md:col-span-2">
              {/* TODO: add approved privacy and data handling notice */}
              <label className="flex items-start gap-2 text-[10px] leading-relaxed text-text-muted"><input className="mt-0.5 accent-primary" type="checkbox" name="consent" checked={values.consent} onChange={updateField} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'error-consent' : 'privacy-note'} /><span>Đồng ý để Tân Sanh Ngữ liên hệ tư vấn theo thông tin đã cung cấp. <span className="block" id="privacy-note">Thông tin về quyền riêng tư và cách sử dụng dữ liệu cần được trung tâm duyệt.</span></span></label>
              {errors.consent && <p className="mt-1 text-[10px] text-red-500 font-semibold" id="error-consent">{errors.consent}</p>}
            </div>
            <button className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded bg-accent px-6 py-3.5 text-sm font-extrabold text-primary transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-secondary-hover md:col-span-2" type="submit">Gửi yêu cầu tư vấn</button>
            <p className="text-[11px] font-bold text-primary md:col-span-2" role="status" aria-live="polite">{status}</p>
            <p className="-mt-2 text-center text-[9px] text-text-muted md:col-span-2">Mockup chưa kết nối hệ thống nhận lead.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

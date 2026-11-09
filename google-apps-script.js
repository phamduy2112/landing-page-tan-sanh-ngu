/**
 * GOOGLE APPS SCRIPT - TÂN SANH NGỮ LANDING PAGE
 * 
 * HƯỚNG DẪN CÀI ĐẶT:
 * 1. Mở Google Sheet bạn muốn lưu dữ liệu học viên.
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa hết code mặc định trong file Code.gs, dán toàn bộ đoạn mã bên dưới vào.
 * 4. Nhấn nút "Lưu" (Save - biểu tượng đĩa mềm hoặc Ctrl+S).
 * 5. Nhấn nút "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment).
 * 6. Bấm vào biểu tượng bánh răng cạnh "Chọn loại", chọn "Ứng dụng web" (Web app).
 * 7. Thiết lập như sau:
 *    - Mô tả: Nhận form Tân Sanh Ngữ
 *    - Thực thi dưới dạng (Execute as): Tôi (email của bạn)
 *    - Ai có quyền truy cập (Who has access): Bất kỳ ai (Anyone)  <-- BẮT BUỘC CHỌN CÁI NÀY!
 * 8. Nhấn "Triển khai" (Deploy), cấp quyền truy cập tài khoản Google nếu được yêu cầu.
 * 9. Sao chép "URL ứng dụng web" (Web App URL có đuôi /exec) và dán vào file .env của project:
 *    VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycbx.../exec
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Khóa tránh xung đột khi nhiều người gửi cùng lúc

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Tự động tạo hàng tiêu đề nếu trang tính còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Thời gian gửi',
        'Họ và tên',
        'Số điện thoại',
        'Đối tượng',
        'Khóa học quan tâm',
        'Mục tiêu / Lời nhắn',
        'Nguồn đăng ký'
      ]);
      // Định dạng hàng tiêu đề: In đậm, nền xanh nhẹ
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#F0FDF4');
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');
    var name = data.name || '';
    var phone = "'" + (data.phone || ''); // Dấu nháy đơn ở đầu để Google Sheet giữ nguyên số 0 của SĐT
    var audience = data.audience || '';
    var course = data.course || '';
    var message = data.message || '';
    var source = data.source || 'Landing Page Tân Sanh Ngữ';

    // Thêm hàng mới vào Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      audience,
      course,
      message,
      source
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', message: 'Đã lưu thông tin tư vấn thành công' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Hỗ trợ kiểm tra khi test trực tiếp link GET
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'Tân Sanh Ngữ Google Sheets Webhook is ready.' }))
    .setMimeType(ContentService.MimeType.JSON);
}


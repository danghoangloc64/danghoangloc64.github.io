# T&T LOGISTICS MANAGER

## Tài liệu chức năng hệ thống

---

## 1. Giới thiệu chung

**T&T Logistics Manager** là hệ thống quản lý vận tải – logistics phục vụ cho doanh nghiệp vận tải hàng hóa. Hệ thống hỗ trợ quản lý toàn bộ quy trình nghiệp vụ từ tiếp nhận đơn hàng, điều phối xe, theo dõi vận chuyển, quản lý tài chính cho đến công nợ và báo cáo.

Tài liệu này **chỉ tập trung mô tả các chức năng nghiệp vụ**, không đi sâu vào kỹ thuật triển khai.

---

## 2. Chức năng đăng nhập & phân quyền

### 2.1 Đăng nhập hệ thống
- Người dùng đăng nhập bằng tên đăng nhập và mật khẩu
- Hệ thống xác thực thông tin người dùng
- Không cho phép đăng nhập nếu:
  - Sai thông tin đăng nhập
  - Tài khoản đang bị khóa

### 2.2 Phân quyền người dùng
Hệ thống hỗ trợ phân quyền theo vai trò:
- **Quản trị viên (Admin)**
  - Toàn quyền sử dụng hệ thống
  - Quản lý tài khoản người dùng
- **Nhân viên (Staff)**
  - Thực hiện nghiệp vụ hằng ngày
  - Không được quản lý người dùng

---

## 3. Dashboard (Bảng điều khiển)

### 3.1 Thống kê tổng quan
Dashboard hiển thị các chỉ số tổng hợp của hệ thống:
- Số xe đang hoạt động trong ngày
- Tổng số đơn hàng
- Tổng doanh thu
- Lợi nhuận ròng

### 3.2 Biểu đồ thống kê
- Biểu đồ trạng thái đơn hàng
- Biểu đồ so sánh doanh thu – chi phí – lợi nhuận

---

## 4. Quản lý đơn hàng

### 4.1 Danh sách đơn hàng
Mỗi đơn hàng bao gồm các thông tin:
- Mã đơn
- Khách hàng
- Loại xe
- Lộ trình (đi – đến)
- Xe nội bộ hoặc xe đối tác
- Ngày giao hàng
- Cước phí
- Trạng thái đơn hàng

### 4.2 Chức năng xử lý đơn hàng
- Tạo mới đơn hàng
- Chỉnh sửa thông tin đơn hàng
- Xóa đơn hàng
- Tìm kiếm đơn hàng theo mã hoặc khách hàng
- Cập nhật trạng thái đơn hàng

### 4.3 Xuất dữ liệu đơn hàng
- Xuất danh sách đơn hàng ra file PDF
- Xuất danh sách đơn hàng ra file Excel

---

## 5. Lịch sử vận chuyển & kế hoạch ngày

### 5.1 Lịch sử vận chuyển
- Tra cứu lịch sử vận chuyển theo khoảng thời gian
- Lọc theo xe, khách hàng hoặc mã đơn
- Hiển thị:
  - Doanh thu từng chuyến
  - Chi phí từng chuyến
  - Lợi nhuận từng chuyến

### 5.2 Kế hoạch vận chuyển theo ngày
- Xem kế hoạch vận chuyển theo từng ngày
- Phân loại:
  - Xe đã có lịch chạy
  - Xe chưa có lịch chạy
- Hiển thị số chuyến và lộ trình của từng xe

---

## 6. Quản lý đội xe

### 6.1 Danh sách xe
Thông tin quản lý xe bao gồm:
- Biển số xe
- Loại xe
- Hạn đăng kiểm

### 6.2 Cảnh báo đội xe
- Cảnh báo xe đã hết hạn đăng kiểm
- Cảnh báo xe sắp hết hạn đăng kiểm

### 6.3 Chức năng quản lý xe
- Thêm xe mới
- Chỉnh sửa thông tin xe
- Xóa xe
- Nhập danh sách xe từ file Excel
- Xuất danh sách xe ra PDF / Excel

---

## 7. Quản lý tài chính – sổ quỹ

### 7.1 Phiếu thu – phiếu chi
Mỗi phiếu thu/chi bao gồm:
- Ngày chứng từ
- Loại chứng từ (Thu / Chi)
- Nội dung
- Đối tượng liên quan
- Số tiền
- Tham chiếu (đơn hàng, quyết toán…)

### 7.2 Chức năng tài chính
- Tạo phiếu thu
- Tạo phiếu chi
- In phiếu
- Chỉnh sửa phiếu
- Xóa phiếu
- Xuất sổ quỹ ra PDF / Excel

---

## 8. Quản lý công nợ

### 8.1 Công nợ nhân viên
Theo dõi công nợ của lái xe/nhân viên:
- Tổng tiền đã ứng
- Số tiền đã hoàn trả
- Chi phí thực tế phát sinh
- Số dư công nợ

### 8.2 Quyết toán nhân viên
- Xem chi tiết các chuyến chưa quyết toán
- Chọn nhiều chuyến để quyết toán cùng lúc
- Tự động tạo phiếu thu/chi khi quyết toán

---

### 8.3 Công nợ khách hàng
Theo dõi công nợ khách hàng theo thời gian:
- Cước vận chuyển
- Chi hộ
- Số tiền đã thanh toán
- Số tiền còn phải thu

---

## 9. Quản lý người dùng

### 9.1 Danh sách người dùng
- Tên đăng nhập
- Họ tên
- Vai trò
- Trạng thái tài khoản

### 9.2 Chức năng quản lý người dùng
(Chỉ dành cho Admin)
- Thêm tài khoản mới
- Chỉnh sửa thông tin tài khoản
- Khóa / mở khóa tài khoản
- Xóa tài khoản

---

## 10. Báo cáo & xuất dữ liệu

Hệ thống hỗ trợ xuất dữ liệu cho các phân hệ:
- Đơn hàng
- Lịch sử vận chuyển
- Đội xe
- Sổ quỹ
- Công nợ

Định dạng xuất:
- PDF
- Excel

---

**Kết thúc tài liệu**


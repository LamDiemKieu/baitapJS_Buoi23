console.log("Bài tập JS buổi 2-3")

// BT1
// Input: lương 1 ngày 100.000, số ngày làm của nhân viên, CT tính lương: Lương 1 ngày * số ngày làm

// Output: Tính tiền lương nhân viên

// Các bước xử lý
const luong1Ngay = 100000;
function tienLuongNhanVien() {
    var soNgayLam = document.getElementById("soNgayLam").value * 1;

    var tinhTienLuong = luong1Ngay * soNgayLam;

    document.getElementById("hienThiKetQua").innerHTML = "Số tiền lương nhân viên nhận được là: " + tinhTienLuong.toLocaleString("vn-VN", { style: "currency", currency: "VND" });
}
document.querySelector(".btn-success").onclick = tienLuongNhanVien;


// BT2
//Input: 5 số thực người dùng nhập

//Output: Tính giá trị trung bình 5 số thực trên và xuất ra màn hình

// Các bước xử lý
function giaTriTrungBinh() {
    var sothuNhat = document.getElementById("soThuNhat").value * 1;
    var sothuHai = document.getElementById("soThuHai").value * 1;
    var sothuBa = document.getElementById("soThuBa").value * 1;
    var sothuTu = document.getElementById("soThuTu").value * 1;
    var sothuNam = document.getElementById("soThuNam").value * 1;

    var tinhTrungBinh = (sothuNhat + sothuHai + sothuBa + sothuTu + sothuNam) / 5;
    document.getElementById("ketQua").innerHTML ="Giá trị trung bình của 5 số trên là: " + tinhTrungBinh;
}
document.querySelector(".btn-danger").onclick = giaTriTrungBinh;


// BT3
//Input: số tiền USD nhập từ người dùng, giá  USD là 23.500 VND

//Output: Tính và xuất ra giá trị sau khi quy đổi sang VND

// Các bước xử lý
const giaUSD = 23500;
function soTienQuyDoi() {
    var soTienUSD = document.getElementById("soTienUSD").value * 1;
    var quyDoiTien = soTienUSD * giaUSD;

    document.getElementById("xuatKetQua").innerHTML ="Số tiền sau khi quy đổi là: " + quyDoiTien.toLocaleString("vn-VN", { style: "currency", currency: "VND" });
}
document.querySelector(".btn-dark").onclick = soTienQuyDoi;


// BT4
//Input: chiều dài và chiều rộng HCN người dùng nhập. CT tính diện tích HCN: dài x rộng. CT tính chu vi HCN: (dài + rộng) x 2

//Output: Tính và xuất ra giá trị diện tích và chu vi của HCN trên

// Các bước xử lý
function hinhChuNhat() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    document.getElementById("ketQuaLa").innerHTML = "Diện tích hình chữ nhật là: " + dienTich + " ; " + "Chu vi hình chữ nhật là: " + chuVi;
}
document.querySelector(".btn-primary").onclick = hinhChuNhat;


// BT5
//Input: 1 số có 2 chữ số

//Output: Tính và xuất ra giá trị tổng 2 ký số vừa nhập

// Các bước xử lý
function tong2KySo() {
    var so2ChuSo = document.getElementById("so2ChuSo").value * 1;

    var sohangChuc = Math.floor((so2ChuSo % 100) / 10);
    var soHangDonVi = so2ChuSo % 10;
    var tong2So = sohangChuc + soHangDonVi;

    document.getElementById("tongKetQua").innerHTML ="Tổng 2 ký số là: " + tong2So;
}
document.querySelector(".btn-warning").onclick = tong2KySo;



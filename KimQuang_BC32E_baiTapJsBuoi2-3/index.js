// Bài 1: Tính tiền lương nv
/*
    Input: số ngày công
    Process: số ngày công * 100.000
    Output: tổng tiền lương
*/
document.getElementById('btnTinhLuong').onclick = function () {
    var ngayCong = Number(document.getElementById('ngayCong').value);
    var luong = ngayCong * 100000;

    document.getElementById('ketQua_b1').innerHTML = 'Tiền lương: ' + luong;

};

// Bài 2: Tính giá trị trung bình
/*
    Input: cho 5 số thực a, b, c, d, e
    Process: (a + b + c + d + e) / 5
    Output: giá trị trung bình
*/
document.getElementById('btnTrungBinh').onclick = function () {
    var a = Number(document.getElementById('giaTri1').value);
    var b = Number(document.getElementById('giaTri2').value);
    var c = Number(document.getElementById('giaTri3').value);
    var d = Number(document.getElementById('giaTri4').value);
    var e = Number(document.getElementById('giaTri5').value);
    var avg = (a + b + c + d + e) / 5;

    document.getElementById('ketQua_b2').innerHTML = 'Giá Trị Trung Bình = ' + avg;
};

// Bài 3: Quy đổi tiền từ USD sang VND
/*
    Input: nhập số tiền USD
    Proces: VND = USD * 23500
    Output: giá trị tiền VND sau khi quy đổi
*/
document.getElementById('btnQuyDoiTien').onclick = function () {
    var usd = Number(document.getElementById('tienUSD').value);
    var vnd = usd * 23000;

    document.getElementById('ketQua_b3').innerHTML = vnd + 'VND';
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
/*
    Input: nhập 2 tham số chiều dài (cd), chiều rộng (cr) của hình chữ nhật
    Process: chu vi (cV) = (cd + cr) * 2; diện tích (dT) = cd * cr 
    Output: kết quả chu vi và diện tích hình chữ nhật
*/
document.getElementById('btnTinhChuVi').onclick = function () {
    var cd = Number(document.getElementById('chieuDai').value);
    var cr = Number(document.getElementById('chieuRong').value);
    var cV = (cd + cr) * 2;

    document.getElementById('ketQua_b4_cV').innerHTML = 'Chu vi = ' + cV;
};
document.getElementById('btnTinhDienTich').onclick = function () {
    var cd = Number(document.getElementById('chieuDai').value);
    var cr = Number(document.getElementById('chieuRong').value);
    var dT = cd * cr;

    document.getElementById('ketQua_b4_dT').innerHTML = 'Diện tích = ' + dT;
};

// Bài 5: Tính tổng 2 ký số
/*
    Input: nhập 1 số có 2 chữ số (n)
    Process: 
        + (nChuc) trích xuất số hàng chục từ số đã cho: Math.floor(n / 10) 
        + (nDonVi) trích xuất số hàng đơn vị từ số đã cho: n % 10
    Output: tổng 2 ký số đã trích xuất (nSum)
*/
document.getElementById('btnTinhTong2KySo').onclick = function () {
    var n = Number(document.getElementById('soNhapVao').value);
    var nChuc = Math.floor(n / 10);
    var nDonVi = n % 10;
    var nSum = nChuc + nDonVi;

    document.getElementById('ketQua_b5').innerHTML = 'Tổng 2 Ký Số = ' + nSum;
};
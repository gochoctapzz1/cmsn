function nutDangnhap() {
    var oNhap = document.getElementById("tenDangnhap"); 
    var oMatkhau = document.getElementById("matkhau");

    if (oNhap.value == "admin" && oMatkhau.value == "admin") {
        alert("Đăng nhập thành công! (chuẩn bị bay màu, thông báo trước cho đỡ bất ngờ!)");
        window.location.href = "trangchu.html";
    } else {
        alert("Không đúng! Acc còn nguyên, chưa mất!");
        oNhap.value = "";
        oMatkhau.value = "";
        oNhap.focus();
    }
}

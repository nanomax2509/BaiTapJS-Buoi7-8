var arrayNum = [];
// Thêm số vào mảng
function addNumber() {
    var input = document.getElementById("inputN").value;
    arrayNum.push(input);
    console.log(arrayNum);
    document.getElementById("txtResult").innerHTML = arrayNum;
}
document.getElementById("btnAdd").onclick = addNumber;

// Tính tổng số dương
function tongDuong() {
    var tong = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            tong += parseInt(arrayNum[i]);
        }
        console.log(tong);
    }
    document.getElementById("txtTong").innerHTML = tong;
}
document.getElementById("btnTong").onclick = tongDuong;

// Đếm số dương

function demSoDuong() {
    var demSo = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            demSo++;
        }
        console.log(demSo);
    }
    document.getElementById("txtDem").innerHTML = demSo;
}
document.getElementById("btnDem").onclick = demSoDuong;

// <!-- Tìm số nhỏ nhất -->
function soNhoNhat() {
    var nhoNhat = Math.min(...arrayNum);

    document.getElementById("txtNhoNhat").innerHTML = nhoNhat;
}
document.getElementById("btnNhoNhat").onclick = soNhoNhat;

// <!-- Tìm số dương nhỏ nhất -->

function soDuongNhoNhat() {
    var duongNhoNhat = arrayNum[0];
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            if (arrayNum[i] < duongNhoNhat || !duongNhoNhat) {
                duongNhoNhat = arrayNum[i];
            }
        }
    }
    document.getElementById("txtDuongNhoNhat").innerHTML = duongNhoNhat;
}
document.getElementById("btnDuongNhoNhat").onclick = soDuongNhoNhat;

// <!-- Tìm số chẵn cuối cùng -->
function soChanCuoi() {
    var soChanCuoi = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 == 0) {
            soChanCuoi = arrayNum[i];
        }
    }
    document.getElementById("txtSoChanCuoi").innerHTML = soChanCuoi;
}
document.getElementById("btnSoChanCuoi").onclick = soChanCuoi;

// <!-- Đổi chỗ -->
function doiCho() {
    var tam = 0;
    var doiSo1 = document.getElementById("inputSo1").value;
    var doiSo2 = document.getElementById("inputSo2").value;
    tam = arrayNum[doiSo1];
    arrayNum[doiSo1] = arrayNum[doiSo2];
    arrayNum[doiSo2] = tam;
    document.getElementById("txtDoi").innerHTML = "Mảng sau khi đổi chỗ: <br>" + arrayNum;
}
document.getElementById("btnDoi").onclick = doiCho;

// <!-- Sắp xếp tăng dần -->

function sapXepTang() {
    var arrayNumCopy = [];
    for (var i = 0; i < arrayNum.length; i++) {
        arrayNumCopy.push(arrayNum[i]);
    }
    var result = arrayNumCopy.sort(function(a,b){
        return a - b;
    });

document.getElementById("txtTang").innerHTML = result;
}
document.getElementById("btnTang").onclick = sapXepTang;

// Tìm số nguyên tố đầu tiên

function SNT(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

}

var soNT = null;
function timSNT() {
    for (var num of arrayNum) {
        if (SNT(num)) {
            soNT = num;
            break;
        }
    }
    document.getElementById("txtSNT").innerHTML = soNT;
}

document.getElementById("btnSNT").onclick = timSNT;

// <!-- Đếm số nguyên -->
var arraySNguyen = [];
function addSN() {
    var inputSoNguyen = Number(document.getElementById("inputSoNguyen").value);
    arraySNguyen.push(inputSoNguyen);
    document.getElementById("txtArraySN").innerHTML = arraySNguyen;
}
function demSN() {
    var soNguyen = 0;
    for (var i = 0; i < arraySNguyen.length; i++) {
        if (Number.isInteger(arraySNguyen[i])) {
            soNguyen++;
        }
    }
    document.getElementById("txtSoNguyen").innerHTML = "Số nguyên: " + soNguyen;

}
document.getElementById("btnSoNguyen").onclick = demSN;
document.getElementById("btnThemSN").onclick = addSN;

// <!-- So sánh số lượng âm dương -->
var soDuong = 0;
var soAm = 0;
function soSanhAmDuong() {
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            soDuong++;
            console.log(arrayNum[i]);
        }
        else
            soAm++;
    }
    console.log("SOduong", soDuong);
    console.log("am", soAm);
    if (soDuong > soAm) {
        document.getElementById("txtAmDuong").innerHTML = "Số âm < Số dương";
    }
    else if (soDuong < soAm) {
        document.getElementById("txtAmDuong").innerHTML = "Số âm > Số dương";
    }
    else
    document.getElementById("txtAmDuong").innerHTML = "Số âm = Số dương";
}

    document.getElementById("btnAmDuong").onclick = soSanhAmDuong;

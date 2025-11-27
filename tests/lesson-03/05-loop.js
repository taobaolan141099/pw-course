//1. Tính tổng từ 1 đến 100
let sum = 0;

for (let i = 0; i < 101; i++) {
    sum = sum + i;
}
console.log(sum);

//2. In bảng cửu chương từ 2 đến 9. 
let BangCuuChuong = [];
let dum = 0;
for (let i = 2; i < 10; i++) {
    for (let x = 2; x < 10; x++) {
        dum = i * x;
        BangCuuChuong.push(dum);
    }
}
console.log(BangCuuChuong);

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let MangSoLe = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        MangSoLe.push(i)
    }
}
console.log(MangSoLe);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i=0; i<15;i++)
{
    console.log(`user${i}@example.com`);
}

//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100} 

let DoanhThu = [ //Tạo mảng chứa các tháng và doanh thu của tháng
    { month: 1, total: 25 },
    { month: 2, total: 20 },
    { month: 3, total: 40 },
    { month: 4, total: 50 },
    { month: 5, total: 74 },
    { month: 6, total: 26 },
    { month: 7, total: 36 },
    { month: 8, total: 47 },
    { month: 9, total: 51 },
    { month: 10, total: 26 },
    { month: 11, total: 67 },
    { month: 12, total: 91 }
]

let TongDoanhThu = 0;
for (let i = 0; i < DoanhThu.length; i++) {
    TongDoanhThu = TongDoanhThu + DoanhThu[i].total
}
console.log(TongDoanhThu);
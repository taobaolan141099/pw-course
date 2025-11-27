//1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau. 

function multiply(a, b)
{
    let multiply = a*b;
    return multiply;
}
let multi = multiply(10,20);
console.log(multi);
console.log(multiply(2,3));

//2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau. 
function findMin(a, b, c) 
{
    if(a<b&&a<c)
        return a;
    if(b<a&&b<c)
        return b;
    else
        return c;
};
let Min = findMin(15,2,20);
console.log(findMin(5,7,9));
console.log(Min);

//3. Viết hàm getTopStudents nhận 2 tham số: 
// students: mảng các object, mỗi object chứa name (tên) và score (điểm). 
// threshold: ngưỡng điểm để được coi là "top" (số). 
// Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold. 
// Gọi hàm với danh sách thực tế và in kết quả.

function getTopStudents(students, threshold) {
    let CheckScore = [] //Mảng chứa những học sinh có điểm lớn hơn threshold
    for (let i = 0; i < students.length; i++) {
        if (students[i].Score >= threshold) {
            CheckScore.push(students[i].Name);
        }
    }

    return CheckScore;
}

//Khởi tạo danh sách học sinh
let StudentsList = [
    { Name: 'Lan', Score: 70 },
    { Name: 'An', Score: 50 },
    { Name: 'Bao', Score: 55 },
    { Name: 'Nhan', Score: 60 },
    { Name: 'Van', Score: 78 }
]

//truyền tham số vào function getTopStudents
let TopStudents = getTopStudents(StudentsList, 60);

console.log("Danh sách Top students: ", TopStudents);

// 4. Viết hàm calculateInterest nhận 3 tham số: 
// principal: số tiền gửi ban đầu (số).
// rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%). 
// years: số năm gửi. 
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, 
// sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100. 
// Gọi hàm với ví dụ thực tế và in kết quả.

function calculateInterest(principal, rate, years) {
    let Interest = principal + principal*rate*years/100.;
    return Interest
}

// console.log(calculateInterest(100000,10,3));

let Contract = {
    principal: 200000,
    rate: 10,
    years: 3
}
let TotalAmount = calculateInterest(Contract.principal,Contract.rate,Contract.years);

console.log(`Tiền gửi ban đầu: ${Contract.principal}, Lãi suất hàng năm: ${Contract.rate}, Thời hạn: ${Contract.years}. Tổng số tiền phải trả: ${TotalAmount}`)
Function lúc trước học:
function add(a, b) {
    return a + b;
}

Function Expression: Định nghĩa function bằng cách gán nó cho một biến
const add = function(a, b) {
    return a + b;
};

Lambda function(Arrow function): giống function Expression nhưng ko cần phải gõ function mà sử dụng dấu =>
const add = (a, b) => {
    return a + b;
};

Một số cách viết khác

Đối với những hàm nào chỉ có 1 dòng code thì có thể rút gọn bỏ ngoặc nhọn như sau:
const add = (a, b) => a + b;

Không có tham số
- Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();

Một tham số
- Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;
const square = x => x * x;

- Hoặc giữ dấu ngoặc (tùy style)
const triple = (x) => x * 3;

Anonymous function (hàm ẩn danh): là function không có tên và được sử dụng khi function chỉ cần dùng một lần hoặc làm callback.
function namedFunction() {
    console.log("I have a name!");
}
- Anonymous function (không tên)
function() { // SyntaxError! Không thể đứng một mình
    console.log("I'm anonymous!");
}

- Anonymous function phải được sử dụng ngay

// 1. Gán cho biến
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback
setTimeout(function() {
    console.log("Anonymous callback!");
}, 1000);


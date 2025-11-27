các Convensions khi đặt tên file:
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class    

let T1 = "text";
let t2 = 
{
    x1: "text"  ,
    x2:
    {
        y3: "text123",
        y4: "text456"
    }
}

các cách để print ở Js:
- console.log("text");
- console.log(`text`);
- console.log('text');
- console.log(`text: ${T1}`);
- console.log(T1);
- console.log(t2.x1);
- console.log(t2.x1.y3);
- console.log(t2["x1"]);
- console.log(t2["x1"]["y4"]);
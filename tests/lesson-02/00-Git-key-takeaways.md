git: là Version Control System
 - git remote add origin <url> //Dùng để tạo repo trên GitHub và liên kết tới repo local. Chỉ cần chạy lần đầu tiên

 - git config user.name "Lan Tao" //Dùng để hiện tên của mình ở project, để những ngkhac biết mình là ai
 - git config user.email "Lantao@test.com" //Dùng để hiện email của mình ở, để những ngkhac biết mình là ai

 - git config --global user.name "Lan Tao" //Dùng để hiện tên của mình ở toàn bộ các project, để những ngkhac biết mình là ai
 - git config --global user.email "Lantao@test.com" //Dùng để hiện email của mình ở toàn bộ các project, để những ngkhac biết mình là ai
 - git config --global init.Branch main //Dùng để khởi tạo Branch main

 - git init  //Dùng để khởi tạo nơi lưu trữ, Chỉ cần nhập 1 lần khi mở lại working area
 - git add .  //Dùng để add hết các file đã được chỉnh sửa ở lần này vào staging area
 - git add Tên file // Dùng để add 1 file cần thiết lên staging area 
            // VD: git add 00-Git-key-takeaway.md
            // VD: Nếu muốn add 1 lúc 2 file thì git add 00-Git-key-takeaway.md 01-JS-key-takeaways.md
 - git commit -m "name" //Dùng để commit code lên repo. Nên dùng thêm các loại convension để phân biệt từng commit được push lên repo. 
 - git push origin main //Dùng để đẩy code lên main
 - git status //Dùng để check status của các file trong repo. 
            // File màu xanh: vùng staging
            // File màu đỏ: vùng working directory
 - git log //Dùng để check các commit đã được commit lên repo trước 
 
 



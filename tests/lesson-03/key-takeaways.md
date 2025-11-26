git commit --amend 
- Commit này được dùng để thêm xóa sửa nội dung trong commit trước đó mà không tạo thêm 1 commit mới 

git commit --amend -m "message"
- Commit này được dùng để edit lại message của commit trước đó và không làm thay đổi nội dung của commit trước đó

git restore --staged <file>
- Commit này dùng để lấy 1 hoặc nhiều file đã được đưa vào Staging area quay về working directory

git restore --staged .
- Lấy hết các file ở Staging area về working directory

git reset HEAD~1
- commit này dùng để Undo. Dễ hiểu hơn thì commit đã được push lên main thì sẽ xóa commit này và quay về working directory nhưng vẫn giữ lại các thay đổi của commit đó

git reset HEAD~n
- commit này sẽ lùi lại nhiều commit theo ý định mình cần. 
VD: commit main, 1, 2, 3, 4, 5. git reset HEAD~2 thì sẽ reset lại về commit 3 và vẫn giữ những thay đổi của commit 4, 5 

git pull origin main/main
- commit này dùng để lấy code từ main/master commit về máy mình

var today = new Date();
var day = today.getDay();
var date = String(today.getDate()).padStart(2,'0'); // padStart luôn hiển thị ngày tháng giờ phút dạng 2 chữ số, nếu chỉ có 1 thì mặc định số đầu là 0
var month = String(today.getMonth()+1).padStart(2,'0'); //getMonth()+1 là do hàm getMonth() chỉ chạy từ 0-11
var year = today.getFullYear();
var hour = String(today.getHours()).padStart(2,'0');
var min = String(today.getMinutes()).padStart(2,'0');
var datetime = 'Thứ' + ' ' + day + ',' + ' ' + date + '/' + month + '/' + year + ',' + ' ' + hour + ":" + min; 


let originalColumnHeight = {}; // Lưu trữ kích thước gốc của cột

function adjustColumnHeight(column) {
  const select = column.querySelector('select');
  // Set column height based on number of options in the select box
  column.style.height = (select.options.length * 24 + 16) + "px";
}

function resetColumnHeight(column) {
  const select = column.querySelector('select');
  // Đặt lại kích thước của cột thành kích thước gốc
  column.style.height = originalColumnHeight[column.id];
}

// Lưu trữ kích thước gốc của cột khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
  const columns = document.querySelectorAll('td');
  columns.forEach(column => {
    originalColumnHeight[column.id] = column.offsetHeight + "px";
  });
});


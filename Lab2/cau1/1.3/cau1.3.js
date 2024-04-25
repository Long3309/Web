function sum(event){
    event.preventDefault();
    var salary = document.getElementById("salary").value;
    var hsl = document.getElementById("hsl").value;
    var kq = parseFloat(salary)*parseFloat(hsl);
    document.getElementById("result").value = kq;
} 

function check(number) {
    var salary = document.getElementById('salary');
    var check = document.getElementById('check');
    var numberRegex =/^[0-9](\.\d+)*$/;
    // var numberRegex = /^\d+(\.\d+)?$/; // Biểu thức chính quy kiểm tra xem chuỗi chỉ chứa các ký tự số, ^: giá trị đầu chuỗi; $: giá trị cuối chuỗi; .\d+: kiểm tra có ít nhất 1 chữ số sau dấu chấm thập phân; \d+: kiểm tra có ít nhất 1 chữ số 0-9
    if (!numberRegex.test(number.value)) // phương thức test dùng kiểm tra chuỗi có đúng với yêu cầu trước đó ko; numberRegex: tên biến của biểu thức chính
    {
        check.innerText = "Giá trị nhập vào phải là số. Vui lòng nhập lại lương!";
    } else {
        check.innerText = "";
    }
}
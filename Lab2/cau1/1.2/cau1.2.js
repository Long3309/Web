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
    if (isNaN(number.value)) {
        check.innerText = "Giá trị nhập vào phải là số. Vui lòng nhập lại lương!";
    } else {
        check.innerText = "";
    }
}
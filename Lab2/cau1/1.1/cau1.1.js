/* Tính lương có button */
function sum(event){
    event.preventDefault();
    var salary = document.getElementById("salary").value;
    var hsl = document.getElementById("hsl").value;
    var kq = parseFloat(salary)*parseFloat(hsl);
    document.getElementById("result").value = kq;
} 
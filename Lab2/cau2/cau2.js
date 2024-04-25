function printbill(){
    var food = document.getElementById("namefood").value;
    var drink = document.getElementById("namedrink").value;
    var ngay = document.getElementById("bright").value;
    var dem = document.getElementById("night").value; 

    var new_window = window.open();
    var table = new_window.document.createElement("table");
    table.style.border = "1px solid black";

    table.innerHTML=`
    <table>
        <tr>
            <td><b>Các món đã dùng</b></td>
            <td><b>Tiền</b></td>
        </tr>

        <tr>
            <td>` + food + ` </td>
        </tr>
        <tr>
            <td>` + food + ` </td>
        </tr>

        <tr>
            <td><b>Thời điểm</b></td>
        </tr>

        <tr>
            <td><b>Tổng tiền</b></td>
            <td></td>
        </tr>
    </table>`;

    // if(dem == true){
    //     var time = document.getElementById("night").value;
    //     time = "Ban đêm";
    // } else {
    //     time = "Ban ngày"
    // }

    new_window.document.body.appendChild(table);
}
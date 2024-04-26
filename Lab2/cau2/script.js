// Lắng nghe sự kiện click trên các sản phẩm và thực hiện chức năng tương ứng
document.querySelectorAll('#namefood option').forEach(item => {
    item.addEventListener('click', () => {
        // Kiểm tra xem sản phẩm đã được chọn hay chưa
        if (!item.classList.contains('selected')) {
            // Bỏ chọn tất cả các sản phẩm khác
            document.querySelectorAll('#namefood option').forEach(otherItem => {
                otherItem.classList.remove('selected');
            });
            // Chọn sản phẩm hiện tại
            item.classList.add('selected');
            // Thực hiện hành động khi sản phẩm được chọn (ví dụ: lấy giá trị sản phẩm)
            var selectedValue = item.getAttribute('value');
            console.log(selectedValue); // In ra console giá trị sản phẩm được chọn
        }
    });
});

document.querySelectorAll('#namedrink option').forEach(item => {
    item.addEventListener('click', () => {
        // Kiểm tra xem sản phẩm đã được chọn hay chưa
        if (!item.classList.contains('selected')) {
            // Bỏ chọn tất cả các sản phẩm khác
            document.querySelectorAll('#namedrink option').forEach(otherItem => {
                otherItem.classList.remove('selected');
            });
            // Chọn sản phẩm hiện tại
            item.classList.add('selected');
            // Thực hiện hành động khi sản phẩm được chọn (ví dụ: lấy giá trị sản phẩm)
            var selectedValue = item.getAttribute('value');
            console.log(selectedValue); // In ra console giá trị sản phẩm được chọn
        }
    });
});
function printbill(){
    var selected_food = document.querySelector('#namefood option.selected'); // Lấy sản phẩm thức ăn được chọn
    var selected_drink = document.querySelector('#namedrink option.selected'); // Lấy sản phẩm thức uống được chọn
    var price_food = selected_food.value.split("-")[1]; // Lấy giá của sản phẩm thức ăn
    var price_drink = selected_drink.value.split("-")[1]; // Lấy giá của sản phẩm thức uống
    var total_price = parseInt(price_food) + parseInt(price_drink); // Tính tổng giá
    // var food = document.getElementById("namefood").value;
    // var drink = document.getElementById("namedrink").value;
    // var ngay = document.getElementById("bright").value;
    // var dem = document.getElementById("night").value; 

    var brightRadioButton = document.getElementById("bright"); // Lấy tham chiếu đến radio button "Ban ngày"
    var new_window = window.open();
    var table = new_window.document.createElement("table");
    table.style.border = "1px solid black";

    table.innerHTML=`
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main2.css">
    </head>
    <body>
    <table>
        <tr>
            <td><b>Các món đã dùng</b></td>
            <td><b>Tiền</b></td>
        </tr>

        <tr>
            <td>` + selected_food.textContent + ` </td>
            <td>` + price_food + `</td>
        </tr>
        <tr>
            <td>` + selected_drink.textContent + ` </td>
            <td>` + price_drink + `</td>
        </tr>

        <tr>
            <td><b>Thời điểm</b></td>
            <td>` + (brightRadioButton.checked ? "Ban ngày" : "Ban đêm") + `</td>
        </tr>

        <tr>
            <td><b>Tổng tiền</b></td>
            <td> ` + total_price +`</td>
        </tr>
    </table>
    </body>
    `;

    // if(dem == true){
    //     var time = document.getElementById("night").value;
    //     time = "Ban đêm";
    // } else {
    //     time = "Ban ngày"
    // }

    new_window.document.body.appendChild(table);
}
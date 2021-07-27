var imagePath = "img/products/obagi/"
$(document).ready(function () {
    console.log("Ready");
    $("#obagi-1").on("click", function() {
        console.log("obagi click");
        $("#product-list").attr('src', imagePath + "1.png");
    });
});
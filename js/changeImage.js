var imagePath = "img/products/"
$(document).ready(function () {
    // $("#obagi-1").on("click", function() {
    //     console.log("obagi click");
    //     $("#product-list").attr('src', imagePath + "1.png");
    // });
    var cnt = 1;
    for (var i = 0; i < productNames.length; i++) {
        var compo = `<div class="panel panel-default">\
                        <div class="panel-heading">\
                            <h4 class="panel-title">\
                                <a data-toggle="collapse" data-parent="#accordian" href="#${productNames[i].slice(0, 2)}">\
                                    <span class="badge pull-right"><i class="fa fa-plus"></i></span>\
                                    ${productNames[i]}\
                                </a>\
                            </h4>\
                        </div>
                        <div id="${productNames[i].slice(0, 2)}" class="panel-collapse collapse">\
                            <div class="panel-body">\
                                <ul>`;
        for (var j = 0; j < functions[i].length; j++) {
            compo += `<li id="${cnt++}" class="btn">${functions[i][j]}</li>`;
        }
        compo += `</ul></div></div></div>`;
                    //             </ul>\
                    //         </div>\
                    //     </div>\
                    // </div>';

        $("#accordian").append(compo);
    }
    cnt = 1;
    //console.log(productNames.length);
    for (var i = 0; i < productNames.length; i++) {
        var name = productNames[i].slice(0, 2).toLowerCase();
        for (var j = 0; j < functions[i].length; j++) {
            var curIndex = j + 1;
            (function(name, curIndex){
                $(`#${cnt}`).on("click", function() {
                    console.log('name: ' + name + ' curindex: ' + curIndex);
                    $("#product-list").attr('src', imagePath + name + `/${curIndex}.png`);
                });
            })(name, curIndex);
            cnt++;
        }
    }
});
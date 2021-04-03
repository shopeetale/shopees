// for inn amazon
jQuery.getJSON("../jsons/amazon.json", function (data) {
    console.log(data.length, "datas");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="shp-dlt-sec">
                                <div class="discountbx">${data[i].discount}</div>
                                <div class="pro-desc-bx">
                                    <div class="shplogo"><img src="${data[i].logo}" alt="amazon" /></div>
                                    <p class="shpcont">${data[i].content}</p>
                                    <p class="pro-type">${data[i].product}</p>
                                    <p class="pro-type">${data[i].offers}</p>
                                </div>
                                <a href="" class="btn btn-go">GET NOW</a>
                            </div>`;
        prolistteamp = prolistteamp + prohtml;

    }
    console.log(prolistteamp);
    $(".shop-cont-sec").append(prolistteamp);

});

$(".drop").click(function () {
    $(this).parent().find(".drop-menu").slideToggle();
})
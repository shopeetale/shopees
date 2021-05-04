$(document).ready(function () {

    $(".sidenav").load("header.html");


    setTimeout(function () {
        $(".drop").click(function () {
            $(this).parent().find(".drop-menu").slideToggle();
        })
    }, 300)


})


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
                                <a href="" class="btn btn-go" target="_blank>GET NOW</a>
                            </div>`;
        prolistteamp = prolistteamp + prohtml;

    }
    $(".amazon").append(prolistteamp);

});

// namecheap

jQuery.getJSON("../jsons/namecheap.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="col-md-4">
                                <div class="shp-dlt-sec">
                                    <div class="pro-desc-bx">
                                        <div class="shplogo"><img src="${data[i].logo}" alt="amazon" /></div>
                                        <p class="shpcont">${data[i].content}</p>
                                        <p class="pro-type">${data[i].product}</p>
                                    </div>
                                    <a href="${data[i].url}" class="btn btn-go" target="_blank">GET NOW</a>
                                </div>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".namecheap").append(prolistteamp);

});

// trip.com

jQuery.getJSON("../jsons/trip.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="shp-dlt-sec">
                                <div class="pro-desc-bx">
                                    <div class="shplogo"><img src="${data[i].logo}" alt="amazon" /></div>
                                    <p class="shpcont">${data[i].content}</p>
                                    <p class="pro-type">${data[i].product}</p>
                                </div>
                                <a href="${data[i].url}" class="btn btn-go" target="_blank">Book Now</a>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".trip").append(prolistteamp);

});

// int acadamy

jQuery.getJSON("../jsons/intacadamy.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="shp-dlt-sec">
                                <div class="pro-desc-bx">
                                    <div class="shplogo"><img src="${data[i].img}" alt="amazon" /></div>
                                    <p class="shpcont">${data[i].content}</p>
                                    <p class="pro-type">${data[i].product}</p>
                                </div>
                                <a href="${data[i].url}" class="btn btn-go" target="_blank">GET NOW</a>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".intacad").append(prolistteamp);

});

// explore- europe

jQuery.getJSON("../jsons/explore_europ.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="col-md-4">
                                <div class="shp-dlt-sec">
                                    <div class="pro-desc-bx">
                                        <div class="shpimg"><img src="${data[i].img}" alt="amazon" /></div>
                                        <p class="shpcont">${data[i].content}</p>
                                        <p class="pro-type">${data[i].product}</p>
                                    </div>
                                    <a href="${data[i].url}" class="btn btn-go" target="_blank">Book Now</a>
                                </div>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".explore-europe").append(prolistteamp);

});

jQuery.getJSON("../jsons/games.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="col-md-4">
                                <div class="shp-dlt-sec">
                                    <div class="pro-desc-bx">
                                          <a href="${data[i].url}" class="" target="_blank">
                                          <div class="shpimg"><img src="${data[i].img}" alt="amazon" /></div>
                                          </a>
                                    </div>
                                </div>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".games").append(prolistteamp);

});


jQuery.getJSON("../jsons/newchic.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="shp-dlt-sec">
                                <div class="pro-desc-bx">
                                    <p class="shpcont">${data[i].content}</p>
                                    <p class="pro-type promo">${data[i].promo}</p>
                                    <p class="pro-type">${data[i].product}</p>
                                </div>
                                <a href="${data[i].url}" class="btn btn-go" target="_blank">GET NOW</a>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".newchic").append(prolistteamp);

});
jQuery.getJSON("../jsons/supscription.json", function (data) {
    console.log(data.length, "nameheco");
    var prolistteamp = "";

    for (var i = 0; i < data.length; i++) {
        var prohtml = `<div class="shp-dlt-sec">
                                <div class="pro-desc-bx">
                                    <p class="shpcont">${data[i].content}</p>
                                    <p class="pro-type promo">${data[i].promo}</p>
                                    <p class="pro-type">${data[i].product}</p>
                                </div>
                                <a href="${data[i].url}" class="btn btn-go" target="_blank">GET NOW</a>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".subsription").append(prolistteamp);

});

$(".toogle-nav").click(function () {
    $(".sidenav").css("left", "0");
    var html = '<span class="body-olay"></span>';
    $(".body-olay").show();
    $('body').append(html);
}).blur(function () {
    $(".sidenav").css("left", "-70%");
});


if ($(window).width() <= 660) {
    $(document).mouseup(function (e) {
        var container = $(".sidenav");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.css("left", "-70%");
            $(".body-olay").remove();
        }
    })
}





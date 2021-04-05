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
                                    <a href="${data[i].url}" class="btn btn-go" target="_blank>GET NOW</a>
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
                                <a href="${data[i].url}" class="btn btn-go" target="_blank">GET NOW</a>
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
                                    <div class="shplogo"><img src="${data[i].logo}" alt="amazon" /></div>
                                    <p class="shpcont">${data[i].content}</p>
                                    <p class="pro-type">${data[i].product}</p>
                                </div>
                                <a href="${data[i].url}" class="btn btn-go" target="_blank">GET NOW</a>
                            </div>`;

        prolistteamp = prolistteamp + prohtml;

    }
    $(".intacad").append(prolistteamp);

});

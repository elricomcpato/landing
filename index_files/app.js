var app = [];
jQuery(function ($) {
    if ($(".cempleos-btn-postular").length > 0) {
        var linkxxxx = $(".cempleos-btn-postular").find("a");
        var urlxxxxx = $(".cempleos-btn-postular").find("a").attr("href");
        var titlexxx = $(".elementor-heading-title.elementor-size-default").text();
        var textxxxx = titlexxx.replace(/ /g, "%20");
        var fulllink = urlxxxxx + "?puesto=" + textxxxx;
        setTimeout(function () {
        linkxxxx.attr('href', fulllink);
        }, 1000);
    }
});
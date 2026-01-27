$(function () {

    let lang = getLang() || "en";
    let base = "/" + lang + "/";

    // navbar links
    $("[data-link]").each(function () {
        let page = $(this).data("link");
        $(this).attr("href", base + page + ".html");
    });

});

function switchLang(lang) {
    setLang(lang);
    let page = window.location.pathname.split("/").pop();
    window.location.href = "/" + lang + "/" + page;
}
// ...................................
$(window).on("scroll", function () {
    $(".animate").each(function () {
        let top = $(this).offset().top;
        let scroll = $(window).scrollTop() + $(window).height();
        if (scroll > top + 100) {
            $(this).addClass("show");
        }
    });
});
//................................
$(document).ready(function () {
  const currentPage = window.location.pathname.split('/').pop();

  $('.navbar .nav-link').each(function () {
    const linkPage = $(this).attr('href');

    if (linkPage === currentPage) {
      $(this).addClass('active');
    }
  });
});

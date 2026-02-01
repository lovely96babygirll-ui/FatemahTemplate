function getBasePath() {
    let path = window.location.pathname;
    let segments = path.split("/").filter(Boolean);

    // If project is inside folder → /b/
    if (segments.length > 0) {
        return "/" + segments[0];
    }

    return "";
}
window.APP = {
    BASE_PATH: window.location.pathname.split('/')[1]
        ? '/' + window.location.pathname.split('/')[1]
        : ''
};
$("#year").text(new Date().getFullYear());

// function fixNavLinks() {
//     $(".nav-dynamic").each(function () {
//         let href = $(this).attr("href");

//         if (!href.startsWith("http")) {
//             $(this).attr("href", APP.BASE_PATH + href);
//         }
//     });
// }

// $(function () {

//     let lang = getLang() || "en";
//     let base = "/" + lang + "/";

//     // navbar links
//     $("[data-link]").each(function () {
//         let page = $(this).data("link");
//         $(this).attr("href", base + page + ".html");
//     });

// });

// function switchLang(lang) {
//     setLang(lang);
//     let page = window.location.pathname.split("/").pop();
//     window.location.href = "/" + lang + "/" + page;
// }
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
// $(document).ready(function () {
//   const currentPage = window.location.pathname.split('/').pop();

//   $('.navbar .nav-link').each(function () {
//     const linkPage = $(this).attr('href');

//     if (linkPage === currentPage) {
//       $(this).addClass('active');
//     }
//   });
// });
function setActiveNav() {
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "") || "index";

  $(".nav-link").removeClass("active");

  $(`.nav-link[data-page="${currentPage}"]`).addClass("active");
}
function setActiveNavLink() {
  let currentPage = window.location.pathname.split('/').pop();
console.log(currentPage);
  // handle root "/"
  if (currentPage === '' || currentPage === '/' || currentPage === '#') {
    currentPage = 'index.html';
  }

  currentPage = currentPage.replace('.html', '');
console.log("fff",currentPage);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');

    if (link.dataset.page === currentPage) {
       console.log("fbff",currentPage); 
      link.classList.add('active');
    }
  });
}


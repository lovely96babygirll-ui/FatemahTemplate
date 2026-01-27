$(document).ready(function () {
  const lang = getCookie('lang') || 'en';
  setLanguage(lang);
});

$(document).on('click', '.lang-btn', function () {
  const lang = $(this).data('lang');
  setLanguage(lang);
});

function setLanguage(lang) {
  setCookie('lang', lang, 365);
  loadLanguageFile(lang);
  updateDirection(lang);
}

function loadLanguageFile(lang) {
  $.getJSON('lang/' + lang + '.json', function (data) {

    $('[data-i18n]').each(function () {
      const key = $(this).data('i18n');
      if (data[key]) {
        $(this).text(data[key]);
      }
    });

  }).fail(function () {
    console.error('Language file not found');
  });
}


function updateDirection(lang) {
  if (lang === 'ar') {
    $('html').attr('dir', 'rtl').attr('lang', 'ar');
    $('body').addClass('rtl');
  } else {
    $('html').attr('dir', 'ltr').attr('lang', 'en');
    $('body').removeClass('rtl');
  }
}
// ...
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length);
    }
  }
  return "";
}


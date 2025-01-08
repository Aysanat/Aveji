$(document).ready(function() {

  let menu = document.querySelector('.js-menu');
  let menuBtn = document.querySelector('.js-burger');

  let toggleMenu = ('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  menuBtn.addEventListener('click', toggleMenu)

  document.addEventListener('click', function(e) {
    if (e.target === menu) {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
    } return
  });

  $('.js-click').on('click', function(event) {
    event.preventDefault();

    $('.js-click').removeClass('click');
    $(this).addClass('click');

  });

  $('.js-btn-scroll').on('click', function() {

    $('html, body').animate({
      scrollTop: $('#order').offset().top
    }, {
      duration: 370,
      easing: 'linear'
    });

    return;
  });
})

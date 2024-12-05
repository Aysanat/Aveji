$(document).ready(function() {

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

$(function () {

  $('.history__items').slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 900,
      settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
      }
    }]
  });

  $('.menu__btn , .menu__list-link').on('click', function (e) {
    e.preventDefault;
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.header-top__btn').toggleClass('header-top__btn--active');
    $('.menu__list').toggleClass('menu__btn--active');
    $('body').toggleClass('test')
  })
  $('.info__list-title').on('click', function (e) {
    e.preventDefault;
    $('.info__list-item').toggleClass('info__list-item--active');
    
  })
});
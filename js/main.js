$(function () {

  $('.history__items').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.menu__btn , .menu__list-link , .info__list-title ').on('click', function (e) {
    e.peventDefault;
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.info__list-item').toggleClass('info__list-item--active');
    $('.header-top__btn').toggleClass('header-top__btn--active');
    $('.menu__list').toggleClass('menu__btn--active');
  })
});
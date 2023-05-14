$(function () {
  
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 700);
  });

  $('.history__items').slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 747,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  $('.menu__btn ').on('click' , function (e) {
    e.preventDefault;
    $('body').toggleClass('test')
  });

  $('.menu__btn , .menu__list-link ').on('click', function (e) {
    e.preventDefault;
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.header-top__btn').toggleClass('header-top__btn--active');
    $('.menu__list').toggleClass('menu__btn--active');
  })


  $('.info__list-title-p').on('click', function (e) {
    e.preventDefault;
    $('.info__list-p').toggleClass('info__list-p--active');
  })
  $('.info__list-title-r').on('click', function (e) {
    e.preventDefault;
    $('.info__list-r').toggleClass('info__list-r--active');
  })
  $('.info__list-title-re').on('click', function (e) {
    e.preventDefault;
    $('.info__list-re').toggleClass('info__list-re--active');
  })
  $('.info__list-title-c').on('click', function (e) {
    e.preventDefault;
    $('.info__list-c').toggleClass('info__list-c--active');
  })
  $('.info__list-title-t').on('click', function (e) {
    e.preventDefault;
    $('.info__list-t').toggleClass('info__list-t--active');
  })


});
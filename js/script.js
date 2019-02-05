	
$('.specialist__slider').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 523,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.quote__specialist').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false,
      }
    },
        ]
});
   
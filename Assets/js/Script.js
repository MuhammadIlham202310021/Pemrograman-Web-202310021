$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  items: 5,
  nav: true,
  dots: false,
  loop: true,
  margin: 15,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1170: {
      items: 5,
    },
  },
});

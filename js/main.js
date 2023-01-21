(function ($) {
  "use strict";
  AOS.init();
  /* ..............................................
	Loader 
    ................................................. */

  $(window).on("load", function () {
    $(".preloader").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
    $("body").delay(450).css({ overflow: "visible" });
  });

  /* ..............................................
    Fixed Menu
    ................................................. */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".top-header").addClass("fixed-menu");
    } else {
      $(".top-header").removeClass("fixed-menu");
    }
  });

  /* ..............................................
    Gallery
    ................................................. */

  $("#slides").superslides({
    inherit_width_from: ".cover-slides",
    inherit_height_from: ".cover-slides",
    play: 5000,
    animation: "fade",
  });

  $(".cover-slides ul li").append("<div class='overlay-background'></div>");

  /* ..............................................
    Map Full
    ................................................. */

  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });
    $("#back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  /* ..............................................
    Special Menu
    ................................................. */

  var Container = $(".container");
  Container.imagesLoaded(function () {
    var portfolio = $(".special-menu");
    portfolio.on("click", "button", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    var $grid = $(".special-list").isotope({
      itemSelector: ".special-grid",
    });
  });

  /* ..............................................
    BaguetteBox
    ................................................. */

  baguetteBox.run(".tz-gallery", {
    animation: "fadeIn",
    noScrollbars: true,
  });

  /* ..............................................
  Carousel (Reivews)
    ............................................... */

  $(document).ready(function () {
    $(".reviews").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025, // Độ rộng thiết bị
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false, // Ẩn nút kéo
            infinite: false, // Kéo tới cuối không kéo dc nữa
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });

  /* ..............................................
    Datepicker
    ................................................. */

  $(".datepicker").pickadate();

  $(".time").pickatime();
})(jQuery);

/* ..............................................
    Datepicker
    ................................................. */

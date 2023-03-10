(function ($) {
  "use strict";
  AOS.init();
  /* ..............................................
    Reload page
    ................................................. */
  $(window).on("load", function (event) {
    $("#loader-wrapper").delay(700).fadeOut(300);
  });
  /* ..............................................
    Padding header when scroll
    ................................................. */
  $(document).ready(function () {
    // PC
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) $(".header").addClass("header-padding");
      else $(".header").removeClass("header-padding");
    });

    // Tablet and Moblie
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100)
        $(".header__sort-bar").addClass("header__sort-bar-top");
      else $(".header__sort-bar").removeClass("header__sort-bar-top");
    });
  });

  /* ..............................................
    Map Full
    ................................................. */

  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("#go-to-top").fadeIn();
      } else {
        $("#go-to-top").fadeOut();
      }
    });
    $("#go-to-top").click(function () {
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
    Gallery
    ................................................. */
  $(document).ready(function () {
    $("#slides").superslides({
      inherit_width_from: ".cover-slides",
      inherit_height_from: ".cover-slides",
      play: 5000,
      animation: "fade",
    });

    $(".cover-slides ul li").append("<div class='overlay-background'></div>");
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
          breakpoint: 1025, // ????? r???ng thi???t b???
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false, // ???n n??t k??o
            infinite: false, // K??o t???i cu???i kh??ng k??o dc n???a
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });
})(jQuery);
/* ..............................................
    Searching
  ............................................... */
function searching() {
  var check = document.getElementById("search");
  if (check.value != "") {
    swal({
      title: "Xin l???i !",
      text: "T??nh n??ng ch??a ???????c ph??t tri???n, vui l??ng th??? l???i sau !",
      icon: "info",
    });
  } else swal("X???y ra l???i !", "B???n ch??a nh???p th??ng tin", "error");
}

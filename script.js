$(document).ready(function () {
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-bar-top").addClass("nav-bar-top-slide-down");
    } else {
      $(".nav-bar-top").removeClass("nav-bar-top-slide-down");
    }
  });

  var slider = $(".banner-img-container");

  slider.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    dots: true,
    autoplay: true,
    loop: true,
    responsiveRefreshRate: 200,
    animateIn: "animate__fadeIn",
  });
});

$(document).ready(function () {
  var slide2 = $(".carasoul-cards");

  slide2.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    dots: true,
    autoplay: true,
    loop: true,
    responsiveRefreshRate: 200,
    animateIn: "animate__fadeIn",
  });
});

$(".banner-img-container").on("changed.owl.carousel", function (event) {
  var currentSlide = event.item.index;

  $(".slide-title").removeClass("slider-animation1");
  $(".item")
    .eq(currentSlide)
    .find(".slide-title")
    .addClass("slider-animation1");

  $(".slide-title2").removeClass("slider-animation2");
  $(".item")
    .eq(currentSlide)
    .find(".slide-title2")
    .addClass("slider-animation2");

  $(".slide-title3").removeClass("slider-animation3");
  $(".item")
    .eq(currentSlide)
    .find(".slide-title3")
    .addClass("slider-animation3");
});

function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}

function login() {
  document.querySelector(".main-wrapper-1").style.display = "block";
}


function login_close() {
  var mainWrapper = document.querySelector("#main-wrap");
  // mainWrapper.classList.remove("main-wrapper-1");
  mainWrapper.classList.add("main-wrapper-1_close");


  setTimeout(function () {
    mainWrapper.style.display = "none";
    // mainWrapper.classList.add("main-wrapper-1");
    mainWrapper.classList.remove("main-wrapper-1_close");
  }, 900);
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//start slider
var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  perPage: 3,
});
splide.mount();
//end slider
/*================================================================== */

//start social icon toggel
//start change img (social media icon) //

var facebook = document.getElementById("facebook");

facebook.addEventListener("mouseover", function setnewimg() {
  document.getElementById("facebook").src = "img/social/facebook.png";
});
facebook.addEventListener("mouseout", function set_defult_img() {
  document.getElementById("facebook").src = "img/social/w-b/facebook.png";
});
/*================================================================== */

//start change img (social media icon) //

// (twitter) //

var twitter = document.getElementById("twitter");

twitter.addEventListener("mouseover", function setnewimg() {
  document.getElementById("twitter").src = "img/social/twitter.png";
});

twitter.addEventListener("mouseout", function set_defult_img() {
  document.getElementById("twitter").src = "img/social/w-b/twitter.png";
});
// (insta) //

var insta = document.getElementById("insta");
insta.addEventListener("mouseover", function setnewimg() {
  document.getElementById("insta").src = "img/social/insta.png";
});
insta.addEventListener("mouseout", function set_defult_img() {
  document.getElementById("insta").src = "img/social/w-b/insta.png";
});

// (linkedin) //

var linkedin = document.getElementById("linkedin");

linkedin.addEventListener("mouseover", function setnewimg() {
  document.getElementById("linkedin").src = "img/social/Component 11.png";
});
linkedin.addEventListener("mouseout", function set_defult_img() {
  document.getElementById("linkedin").src = "img/social/w-b/Component 11.png";
});

//End social icon toggel
/*================================================================== */
//start loading page

$(document).ready(function () {
  $("#loading").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});

//End loading page
/*================================================================== */
//start change scrolltop

let profileoffset = $("#Home").offset().top;

$(window).scroll(function () {
  let scrolltop = $(window).scrollTop();

  if (scrolltop > 100) {
    $(".navbar").css("backgroundColor", "#fff");
    $(".nav-item .nav-link ").css("color", "#3a9efd");
    $(".navbar").css({ boxShadow: " 0 4px 20px 0 rgba(3, 3, 3, 0.5)" });
  } else {
    $(".nav-item .nav-link ").css("color", "#fff");
    $(".navbar").css("backgroundColor", "transparent");
    $(".navbar").css({ boxShadow: " none" });
  }
});
/*================================================================== */

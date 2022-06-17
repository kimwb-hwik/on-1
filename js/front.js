function Headerfixed() {
  var menu = $("header").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > menu.top) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
}

//mySidepanel 사이드메뉴
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

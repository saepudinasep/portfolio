// event pada saat link diklik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  //  tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // console.log(elemenTujuan.offset().top);

  //   pindahkan scroll
  // console.log($("body").scrollTop(elemenTujuan.offset().top));
  $("html , body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// parallax
// about

$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // console.log(wScroll);

  // jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  // portfolio
  if (wScroll > $(".portfolio").offset().top - 250) {
    // console.log("Ok");

    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        // console.log("Ok");
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 500 * (i + 1));
    });
  }
});

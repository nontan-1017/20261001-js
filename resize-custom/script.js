$(function () {

  // スクロールしたらヘッダーを小さくする
  $(window).on("scroll", function () {

    if ($(window).scrollTop() > 80) {

      $("header").addClass("small");

    } else {

      $("header").removeClass("small");

    }

  });


  // メニューをクリックしたら
  // なめらかに移動
  $("nav a").on("click", function (e) {

    const target = $(this).attr("href");

    if (target.startsWith("#")) {

      e.preventDefault();

      const position =
        $(target).offset().top - 70;

      $("html, body").animate(
        {
          scrollTop: position
        },
        600
      );

    }

  });

});

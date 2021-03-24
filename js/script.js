var widthW = $(window).width();

if (widthW > 767) {
  $(".menu-li").hover(
    function () {
      $(this).children(".menu-list").show();
    },
    function () {
      $(this).children(".menu-list").hide();
    }
  );
} else if (widthW <= 767) {
  $(".logo").hide();
  $(".menuWrap").hide();
  $(".shortcut").css("display", "flex");
  $("header").css("background-color", "transparent");
  $(".menu-li").click(function (e) {
    e.preventDefault();
    $(this).children(".menu-list").slideToggle();
  });
}

$(".hamBtn").click(function (e) {
  e.preventDefault();
  $(".menuWrap").addClass("active").toggle();
});

$(".close").click(function (e) {
  e.preventDefault();
  $(".menuWrap").hide(300);
});

$(window).scroll(function () {
  //현재 스크롤 양
  var $sct = $(this).scrollTop();
 
  //일정 스크롤 이상 움직이면 헤더 숏컷만 보이기
  if (widthW > 767) {
    if ($sct > 100 ) {
      // console.log($sct);
      $(".shortcut").css("display", "flex");
      $(".menuWrap").hide();
      $(".logo").hide();
      $("header").css("background-color", "transparent");
    } else {
      $(".shortcut").hide();
      $(".menuWrap").show();
      $(".logo").show();
      $("header").css("background-color", "#fff");
    }
  }
  $("section").each(function (i) {
    var tg = $(this); //window와 헷갈리지 않도록
    if (tg.offset().top - 10 < $sct) {
      //해당 컨텐츠의 화면 상단에서의 거리 < 현재 스크롤
      $sidemenu.removeClass("active");
      $sidemenu.eq(i).addClass("active");
    }
  });
});

$("section").each(function () {
  // 한번 스크롤 하면 다음 섹션으로 이동
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    if (widthW > 767) {
      var moveTop;
      var mouseEvent = e.originalEvent;
      var delta;
      if (mouseEvent.detail) {
        //파이어폭스
        delta = mouseEvent.detail * -40;
      } else {
        delta = mouseEvent.wheelDelta;
      }
      // console.log('delta:' + delta);

      if (delta < 0) {
        if ($(this).next().length) {
          moveTop = $(this).next().offset().top;
        }
      } else {
        if ($(this).prev().length) {
          moveTop = $(this).prev().offset().top;
        }
      }

      $("html,body").stop().animate(
        {
          scrollTop: moveTop,
        },
        300
      );
    }
  });
});

//swiper
const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // effect:'flip',
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

//popular Wrap 영역 설정
function pMarginTop() {
  var mTop = ($(".popular").height() - $(".swiper2").height()) / 2;
  // console.log(mTop);
  $(".swiper2").css("margin-top", mTop);
}
pMarginTop();

//customer wrap 배너 설정
setInterval(function () {
  var activeIndex = $(".swiper-slide-active").index();
  if (activeIndex == 4) {
    $(".cs-exp-list>li")
      .eq(0)
      .addClass("active")
      .siblings()
      .removeClass("active");
  } else {
    $(".cs-exp-list>li")
      .eq(activeIndex - 1)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
}, 100);

var $sidemenu = $("aside li");

$sidemenu.click(function (e) {
  e.preventDefault();
  var idx = $(this).index();
  // console.log(idx);
  var tt = $("section").eq(idx).offset().top;
  // console.log(tt);
  if (idx == 0) {
    tt = 0;
  }

  $("html,body").stop().animate(
    {
      scrollTop: tt,
    },
    500
  );
});

$(window).resize(function () {
  // pMarginTop();
  // widthW = $(window).width();
  // $('.menuWrap').hide();
  location.reload(true);
});

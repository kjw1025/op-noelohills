// 멀티미디이어 요소 로딩전 실행
$(document).ready();
// 멀티미디어 요소 로딩완료 후 실행
window.onload = function () {

  //상단 배너 슬라이드
  new Swiper('.sw-banner', {
    loop: true,
    // fade 효과
    effect: "fade",
    //pagination (click 가능)
    pagination: {
      el: ".sw-banner-pg",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // touchmove 제거
    allowTouchMove: false,
  });

  //visual slide
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    //pagination 
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
  });

};
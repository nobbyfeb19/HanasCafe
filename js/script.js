$(function () {
  //ハンバーガーメニュー（SP）
  $btnMenu = $("#js-btn-menu");
  $gnav = $(".gnav");

  $btnMenu.on("click", function () {
    $btnMenu.toggleClass("active");
    $gnav.toggleClass("show");
    $gnav.animate({ width: "toggle" }, 200);
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest($gnav).length &&
      !$(e.target).closest($btnMenu).length
    ) {
      if ($gnav.hasClass("show")) {
        $gnav.removeClass("show");
        $btnMenu.toggleClass("active");
        $gnav.animate({ width: "toggle" }, 200);
      }
    }
  });
});
//もっと見るボタン
const btn = document.querySelector('.btn-toggle');
  const moreText = document.querySelector('.more-text');

  btn.addEventListener('click', function() {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      btn.textContent = '閉じる';
    } else {
      moreText.style.display = 'none';
      btn.textContent = '詳しく見る';
    }
  });
//スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
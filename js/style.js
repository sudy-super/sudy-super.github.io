// js/style.js
// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// GSAPアニメーション
gsap.registerPlugin(ScrollTrigger);

// セクションのフェードインアニメーション
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // セクションの上端がビューポートの80%に達したらアニメーション開始
      toggleActions: "play none none none" // アニメーションは一度だけ再生
    }
  });
});

// サイドバーリンクのアクティブクラス (オプション)
// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     navLinks.forEach(navLink => navLink.classList.remove('active'));
//     this.classList.add('active');
//   });
// });
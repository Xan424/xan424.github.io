// Reveal on scroll (single observer, supports .hidden and .hidden2)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    const showClass = e.target.dataset.showClass || (e.target.classList.contains('hidden2') ? 'show2' : 'show');
    if(e.isIntersecting){
      e.target.classList.add(showClass);
    } else {
      e.target.classList.remove(showClass);
    }
  });
},{ rootMargin: "0px 0px -10% 0px" });

document.querySelectorAll('.hidden, .hidden2').forEach(el=> io.observe(el));

// Mobile menu toggle (accessible)
const button = document.getElementById("menu-button");
const overlay = document.getElementById("overlaymenu");

if (button && overlay){
  button.addEventListener("click", () => {
    const open = overlay.classList.toggle("is-open");
    button.classList.toggle("open", open);
    button.setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && overlay.classList.contains("is-open")){
      button.click();
    }
  });
}

// Remove unused Swiper init if markup is missing
// (left here commented for future use)
// if (document.querySelector('.mySwiper')) {
//   const swiper = new Swiper('.mySwiper', {
//     loop: true,
//     autoplay: { delay: 4000 },
//     pagination: { el: '.swiper-pagination' },
//   });
// }


  const swiper = new Swiper('.mySwiper', {
    // Velocidad y “feeling”
    speed: 500,
    loop: false, // pon true si quieres loop infinito
    grabCursor: true,

    // Slides visibles y separación
    slidesPerView: 1.05,
    spaceBetween: 16,

    breakpoints: {
      640: { slidesPerView: 1.15, spaceBetween: 20 },
      768: { slidesPerView: 1.25, spaceBetween: 24 },
      1024:{ slidesPerView: 1.3,  spaceBetween: 24 }
    },

    // Controles
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction' // 1/3, 2/3, 3/3
    },

    // Accesibilidad
    a11y: {
      enabled: true,
      prevSlideMessage: 'Slide anterior',
      nextSlideMessage: 'Slide siguiente'
    }
  });

// Hero background rotator — crossfade version
(function(){
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    const container = heroSection.querySelector('.main-page-container');
    if (!container) return;

    const backgrounds = [
        "assets/img/product_mad.png",
        "assets/img/product_met.png",
        "assets/img/product_apl.png"
    ];

    const transitionDuration = 1000; // in ms — keep in sync with CSS transition
    const intervalMs = 6000;

    // create two layered divs for crossfading
    const layerA = document.createElement('div');
    const layerB = document.createElement('div');
    layerA.className = 'hero-bg-layer';
    layerB.className = 'hero-bg-layer';
    // prepend so layers sit behind content
    container.prepend(layerB);
    container.prepend(layerA);

    let current = 0;
    let visible = layerA;
    let hidden = layerB;

    visible.style.backgroundImage = `url("${backgrounds[current]}")`;
    visible.style.opacity = '1';
    hidden.style.opacity = '0';

    function showNext(){
        const next = (current + 1) % backgrounds.length;
        hidden.style.backgroundImage = `url("${backgrounds[next]}")`;
        // force style/layout flush to ensure transition triggers
        void hidden.offsetWidth;
        hidden.style.opacity = '1';
        visible.style.opacity = '0';

        // after transition, swap references and update index
        setTimeout(()=> {
            current = next;
            const tmp = visible;
            visible = hidden;
            hidden = tmp;
        }, transitionDuration + 50);
    }

    // start rotation
    const rotator = setInterval(showNext, intervalMs);

    // optional: expose stop/start if needed
    // container.dataset.bgRotator = rotator;
})();


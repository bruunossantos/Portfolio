gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

let mm = gsap.matchMedia();

mm.add("(min-width: 601px)", () => {
  ScrollTrigger.create({
    trigger: ".about-me",
    start: "top -50px",
    end: "bottom 600px",
    pin: ".img-about",
    pinSpacing: false,
    markers: false,
  });
});

// Carrossel do portfólio

let wrapper = document.querySelector(".certified-wrapper");

gsap.to(wrapper, {
  x: () =>
    -(wrapper.scrollWidth - window.innerWidth + window.innerWidth * 0.08), 
  ease: "none",
  scrollTrigger: {
    trigger: ".certificados",
    start: "top -25%", // Começa quando o topo da seção chega perto do topo da tela
    end: () => `+=${wrapper.scrollWidth * 0.6}`, // Duração do scroll baseada no tamanho dos cards
    pin: true, // "Trava" a seção na tela
    scrub: 1, // Suavidade no movimento
    invalidateOnRefresh: true, // Recalcula se redimensionar a tela
  },
});

// Parte de experiências

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 100,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Animação da linha crescendo
gsap.to(".timeline-progress", {
  height: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".timeline-container",
    start: "top center",
    end: "bottom center",
    scrub: true, 
  },
});

// Animação dos itens aparecendo
const items = document.querySelectorAll(".timeline-item");

items.forEach((item) => {
  const card = item.querySelector(".timeline-card");
  const dot = item.querySelector(".timeline-dot");

  gsap.fromTo(
    card,
    { opacity: 0, x: item.classList.contains("right") ? 50 : -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
      },
    },
  );

  // Efeito de brilho no dot quando ativo
  gsap.to(dot, {
    backgroundColor: "var(--primary-color)",
    scrollTrigger: {
      trigger: item,
      start: "top center",
      toggleActions: "play reverse play reverse",
    },
  });
});



// PRELOADER
const tl = gsap.timeline({
  onComplete() {
    gsap.to("#preloader", {
      opacity: 0,
      onComplete(){
        gsap.to("#preloader",{
          display: "none",
        })
      }
    });
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  fill: "#2ccf7f",
  duration: 0.5,
  strokeDashoffset: 0,
});

//регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//условия для мобильных устройств
if (ScrollTrigger.isTouch !== 1) {
  //определяем область Scroll
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  //эл. пропадает и появляется
  gsap.fromTo(
    ".hero",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "center",
        end: "900",
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -500, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          //возвращения значения
          scrub: true,
        },
      }
    );
  });

  let itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: true,
        },
      }
    );
  });
}

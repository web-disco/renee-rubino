import Swiper from "swiper";
import { EffectFade, Autoplay } from "swiper/modules";

Swiper.use([EffectFade, Autoplay]);

const homeSlider = () => {
  const slides = document.querySelectorAll(".swiper.is-home .swiper-slide");

  new Swiper(".swiper.is-home", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    if (img) {
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        if (aspectRatio > 1) {
          img.style.maxWidth = "100vh";
        } else if (aspectRatio < 1) {
          img.style.maxWidth = "50vh";
        } else {
          img.style.maxWidth = "40vh";
        }
      };

      if (img.complete) {
        img.onload();
      }
    }
  });
};

export { homeSlider };

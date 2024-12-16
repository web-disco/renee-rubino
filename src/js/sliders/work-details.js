import Swiper from "swiper";
import gsap from "gsap";
import { EffectFade } from "swiper/modules";

Swiper.use([EffectFade]);

const workDetailsSlider = () => {
  const gridItems = document.querySelectorAll(".media-grid-item");

  const lightbox = document.querySelector(".work-lightbox");

  let workDetailsSlider;

  const slides = document.querySelectorAll(
    ".swiper.is-work-details .swiper-slide"
  );

  const lightboxNext = document.querySelector(".work-lightbox-next");
  const lightboxPrev = document.querySelector(".work-lightbox-prev");

  const pagination = document.querySelector(
    ".work-lightbox-footer-text.is-pagination"
  );

  if (!workDetailsSlider) {
    workDetailsSlider = new Swiper(".swiper.is-work-details", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 25,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });

    const closeLightboxBtn = document.querySelector("[work-lightbox-close]");

    if (!closeLightboxBtn) return;

    closeLightboxBtn.addEventListener("click", () => {
      gsap.to(lightbox, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "expo.inOut",
      });
    });

    const updatePagination = () => {
      const currentSlide = workDetailsSlider.realIndex + 1;
      const totalSlides = slides.length;
      pagination.innerHTML = `${currentSlide}/${totalSlides}`;
    };

    updatePagination();
    workDetailsSlider.on("slideChangeTransitionEnd", updatePagination);

    lightboxNext.addEventListener("click", () => {
      workDetailsSlider.slideNext();
    });

    lightboxPrev.addEventListener("click", () => {
      workDetailsSlider.slidePrev();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        workDetailsSlider.slideNext();
      } else if (e.key === "ArrowLeft") {
        workDetailsSlider.slidePrev();
      }
    });
  }

  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    if (img) {
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        if (aspectRatio > 1) {
          img.style.maxWidth = "60vh";
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

  gridItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      workDetailsSlider.slideTo(index);

      gsap.to(lightbox, {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.25,
        ease: "expo.inOut",
      });
    });
  });
};

export { workDetailsSlider };

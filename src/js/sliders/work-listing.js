import Swiper from "swiper";
import { SLIDER_LENGTH_REQUIREMENT, WorkSlug } from "../utils/constants";
import gsap from "gsap";

const workListingSliders = () => {
  const tl = gsap.timeline();

  const items = document.querySelectorAll(".work-listing-item");
  const titles = document.querySelectorAll(".work-listing-item-title");
  const images = document.querySelectorAll(".work-listing-item img");
  const sliderButtons = document.querySelectorAll(".slider-btns");

  if (titles.length) {
    tl.to(titles, { opacity: 1, stagger: 0.13 });
  }

  if (images.length) {
    tl.fromTo(
      images,
      { opacity: 0, yPercent: 5 },
      { opacity: 1, yPercent: 0, stagger: 0.13 },
      "<"
    );
  }
  if (sliderButtons.length) {
    tl.to(sliderButtons, { opacity: 1, stagger: 0.13 });
  }

  items.forEach((item) => {
    const slider = item.querySelector(".swiper");
    const sliderPrev = item.querySelector("[swiper-prev]");
    const sliderNext = item.querySelector("[swiper-next]");
    const sliderBtns = item.querySelectorAll(".slider-btns");

    const images = slider.querySelectorAll(".swiper-slide img");

    if (!slider || !sliderBtns) return; // Ensure the slider exists

    const slug = item.getAttribute("slug");

    if (!slug) return; // Ensure slug exists

    // Determine the current page for slug usage
    const getPageSlug = () => {
      const url = window.location.href;
      const page = url.substring(url.lastIndexOf("/") + 1) || "work";
      return page === "press" ? "press" : WorkSlug;
    };

    const currentPageSlug = getPageSlug();

    // Wrap each image with an anchor
    images.forEach((slide) => {
      const anchor = document.createElement("a");
      anchor.href = `/${currentPageSlug}/${slug}`;
      slide.parentNode.insertBefore(anchor, slide);
      anchor.appendChild(slide);
    });

    sliderBtns.forEach((btn) => {
      if (images.length < SLIDER_LENGTH_REQUIREMENT) {
        btn.style.display = "none";
      }
    });

    // Initialize Swiper
    const workListingSwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: sliderNext,
        prevEl: sliderPrev,
      },
    });

    // Attach navigation click handlers if elements exist
    if (sliderPrev) {
      sliderPrev.addEventListener("click", () => {
        workListingSwiper.slidePrev();
      });
    }

    if (sliderNext) {
      sliderNext.addEventListener("click", () => {
        workListingSwiper.slideNext();
      });
    }
  });
};

export { workListingSliders };

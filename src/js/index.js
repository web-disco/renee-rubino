import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { copyrightYear } from "./utils/copyright-year";
import { infoDrawerAnimation } from "./animations/info-drawer";
import { workListingSliders } from "./sliders/work-listing";
import { workDetailsToggle } from "./animations/work-details-view";
import { workDetailsSlider } from "./sliders/work-details";
import { mobileMenuAnimation } from "./animations/mobile-menu";
import { homeSlider } from "./sliders/home";
import { homeSliderReveal } from "./animations/home-slider-reveal";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // utils
  copyrightYear();

  // animations
  homeSliderReveal();
  mobileMenuAnimation();
  infoDrawerAnimation();
  workDetailsToggle();

  // sliders
  homeSlider();
  workListingSliders();
  workDetailsSlider();
});

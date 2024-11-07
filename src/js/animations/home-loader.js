import gsap from "gsap";

import { Animations } from "../utils/constants";

export const homeLoaderAnimation = () => {
  const loaderTopHalf = document.querySelector(".home-loader_half.is-top");
  const loaderBottomHalf = document.querySelector(
    ".home-loader_half.is-bottom"
  );
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector(".footer");

  const mainImage = document.querySelector(".home-hero_main-img");

  if (!loaderTopHalf && !loaderBottomHalf && !mainImage) return;

  const tl = gsap.timeline();

  tl.set([loaderTopHalf, loaderBottomHalf], { opacity: 1, height: "50%" });

  tl.fromTo(
    loaderTopHalf,
    {
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    {
      delay: 0.25,
      ease: Animations.Ease,
      duration: 1.5,
      "clip-path": "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
    }
  );

  tl.fromTo(
    loaderBottomHalf,
    {
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    {
      ease: Animations.Ease,
      duration: 1.5,
      "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    },
    "<"
  );

  tl.to(
    mainImage,
    {
      duration: 1,
      scale: 1.1,
    },
    "<0.45"
  );

  tl.to(
    [navbar, footer],
    {
      duration: 0.5,
      opacity: 1,
      ease: Animations.Ease,
    },
    "<0.5"
  );
};

import { gsap } from "gsap";
import { Animations } from "../utils/constants";

export const infoDrawerAnimation = () => {
  let isDrawerOpen = false;

  const infoDrawer = document.querySelector(".info-drawer");
  const infoDrawerSlide = document.querySelector(".info-drawer-slide");
  const infoDrawerToggles = document.querySelectorAll("[info-btn]");

  const tl = gsap.timeline();

  infoDrawerToggles.forEach((infoDrawerToggle) => {
    infoDrawerToggle.addEventListener("click", () => {
      isDrawerOpen = !isDrawerOpen;

      if (isDrawerOpen) {
        tl.set(infoDrawer, { display: "block", duration: 0 });
        tl.to(infoDrawer, { autoAlpha: 1, duration: 0.25 }, "<");
        tl.to(
          infoDrawerSlide,
          {
            right: 0,
            duration: 0.5,
            ease: Animations.Ease,
          },
          "<"
        );
      } else {
        tl.to(infoDrawerSlide, {
          right: "-100%",
          duration: 0.65,
          ease: Animations.Ease,
        });
        tl.to(infoDrawer, { autoAlpha: 0, duration: 0.25 });
        tl.set(infoDrawer, { display: "none", duration: 0 });
      }
    });
  });
};

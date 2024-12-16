import { gsap } from "gsap";
import { Animations } from "../utils/constants";
import { isMobileMenuOpen, closeMenu } from "./mobile-menu";

let isInfoDrawerOpen = false;

const openInfoDrawer = () => {
  const infoDrawer = document.querySelector(".info-drawer");
  const infoDrawerSlide = document.querySelector(".info-drawer-slide");

  const tl = gsap.timeline();

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
};

const closeInfoDrawer = () => {
  const infoDrawer = document.querySelector(".info-drawer");
  const infoDrawerSlide = document.querySelector(".info-drawer-slide");

  const tl = gsap.timeline();

  tl.to(infoDrawerSlide, {
    right: "-100%",
    duration: 0.65,
    ease: Animations.Ease,
  });

  tl.to(infoDrawer, { autoAlpha: 0, duration: 0.25 }, "<0.5");

  tl.set(infoDrawer, { display: "none", duration: 0 });
};

export const infoDrawerAnimation = () => {
  const infoDrawerToggles = document.querySelectorAll("[info-btn]");

  infoDrawerToggles.forEach((infoDrawerToggle) => {
    infoDrawerToggle.addEventListener("click", () => {
      if (!isInfoDrawerOpen) {
        // Close the mobile menu if open
        if (isMobileMenuOpen) {
          closeMenu();
        }

        openInfoDrawer();
        isInfoDrawerOpen = true; // Set state to true after opening
      } else {
        closeInfoDrawer();
        isInfoDrawerOpen = false; // Set state to false after closing
      }
    });
  });
};

export { isInfoDrawerOpen, openInfoDrawer, closeInfoDrawer };

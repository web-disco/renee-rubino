import gsap from "gsap";

let isMobileMenuOpen = false;

const openMenu = () => {
  const tl = gsap.timeline();

  tl.to(".mobile-menu", {
    autoAlpha: 1,
    duration: 0.25,
  });

  tl.fromTo(
    ".mobile-menu .menu-link",
    {
      yPercent: 50,
      autoAlpha: 0,
    },
    {
      yPercent: 0,
      autoAlpha: 1,
      stagger: 0.13,
      ease: "power1.inOut",
    }
  );
};

const closeMenu = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".mobile-menu .menu-link",
    {
      yPercent: 0,
      autoAlpha: 1,
    },
    {
      yPercent: 50,
      autoAlpha: 0,
      stagger: 0.13,
      ease: "power1.inOut",
    }
  );

  tl.to(".mobile-menu", {
    autoAlpha: 0,
    duration: 0.25,
    onComplete: () => {
      isMobileMenuOpen = false; // Set state to false after closing
    },
  });
};

const mobileMenuAnimation = () => {
  const mobileMenuBtns = document.querySelectorAll("[menu-btn]");

  mobileMenuBtns.forEach((mobileMenuBtn) => {
    mobileMenuBtn.addEventListener("click", () => {
      if (isMobileMenuOpen) {
        closeMenu();
      } else {
        openMenu();
        isMobileMenuOpen = true; // Set state to true after opening
      }
    });
  });
};

export { mobileMenuAnimation, isMobileMenuOpen, closeMenu, openMenu };

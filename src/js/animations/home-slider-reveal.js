import gsap from "gsap";

const homeSliderReveal = () => {
  const slider = document.querySelector(".section_home-hero");

  if (!slider) return;

  gsap.to(slider, {
    opacity: 1,
    delay: 0.25,
  });
};

export { homeSliderReveal };

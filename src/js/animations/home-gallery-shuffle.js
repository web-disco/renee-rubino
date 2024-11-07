import { HOME_SHUFFLE_DELAY, HOME_SHUFFLE_INTERVAL } from "../utils/constants";

export const homeGalleryShuffle = () => {
  const imageUrls = [];
  const mainImage = document.querySelector(".home-hero_main-img");
  const images = document.querySelectorAll(".home-hero_gallery_item img");

  const currentImageUrl = mainImage?.src;

  if (!mainImage || !images || !currentImageUrl) return;

  imageUrls.push(currentImageUrl);

  images.forEach((image) => {
    imageUrls.push(image.src);
  });

  let counter = 0;
  let interval;

  // Function to start the shuffle
  const startShuffle = () => {
    interval = setInterval(() => {
      mainImage.src = imageUrls[counter];
      counter = (counter + 1) % imageUrls.length;
    }, HOME_SHUFFLE_INTERVAL);
  };

  // Function to stop the shuffle
  const stopShuffle = () => {
    clearInterval(interval);
  };

  // Delay the initial shuffle by 1.5 seconds on first load
  setTimeout(startShuffle, HOME_SHUFFLE_DELAY);

  // Add hover event listeners to stop and start the shuffle
  mainImage.addEventListener("mouseenter", stopShuffle);
  mainImage.addEventListener("mouseleave", startShuffle);
};

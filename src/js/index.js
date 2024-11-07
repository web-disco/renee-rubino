import { copyrightYear } from "./utils/copyright-year";
import { homeGalleryShuffle } from "./animations/home-gallery-shuffle";
import { homeLoaderAnimation } from "./animations/home-loader";
import { infoDrawerAnimation } from "./animations/info-drawer";

document.addEventListener("DOMContentLoaded", () => {
  // copyright year
  copyrightYear();

  // home gallery shuffler
  homeGalleryShuffle();

  // home loader animation
  homeLoaderAnimation();

  // info drawer animation
  infoDrawerAnimation();
});

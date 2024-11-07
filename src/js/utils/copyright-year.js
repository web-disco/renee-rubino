export const copyrightYear = () => {
  const copyrightYear = document.querySelector(".copyright-year");

  const currentYear = new Date().getFullYear();

  copyrightYear.textContent = currentYear;
};

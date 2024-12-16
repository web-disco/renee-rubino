import gsap from "gsap";

const workDetailsToggle = () => {
  const listToggle = document.querySelector('[work-view="list"]');
  const gridToggle = document.querySelector('[work-view="grid"]');

  const listView = document.querySelector(".media-list-view");
  const gridView = document.querySelector(".media-grid-view");

  const titles = document.querySelectorAll(".work-details-title");
  const content = document.querySelectorAll(".work-copy");

  const listImages = document.querySelectorAll(".media-list-item");

  const media = document.querySelector(".work-details-media");

  if (
    !listToggle ||
    !gridToggle ||
    !listView ||
    !gridView ||
    !titles ||
    !content ||
    !listImages
  )
    return;

  const tl = gsap.timeline();

  tl.fromTo(
    titles,
    {
      opacity: 0,
      yPercent: 100,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.5,
      stagger: 0.1,
    }
  )
    .from(
      content,
      {
        opacity: 0,
        yPercent: 25,
        duration: 0.5,
      },
      "-=0.25"
    )
    .fromTo(
      media,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );

  gridToggle.addEventListener("click", () => {
    const gridTimeline = gsap.timeline();

    gridToggle.classList.add("is-active");
    listToggle.classList.remove("is-active");

    // Hide the list view and show the grid view
    gridTimeline
      .to(listView, {
        duration: 0.5,
        autoAlpha: 0,
        ease: "expo.inOut",
        onComplete: () => (listView.style.display = "none"), // Ensure it's hidden after animation
      })
      .set(gridView, { display: "block" }) // Set display to block before showing
      .to(gridView, {
        duration: 0.5,
        autoAlpha: 1,
        ease: "expo.inOut",
      });
  });

  listToggle.addEventListener("click", () => {
    const listTimeline = gsap.timeline();

    listToggle.classList.add("is-active");
    gridToggle.classList.remove("is-active");

    // Hide the grid view and show the list view
    listTimeline
      .to(gridView, {
        duration: 0.5,
        autoAlpha: 0,
        ease: "expo.inOut",
        onComplete: () => (gridView.style.display = "none"), // Ensure it's hidden after animation
      })
      .set(listView, { display: "block" }) // Set display to block before showing
      .to(listView, {
        duration: 0.5,
        autoAlpha: 1,
        ease: "expo.inOut",
      });
  });
};

export { workDetailsToggle };

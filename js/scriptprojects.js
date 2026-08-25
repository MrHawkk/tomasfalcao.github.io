document.addEventListener("DOMContentLoaded", () => {


  /* =================================
     MENU
  ================================= */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const topbar =
    document.querySelector(".topbar");

  const menuOverlay =
    document.querySelector(".menu-overlay");

  const menuLinks =
    document.querySelectorAll(".menu-nav a");


  function updateResponsiveMenu() {

    if (!topbar) {
      return;
    }

    topbar.classList.toggle(
      "is-scroll-centered",
      window.innerWidth <= 900 &&
      window.scrollY > 60
    );

  }


  window.addEventListener(
    "scroll",
    updateResponsiveMenu,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    updateResponsiveMenu
  );

  updateResponsiveMenu();


  let menuOpen = false;


  function openMenu() {

    if (menuOpen) {
      return;
    }

    menuOpen = true;

    if (menuToggle) {

      menuToggle.classList.add(
        "is-open"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "true"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Fechar menu"
      );

    }

    if (menuOverlay) {

      menuOverlay.classList.add(
        "open"
      );

    }

    document.body.classList.add(
      "menu-is-open"
    );

  }


  function closeMenu() {

    if (!menuOpen) {
      return;
    }

    menuOpen = false;

    if (menuToggle) {

      menuToggle.classList.remove(
        "is-open"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Abrir menu"
      );

    }

    if (menuOverlay) {

      menuOverlay.classList.remove(
        "open"
      );

    }

    document.body.classList.remove(
      "menu-is-open"
    );

  }


  function toggleMenu() {

    if (menuOpen) {

      closeMenu();

    } else {

      openMenu();

    }

  }


  if (
    menuToggle &&
    menuOverlay
  ) {

    menuToggle.addEventListener(
      "click",
      toggleMenu
    );


    menuLinks.forEach(
      (link) => {

        link.addEventListener(
          "click",
          closeMenu
        );

      }
    );


    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          menuOpen
        ) {

          closeMenu();

        }

      }
    );


    menuOverlay.addEventListener(
      "click",
      (event) => {

        if (
          event.target === menuOverlay
        ) {

          closeMenu();

        }

      }
    );

  }


  /* =================================
     MENU LINE
  ================================= */

  const menuLine =
    document.querySelector(
      ".js-menu-line"
    );


  if (menuLine) {

    menuLine.style.transformOrigin =
      "center center";

    menuLine.style.transform =
      "scaleX(0)";


    setTimeout(() => {

      menuLine.style.transition =
        "transform 1.5s cubic-bezier(0.2, 0.7, 0.2, 1)";

      menuLine.style.transform =
        "scaleX(1)";

    }, 300);

  }


  /* =================================
     PROJECT HEADER ANIMATION
  ================================= */

  const projectHeader =
    document.querySelector(
      ".project-page-header"
    );


  if (projectHeader) {

    setTimeout(() => {

      projectHeader.classList.add(
        "is-visible"
      );

    }, 150);

  }


  /* =================================
     PROJECT BLOCKS
  ================================= */

  const projectBlocks =
    document.querySelectorAll(
      ".project-block"
    );


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );


              const textElements =
                entry.target.querySelectorAll(
                  ".project-copy > .project-number, " +
                  ".project-copy > .project-explanation-title, " +
                  ".project-copy > .project-explanation-description"
                );


              textElements.forEach(
                (element, index) => {

                  setTimeout(
                    () => {

                      element.classList.add(
                        "is-visible"
                      );

                    },

                    index * 80

                  );

                }

              );

            }

          }
        );

      },

      {

        threshold: 0.15,

        rootMargin:
          "0px 0px -80px 0px"

      }

    );


  projectBlocks.forEach(
    (block) => {

      observer.observe(block);

    }
  );


  /* =================================
     PROJECT MEDIA ANIMATION
  ================================= */

  const projectMedia =
  document.querySelectorAll(
    ".project-explanation-image img"
  );


  const imageObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              const media =
                entry.target;


              const index =
                Array.from(
                  projectMedia
                ).indexOf(media);


              setTimeout(
                () => {

                  media.classList.add(
                    "is-visible"
                  );

                },

                index % 2 === 0
                  ? 100
                  : 220

              );

            }

          }
        );

      },

      {

        threshold: 0.2

      }

    );


  projectMedia.forEach(
    (media) => {

      imageObserver.observe(media);

    }
  );


  /* =================================
     REDUCE MOTION
  ================================= */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );


  if (
    reducedMotion.matches
  ) {

    projectBlocks.forEach(
      (block) => {

        block.querySelectorAll(
          ".project-copy > .project-number, " +
          ".project-copy > .project-explanation-title, " +
          ".project-copy > .project-explanation-description"
        ).forEach(
          (element) => {

            element.classList.add(
              "is-visible"
            );

          }
        );

      }
    );


    projectMedia.forEach(
      (media) => {

        media.classList.add(
          "is-visible"
        );

      }
    );

  }


  /* =================================
     FOOTER ANIMATION
  ================================= */

  const footer =
    document.querySelector(
      ".site-footer"
    );


  if (footer) {

    const footerElements =
      footer.querySelectorAll(
        ".site-footer-title, " +
        ".site-footer-links a, " +
        ".site-footer-contact p, " +
        ".site-footer-contact a, " +
        ".site-footer-social a"
      );


    footerElements.forEach(
      (element, index) => {

        element.style.opacity = "0";

        element.style.transform =
          "translateY(30px)";

        element.style.transition =
          "opacity 0.6s ease, " +
          "transform 0.6s ease";

        element.style.transitionDelay =
          `${index * 0.05}s`;

      }
    );


    const footerObserver =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                footerElements.forEach(
                  (element) => {

                    element.style.opacity =
                      "1";

                    element.style.transform =
                      "translateY(0)";

                  }
                );

              }

            }
          );

        },

        {

          threshold: 0.15

        }

      );


    footerObserver.observe(
      footer
    );

  }

});
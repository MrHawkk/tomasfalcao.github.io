document.addEventListener("DOMContentLoaded", () => {

  /* =================================
     GSAP
  ================================= */

  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother
  );


  /* =================================
     SMOOTH SCROLL
  ================================= */

  const smoother =
    ScrollSmoother.create({

      wrapper: "#smooth-wrapper",

      content: "#smooth-content",

      smooth: 1.2,

      effects: true

    });


  /* =================================
     ELEMENTS
  ================================= */

  const intro =
    document.querySelector(".intro");

  const textOne =
    document.querySelector(".text-one");

  const textTwo =
    document.querySelector(".text-two");

  const summary =
    document.querySelector(".summary");

  const summaryText = 
  document.querySelector(".summary-text");

  const summaryImage =
    document.querySelector(".summary-image");

  const summaryImagePlaceholder =
    document.querySelector(
      ".summary-image-placeholder"
    );

  const summaryImageBorder =
    document.querySelector(
      ".summary-image-border"
    );

  const summaryParagraphs =
    document.querySelectorAll(
      ".summary-text p"
    );

  const work =
    document.querySelector(".work");

  const workTrack =
    document.querySelector(".work-track");

  const projects =
    document.querySelectorAll(".project");

  const contactCta =
    document.querySelector(".contact-cta");

  const contactCtaTextOne =
    document.querySelector(
      ".contact-cta-text-one"
    );

  const contactCtaTextTwo =
    document.querySelector(
      ".contact-cta-text-two"
    );

  const footer =
    document.querySelector(".site-footer");

  const footerLine =
    document.querySelector(".js-footer-line");


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
    document.querySelectorAll(
      ".menu-nav a"
    );


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

    menuToggle.classList.add("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Fechar menu"
    );

    menuOverlay.classList.add("open");

    document.body.classList.add(
      "menu-is-open"
    );

  }


  function closeMenu() {

    if (!menuOpen) {
      return;
    }

    menuOpen = false;

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

    menuOverlay.classList.remove(
      "open"
    );

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

    /*
      UM ÚNICO BOTÃO.

      O próprio hamburger transforma-se
      no X através de CSS.
    */

    menuToggle.addEventListener(
      "click",
      toggleMenu
    );


    /*
      Links fecham o menu automaticamente.
    */

    menuLinks.forEach(
      (link) => {

        link.addEventListener(
          "click",
          () => {

            closeMenu();

          }
        );

      }
    );


    /*
      ESC fecha o menu.
    */

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


    /*
      Impede que um clique dentro
      do menu seja interpretado como
      clique para fechar.
    */

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
    document.querySelector(".js-menu-line");

  if (menuLine) {

    const parent =
      menuLine.parentElement;

    const parentWidth =
      parent.offsetWidth;

    const lineWidth =
      menuLine.offsetWidth;


    gsap.set(
      menuLine,
      {

        transformOrigin:
          "center center",

        scaleX: 0,

        x:
          parentWidth / 2 -
          lineWidth / 2

      }
    );


    gsap.to(
      menuLine,
      {

        scaleX: 1,

        x: 0,

        duration: 2,

        ease: "power2.out"

      }
    );

  }

  /* =================================
     SUMMARY
  ================================= */



window.addEventListener("load", () => {

  const summaryImage = document.querySelector(".summary-image");
  const summaryText = document.querySelector(".summary-text");

  summaryImage.style.transition =
    "opacity 1s ease, transform 1s ease";

  summaryText.style.transition =
    "opacity 1s ease, transform 1s ease";

  summaryImage.style.opacity = "1";
  summaryImage.style.transform = "translateY(0)";

  setTimeout(() => {

    summaryText.style.opacity = "1";
    summaryText.style.transform = "translateY(0)";

  }, 200);

});


  /* =================================
     FOOTER
  ================================= */

  if (footer) {

    const footerTextEls =
      document.querySelectorAll(

        ".site-footer-title, " +
        ".site-footer-links a, " +
        ".site-footer-contact p, " +
        ".site-footer-contact a, " +
        ".site-footer-social a"

      );


    if (footerLine) {

      const footerLineParent =
        footerLine.parentElement;

      const parentWidth =
        footerLineParent.offsetWidth;

      const lineWidth =
        footerLine.offsetWidth;


      gsap.set(

        footerLine,

        {

          transformOrigin:
            "center center",

          scaleX: 0,

          x:
            parentWidth / 2 -
            lineWidth / 2

        }

      );

    }


    if (footerTextEls.length) {

      gsap.set(

        footerTextEls,

        {

          y: 60,

          opacity: 0

        }

      );

    }


    const footerTl =
      gsap.timeline({

        scrollTrigger: {

          trigger: footer,

          start: "top 90%",

          end: "top 20%",

          scrub: 1

        }

      });


    if (footerLine) {

      footerTl.to(

        footerLine,

        {

          scaleX: 0.8,

          x: 0,

          duration: 2,

          ease: "power2.out"

        },

        0

      );

    }


    if (footerTextEls.length) {

      footerTl.to(

        footerTextEls,

        {

          y: 0,

          opacity: 1,

          duration: 1,

          ease: "power3.out",

          stagger: 0.06

        },

        0

      );

    }

  }


  /* =================================
     RESIZE
  ================================= */

  window.addEventListener(
    "resize",
    () => {

      ScrollTrigger.refresh();

    }
  );


  window.addEventListener(
    "load",
    () => {

      ScrollTrigger.refresh();

    }
  );

});
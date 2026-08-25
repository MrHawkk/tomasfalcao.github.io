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

    menuOverlay.classList.add(
      "open"
    );

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

    menuToggle.addEventListener(
      "click",
      toggleMenu
    );


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
     INTRO ANIMATION
  ================================= */

  if (
    intro &&
    textOne &&
    textTwo
  ) {

    const introTl =
      gsap.timeline({

        scrollTrigger: {

          trigger: intro,

          start: "top top",

          end: "+=300%",

          pin: true,

          pinSpacing: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true

        }

      });


    introTl.fromTo(

      textOne,

      {

        y: 80,

        opacity: 0

      },

      {

        y: 0,

        opacity: 1,

        duration: 1,

        ease: "power2.out"

      }

    );


    introTl.to(

      textOne,

      {

        y: -120,

        opacity: 0,

        duration: 1,

        ease: "power2.in"

      }

    );


    introTl.fromTo(

      textTwo,

      {

        y: 120,

        opacity: 0

      },

      {

        y: 0,

        opacity: 1,

        duration: 1,

        ease: "power2.out"

      },

      "-=0.5"

    );


    introTl.to(

      textTwo,

      {

        y: -80,

        opacity: 0,

        duration: 1,

        ease: "power2.in"

      }

    );

  }


  /* =================================
     SUMMARY
  ================================= */

  if (summary) {

    gsap.set(
      summaryImage,
      {

        y: 100,

        opacity: 0

      }
    );


    gsap.set(
      summaryImagePlaceholder,
      {

        clipPath:
          "inset(100% 0% 0% 0%)"

      }
    );


    gsap.set(
      summaryImageBorder,
      {

        x: -30,

        y: -30,

        opacity: 0

      }
    );


    gsap.set(
      summaryParagraphs,
      {

        y: 50,

        opacity: 0

      }
    );


    const summaryTitle =
      document.querySelector(
        ".summary-text h2"
      );


    const summaryKicker =
      document.querySelector(
        ".section-kicker"
      );


    if (summaryTitle) {

      gsap.set(
        summaryTitle,
        {

          y: 50,

          opacity: 0

        }
      );

    }


    if (summaryKicker) {

      gsap.set(
        summaryKicker,
        {

          y: 20,

          opacity: 0

        }
      );

    }


    const summaryTl =
      gsap.timeline({

        scrollTrigger: {

          trigger: summary,

          start: "top top",

          end: "+=300%",

          pin: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true

        }

      });


    summaryTl.to(
      summary,
      {

        backgroundColor:
          "#16011c",

        duration: 1.5,

        ease: "power2.out"

      }
    );


    if (summaryKicker) {

      summaryTl.to(

        summaryKicker,

        {

          y: 0,

          opacity: 1,

          duration: 0.7,

          ease: "power3.out"

        }

      );

    }


    if (summaryTitle) {

      summaryTl.to(

        summaryTitle,

        {

          y: 0,

          opacity: 1,

          duration: 1,

          ease: "power3.out"

        },

        "-=0.4"

      );

    }


    summaryTl.to(

      summaryImage,

      {

        y: 0,

        opacity: 1,

        duration: 1,

        ease: "power2.out"

      },

      "-=0.5"

    );


    summaryTl.to(

      summaryImagePlaceholder,

      {

        clipPath:
          "inset(0% 0% 0% 0%)",

        duration: 1,

        ease: "power2.inOut"

      }

    );


    summaryTl.to(

      summaryImageBorder,

      {

        x: 0,

        y: 0,

        opacity: 1,

        duration: 1,

        ease: "power3.out"

      },

      "-=0.8"

    );


    summaryParagraphs.forEach(
      (paragraph, index) => {

        summaryTl.to(

          paragraph,

          {

            y: 0,

            opacity: 1,

            duration: 0.8,

            ease: "power3.out"

          },

          index === 0
            ? "-=0.4"
            : "-=0.55"

        );

      }
    );

  }


  /* =================================
     PROJECT INITIAL STATES
  ================================= */

  function prepareProject(
    project
  ) {

    const imageOne =
      project.querySelector(
        ".project-image-one"
      );

    const imageTwo =
      project.querySelector(
        ".project-image-two"
      );

    const title =
      project.querySelector(
        ".project-title"
      );

    const description =
      project.querySelector(
        ".project-description"
      );

    const meta =
      project.querySelector(
        ".project-meta"
      );

    const tools =
      project.querySelector(
        ".project-tools"
      );


    if (imageOne) {

      gsap.set(

        imageOne,

        {

          opacity: 0,

          y: -80,

          x: -50

        }

      );

    }


    if (imageTwo) {

      gsap.set(

        imageTwo,

        {

          opacity: 0,

          y: 80,

          x: 50

        }

      );

    }


    if (title) {

      gsap.set(

        title,

        {

          opacity: 0,

          scale: 0.88,

          y: 40

        }

      );

    }


    if (description) {

      gsap.set(

        description,

        {

          opacity: 0,

          x: 60

        }

      );

    }


    if (meta) {

      gsap.set(

        meta,

        {

          opacity: 0,

          y: -15

        }

      );

    }


    if (tools) {

      gsap.set(

        tools,

        {

          opacity: 0,

          y: 15

        }

      );

    }

  }


  projects.forEach(
    (project) => {

      prepareProject(project);

    }
  );


  /* =================================
     PROJECT ANIMATION
  ================================= */

  function createProjectAnimation(
    project
  ) {

    const imageOne =
      project.querySelector(
        ".project-image-one"
      );

    const imageTwo =
      project.querySelector(
        ".project-image-two"
      );

    const title =
      project.querySelector(
        ".project-title"
      );

    const description =
      project.querySelector(
        ".project-description"
      );

    const meta =
      project.querySelector(
        ".project-meta"
      );

    const tools =
      project.querySelector(
        ".project-tools"
      );


    const tl =
      gsap.timeline();


    if (meta) {

      tl.to(

        meta,

        {

          opacity: 1,

          y: 0,

          duration: 0.5,

          ease: "power2.out"

        }

      );

    }


    if (imageOne) {

      tl.to(

        imageOne,

        {

          opacity: 1,

          x: 0,

          y: 0,

          duration: 1,

          ease: "power3.out"

        },

        "-=0.2"

      );

    }


    if (imageTwo) {

      tl.to(

        imageTwo,

        {

          opacity: 1,

          x: 0,

          y: 0,

          duration: 1,

          ease: "power3.out"

        },

        "-=0.65"

      );

    }


    if (title) {

      tl.to(

        title,

        {

          opacity: 1,

          scale: 1,

          y: 0,

          duration: 0.9,

          ease: "power3.out"

        },

        "-=0.45"

      );

    }


    if (description) {

      tl.to(

        description,

        {

          opacity: 1,

          x: 0,

          duration: 0.7,

          ease: "power3.out"

        },

        "-=0.4"

      );

    }


    if (tools) {

      tl.to(

        tools,

        {

          opacity: 1,

          y: 0,

          duration: 0.5,

          ease: "power2.out"

        },

        "-=0.35"

      );

    }


    return tl;

  }


  /* =================================
     HORIZONTAL PROJECT SCROLL
  ================================= */

  let workTrigger = null;


  if (
    work &&
    workTrack &&
    projects.length
  ) {

    const getScrollAmount =
      () => {

        return Math.max(

          0,

          workTrack.scrollWidth -
          work.clientWidth

        );

      };


    const workTimeline =
      gsap.timeline({

        defaults: {

          ease: "none"

        }

      });


    projects.forEach(
      (project, index) => {

        const projectAnimation =
          createProjectAnimation(
            project
          );


        workTimeline.add(
          projectAnimation
        );


        workTimeline.to(

          {},

          {

            duration: 0.35

          }

        );


        if (
          index <
          projects.length - 1
        ) {

          workTimeline.to(

            workTrack,

            {

              x: () => {

                const amount =
                  getScrollAmount();

                const progress =
                  (index + 1) /
                  (projects.length - 1);

                return (
                  -amount *
                  progress
                );

              },

              duration: 1.4,

              ease:
                "power2.inOut"

            }

          );

        }

      }
    );


    workTrigger =
      ScrollTrigger.create({

        trigger: work,

        start: "top top",

        end: () => {

          const projectSpace =
            window.innerHeight *
            1.8;

          return (
            "+=" +
            (
              projectSpace *
              projects.length
            )
          );

        },

        pin: true,

        scrub: 1,

        animation:
          workTimeline,

        anticipatePin: 1,

        invalidateOnRefresh: true

      });


    /* =================================
       PROJECT COUNTER
    ================================= */

    const currentCounter =
      document.querySelector(
        ".work-progress-current"
      );


    if (currentCounter) {

      workTrigger.animation
        .eventCallback(
          "onUpdate",
          () => {

            const progress =
              workTrigger.progress;

            const project =
              Math.min(

                projects.length,

                Math.floor(
                  progress *
                  projects.length
                ) + 1

              );


            currentCounter.textContent =
              String(project)
                .padStart(2, "0");

          }
        );

    }

  }


  /* =================================
     DIRECT LINK TO WORK
  ================================= */

  const urlParams =
    new URLSearchParams(
      window.location.search
    );

  const target =
    urlParams.get("target");


  if (
    target === "projects" &&
    work &&
    workTrigger
  ) {

    window.addEventListener(
      "load",
      () => {

        setTimeout(
          () => {

            ScrollTrigger.refresh();


            /*
              Encontramos o início real
              do ScrollTrigger do WORK.
            */

            const workStart =
              workTrigger.start;


            /*
              ScrollSmoother vai diretamente
              para a posição do ScrollTrigger.
            */

            smoother.scrollTo(
              workStart,
              true
            );


          },
          500
        );

      }
    );

  }


  if (
    target === "footer" &&
    footer
  ) {

    window.addEventListener(
      "load",
      () => {

        setTimeout(
          () => {

            smoother.scrollTo(
              footer,
              true
            );

          },
          500
        );

      }
    );

  }


  /* =================================
     CONTACT CTA
  ================================= */

  if (
    contactCta &&
    contactCtaTextOne &&
    contactCtaTextTwo
  ) {

    gsap.set(

      contactCtaTextOne,

      {

        y: 80,

        opacity: 0

      }

    );


    gsap.set(

      contactCtaTextTwo,

      {

        y: 120,

        opacity: 0

      }

    );


    const contactCtaTl =
      gsap.timeline({

        scrollTrigger: {

          trigger:
            contactCta,

          start:
            "top top",

          end:
            "+=300%",

          pin:
            true,

          pinSpacing:
            true,

          scrub:
            1,

          anticipatePin:
            1,

          invalidateOnRefresh:
            true

        }

      });


    contactCtaTl.fromTo(

      contactCtaTextOne,

      {

        y: 80,

        opacity: 0

      },

      {

        y: 0,

        opacity: 1,

        duration: 1,

        ease:
          "power2.out"

      }

    );


    contactCtaTl.to(

      contactCtaTextOne,

      {

        y: -120,

        opacity: 0,

        duration: 1,

        ease:
          "power2.in"

      }

    );


    contactCtaTl.fromTo(

      contactCtaTextTwo,

      {

        y: 120,

        opacity: 0

      },

      {

        y: 0,

        opacity: 1,

        duration: 1,

        ease:
          "power2.out"

      },

      "-=0.5"

    );


    contactCtaTl.to(

      contactCtaTextTwo,

      {

        y: -120,

        opacity: 0,

        duration: 1,

        ease:
          "power2.in"

      }

    );

  }


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


    if (
      footerTextEls.length
    ) {

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

          trigger:
            footer,

          start:
            "top 90%",

          end:
            "top 20%",

          scrub:
            1

        }

      });


    if (footerLine) {

      footerTl.to(

        footerLine,

        {

          scaleX: 0.8,

          x: 0,

          duration: 2,

          ease:
            "power2.out"

        },

        0

      );

    }


    if (
      footerTextEls.length
    ) {

      footerTl.to(

        footerTextEls,

        {

          y: 0,

          opacity: 1,

          duration: 1,

          ease:
            "power3.out",

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
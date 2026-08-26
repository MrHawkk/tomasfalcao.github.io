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

    const introMM =
      gsap.matchMedia();


    /* =================================
       INTRO MOBILE
       <= 800px

       Sem pin
       Sem scrub
       Executa uma vez
    ================================= */

    introMM.add(
      "(max-width: 800px)",
      () => {

        gsap.set(
          textOne,
          {
            y: 80,
            opacity: 0
          }
        );


        gsap.set(
          textTwo,
          {
            y: 80,
            opacity: 0
          }
        );


        const introMobileTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                intro,

              start:
                "top 80%",

              toggleActions:
                "play none none none",

              once:
                true

            }

          });


        introMobileTl.to(

          textOne,

          {

            y: 0,

            opacity: 1,

            duration: 0.7,

            ease:
              "power3.out"

          }

        );


        introMobileTl.to(

          textOne,

          {

            y: -40,

            opacity: 0,

            duration: 0.5,

            ease:
              "power2.in"

          },

          "+=0.7"

        );


        introMobileTl.fromTo(

          textTwo,

          {

            y: 50,

            opacity: 0

          },

          {

            y: 0,

            opacity: 1,

            duration: 0.7,

            ease:
              "power3.out"

          },

          "-=0.2"

        );


        introMobileTl.to(

          textTwo,

          {

            y: -30,

            opacity: 1,

            duration: 0.5,

            ease:
              "power2.in"

          },

          "+=0.7"

        );


        return () => {

          introMobileTl.kill();

        };

      }
    );


    /* =================================
       INTRO DESKTOP
       > 800px

       Mantém o comportamento
       original com scrub + pin
    ================================= */

    introMM.add(
      "(min-width: 801px)",
      () => {

        gsap.set(
          textOne,
          {
            y: 80,
            opacity: 1
          }
        );


        gsap.set(
          textTwo,
          {
            y: 120,
            opacity: 0
          }
        );


        const introDesktopTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                intro,

              start:
                "top top",

              end:
                "+=150%",

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


        introDesktopTl.fromTo(

          textOne,

          {

            y: 80,

            opacity: 1

          },

          {

            y: 0,

            opacity: 1,

            duration: 1,

            ease:
              "power2.out"

          }

        );


        introDesktopTl.to(

          textOne,

          {

            y: -120,

            opacity: 0,

            duration: 1,

            ease:
              "power2.in"

          }

        );


        introDesktopTl.fromTo(

          textTwo,

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


        introDesktopTl.to(

          textTwo,

          {

            y: -80,

            opacity: 0,

            duration: 1,

            ease:
              "power2.in"

          }

        );


        return () => {

          introDesktopTl.kill();

        };

      }
    );

  }


  /* =================================
     SUMMARY
  ================================= */

  if (summary) {

    const summaryTitle =
      document.querySelector(
        ".summary-text h2"
      );


    const summaryKicker =
      document.querySelector(
        ".section-kicker"
      );


    const summaryMM =
      gsap.matchMedia();


    /* =================================
       SUMMARY MOBILE
       <= 800px

       Uma única animação.
       Sem scrub.
       Sem pin.
    ================================= */

    summaryMM.add(
      "(max-width: 800px)",
      () => {

        if (summaryImage) {

          gsap.set(
            summaryImage,
            {

              y: 80,

              opacity: 0

            }
          );

        }


        if (
          summaryImagePlaceholder
        ) {

          gsap.set(

            summaryImagePlaceholder,

            {

              clipPath:
                "inset(100% 0% 0% 0%)"

            }

          );

        }


        if (summaryImageBorder) {

          gsap.set(

            summaryImageBorder,

            {

              x: -20,

              y: -20,

              opacity: 0

            }

          );

        }


        if (
          summaryParagraphs.length
        ) {

          gsap.set(

            summaryParagraphs,

            {

              y: 35,

              opacity: 0

            }

          );

        }


        if (summaryTitle) {

          gsap.set(

            summaryTitle,

            {

              y: 40,

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


        const summaryMobileTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                summary,

              start:
                "top 80%",

              toggleActions:
                "play none none none",

              once:
                true

            }

          });


        summaryMobileTl.to(

          summary,

          {

            backgroundColor:
              "#16011c",

            duration:
              0.4,

            ease:
              "power2.out"

          }

        );


        if (summaryKicker) {

          summaryMobileTl.to(

            summaryKicker,

            {

              y: 0,

              opacity: 1,

              duration:
                0.35,

              ease:
                "power3.out"

            },

            "-=0.1"

          );

        }


        if (summaryTitle) {

          summaryMobileTl.to(

            summaryTitle,

            {

              y: 0,

              opacity: 1,

              duration:
                0.45,

              ease:
                "power3.out"

            },

            "-=0.15"

          );

        }


        if (summaryImage) {

          summaryMobileTl.to(

            summaryImage,

            {

              y: 0,

              opacity: 1,

              duration:
                0.45,

              ease:
                "power3.out"

            },

            "-=0.2"

          );

        }


        if (
          summaryImagePlaceholder
        ) {

          summaryMobileTl.to(

            summaryImagePlaceholder,

            {

              clipPath:
                "inset(0% 0% 0% 0%)",

              duration:
                0.45,

              ease:
                "power2.inOut"

            },

            "-=0.3"

          );

        }


        if (summaryImageBorder) {

          summaryMobileTl.to(

            summaryImageBorder,

            {

              x: 0,

              y: 0,

              opacity: 1,

              duration:
                0.35,

              ease:
                "power3.out"

            },

            "-=0.25"

          );

        }


        if (
          summaryParagraphs.length
        ) {

          summaryMobileTl.to(

            summaryParagraphs,

            {

              y: 0,

              opacity: 1,

              duration:
                0.35,

              ease:
                "power3.out",

              stagger:
                0.08

            },

            "-=0.15"

          );

        }


        return () => {

          summaryMobileTl.kill();

        };

      }
    );


    /* =================================
       SUMMARY DESKTOP
       > 800px

       Mantém o comportamento
       original com scrub + pin
    ================================= */

    summaryMM.add(
      "(min-width: 801px)",
      () => {

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


        const summaryDesktopTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                summary,

              start:
                "top top",

              end:
                "+=300%",

              pin:
                true,

              scrub:
                1,

              anticipatePin:
                1,

              invalidateOnRefresh:
                true

            }

          });


        summaryDesktopTl.to(

          summary,

          {

            backgroundColor:
              "#16011c",

            duration:
              1.5,

            ease:
              "power2.out"

          }

        );


        if (summaryKicker) {

          summaryDesktopTl.to(

            summaryKicker,

            {

              y: 0,

              opacity: 1,

              duration:
                0.7,

              ease:
                "power3.out"

            }

          );

        }


        if (summaryTitle) {

          summaryDesktopTl.to(

            summaryTitle,

            {

              y: 0,

              opacity: 1,

              duration:
                1,

              ease:
                "power3.out"

            },

            "-=0.4"

          );

        }


        summaryDesktopTl.to(

          summaryImage,

          {

            y: 0,

            opacity: 1,

            duration:
              1,

            ease:
              "power2.out"

          },

          "-=0.5"

        );


        summaryDesktopTl.to(

          summaryImagePlaceholder,

          {

            clipPath:
              "inset(0% 0% 0% 0%)",

            duration:
              1,

            ease:
              "power2.inOut"

          }

        );


        summaryDesktopTl.to(

          summaryImageBorder,

          {

            x: 0,

            y: 0,

            opacity: 1,

            duration:
              1,

            ease:
              "power3.out"

          },

          "-=0.8"

        );


        summaryParagraphs.forEach(
          (paragraph, index) => {

            summaryDesktopTl.to(

              paragraph,

              {

                y: 0,

                opacity: 1,

                duration:
                  0.8,

                ease:
                  "power3.out"

              },

              index === 0
                ? "-=0.4"
                : "-=0.55"

            );

          }
        );


        return () => {

          summaryDesktopTl.kill();

        };

      }
    );

  }


  /* =================================
     PROJECT INITIAL STATES
     DESKTOP ONLY
     > 800px
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
     MOBILE PROJECT ANIMATION
     <= 800px

     Sem horizontal scroll.
     Sem scrub.
     Cada projeto anima uma vez.
  ================================= */

  const projectMobileMM =
    gsap.matchMedia();


  projectMobileMM.add(
    "(max-width: 800px)",
    () => {

      if (!projects.length) {
        return;
      }


      const mobileProjectTriggers =
        [];


      projects.forEach(
        (project) => {

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


          /*
             Estado inicial mobile.
             Valores menores para evitar
             animações pesadas.
          */

          if (imageOne) {

            gsap.set(
              imageOne,
              {
                opacity: 0,
                y: -30,
                x: -20
              }
            );

          }


          if (imageTwo) {

            gsap.set(
              imageTwo,
              {
                opacity: 0,
                y: 30,
                x: 20
              }
            );

          }


          if (title) {

            gsap.set(
              title,
              {
                opacity: 0,
                scale: 0.96,
                y: 20
              }
            );

          }


          if (description) {

            gsap.set(
              description,
              {
                opacity: 0,
                x: 20
              }
            );

          }


          if (meta) {

            gsap.set(
              meta,
              {
                opacity: 0,
                y: -10
              }
            );

          }


          if (tools) {

            gsap.set(
              tools,
              {
                opacity: 0,
                y: 10
              }
            );

          }


          const mobileProjectTl =
            gsap.timeline({

              paused:
                true

            });


          if (meta) {

            mobileProjectTl.to(

              meta,

              {

                opacity: 1,

                y: 0,

                duration:
                  0.3,

                ease:
                  "power2.out"

              }

            );

          }


          if (imageOne) {

            mobileProjectTl.to(

              imageOne,

              {

                opacity: 1,

                x: 0,

                y: 0,

                duration:
                  0.55,

                ease:
                  "power3.out"

              },

              "-=0.1"

            );

          }


          if (imageTwo) {

            mobileProjectTl.to(

              imageTwo,

              {

                opacity: 1,

                x: 0,

                y: 0,

                duration:
                  0.55,

                ease:
                  "power3.out"

              },

              "-=0.4"

            );

          }


          if (title) {

            mobileProjectTl.to(

              title,

              {

                opacity: 1,

                scale: 1,

                y: 0,

                duration:
                  0.45,

                ease:
                  "power3.out"

              },

              "-=0.3"

            );

          }


          if (description) {

            mobileProjectTl.to(

              description,

              {

                opacity: 1,

                x: 0,

                duration:
                  0.4,

                ease:
                  "power3.out"

              },

              "-=0.25"

            );

          }


          if (tools) {

            mobileProjectTl.to(

              tools,

              {

                opacity: 1,

                y: 0,

                duration:
                  0.3,

                ease:
                  "power2.out"

              },

              "-=0.2"

            );

          }


          /*
             O ScrollTrigger apenas detecta
             quando o projeto entra no viewport.

             Não existe scrub.
             A timeline toca sozinha.
          */

          const trigger =
            ScrollTrigger.create({

              trigger:
                project,

              start:
                "top 85%",

              once:
                true,

              onEnter:
                () => {

                  mobileProjectTl.play();

                }

            });


          mobileProjectTriggers.push({

            trigger,

            timeline:
              mobileProjectTl

          });

        }
      );


      return () => {

        mobileProjectTriggers.forEach(
          (item) => {

            item.trigger.kill();

            item.timeline.kill();

          }
        );


        /*
           Limpa os transforms para quando
           voltarmos ao desktop.
        */

        projects.forEach(
          (project) => {

            const elements =
              project.querySelectorAll(
                ".project-image-one, " +
                ".project-image-two, " +
                ".project-title, " +
                ".project-description, " +
                ".project-meta, " +
                ".project-tools"
              );


            gsap.killTweensOf(
              elements
            );


            gsap.set(
              elements,
              {
                clearProps:
                  "opacity,transform"
              }
            );

          }
        );

      };

    }
  );


  /* =================================
     HORIZONTAL PROJECT SCROLL
     DESKTOP ONLY
     > 800px
  ================================= */

  let workTrigger = null;

  let workTimeline = null;


  const workMM =
    gsap.matchMedia();


  workMM.add(
    "(min-width: 801px)",
    () => {

      if (
        !work ||
        !workTrack ||
        !projects.length
      ) {

        return;

      }


      /* =================================
         INITIAL PROJECT STATES
      ================================= */

      projects.forEach(
        (project) => {

          prepareProject(
            project
          );

        }
      );


      /* =================================
         SCROLL AMOUNT
      ================================= */

      const getScrollAmount =
        () => {

          return Math.max(

            0,

            workTrack.scrollWidth -
            work.clientWidth

          );

        };


      /* =================================
         WORK TIMELINE
      ================================= */

      workTimeline =
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


          /*
             A animação original dos
             projetos continua ligada ao
             horizontal scroll no desktop.
          */

          workTimeline.add(
            projectAnimation
          );


          workTimeline.to(

            {},

            {

              duration:
                0.35

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

                duration:
                  1.4,

                ease:
                  "power2.inOut"

              }

            );

          }

        }
      );


      /* =================================
         SCROLLTRIGGER
      ================================= */

      workTrigger =
        ScrollTrigger.create({

          trigger:
            work,

          start:
            "top top",

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

          pin:
            true,

          scrub:
            1,

          animation:
            workTimeline,

          anticipatePin:
            1,

          invalidateOnRefresh:
            true

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


      /* =================================
         CLEANUP
      ================================= */

      return () => {

        if (workTrigger) {

          workTrigger.kill();

          workTrigger = null;

        }


        if (workTimeline) {

          workTimeline.kill();

          workTimeline = null;

        }


        gsap.killTweensOf(
          workTrack
        );


        gsap.set(
          workTrack,
          {
            clearProps:
              "transform"
          }
        );


        /*
           Limpa os estados dos projetos
           quando saímos do desktop.
        */

        projects.forEach(
          (project) => {

            const elements =
              project.querySelectorAll(
                ".project-image-one, " +
                ".project-image-two, " +
                ".project-title, " +
                ".project-description, " +
                ".project-meta, " +
                ".project-tools"
              );


            gsap.killTweensOf(
              elements
            );


            gsap.set(
              elements,
              {
                clearProps:
                  "opacity,transform"
              }
            );

          }
        );

      };

    }
  );


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
    work
  ) {

    window.addEventListener(
      "load",
      () => {

        setTimeout(
          () => {

            ScrollTrigger.refresh();


            if (
              window.innerWidth > 800 &&
              workTrigger
            ) {

              smoother.scrollTo(
                workTrigger.start,
                true
              );

            } else {

              smoother.scrollTo(
                work,
                true
              );

            }

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

    const contactMM =
      gsap.matchMedia();


    /* =================================
       CONTACT MOBILE
       <= 800px

       Sem pin.
       Sem scrub.
       Uma única execução.
    ================================= */

    contactMM.add(
      "(max-width: 800px)",
      () => {

        gsap.set(

          contactCtaTextOne,

          {

            y: 50,

            opacity: 0

          }

        );


        gsap.set(

          contactCtaTextTwo,

          {

            y: 50,

            opacity: 0

          }

        );


        const contactMobileTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                contactCta,

              start:
                "top 80%",

              toggleActions:
                "play none none none",

              once:
                true

            }

          });


        contactMobileTl.to(

          contactCtaTextOne,

          {

            y: 0,

            opacity: 1,

            duration:
              0.6,

            ease:
              "power3.out"

          }

        );


        contactMobileTl.to(

          contactCtaTextOne,

          {

            y: -30,

            opacity: 0,

            duration:
              0.45,

            ease:
              "power2.in"

          },

          "+=0.8"

        );


        contactMobileTl.fromTo(

          contactCtaTextTwo,

          {

            y: 40,

            opacity: 0

          },

          {

            y: 0,

            opacity: 1,

            duration:
              0.6,

            ease:
              "power3.out"

          },

          "-=0.15"

        );


        return () => {

          contactMobileTl.kill();

        };

      }
    );


    /* =================================
       CONTACT DESKTOP
       > 800px

       Mantém scrub + pin.
    ================================= */

    contactMM.add(
      "(min-width: 801px)",
      () => {

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


        const contactDesktopTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                contactCta,

              start:
                "top top",

              end:
                "+=150%",

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


        contactDesktopTl.fromTo(

          contactCtaTextOne,

          {

            y: 80,

            opacity: 0

          },

          {

            y: 0,

            opacity: 1,

            duration:
              1,

            ease:
              "power2.out"

          }

        );


        contactDesktopTl.to(

          contactCtaTextOne,

          {

            y: -120,

            opacity: 0,

            duration:
              1,

            ease:
              "power2.in"

          }

        );


        contactDesktopTl.fromTo(

          contactCtaTextTwo,

          {

            y: 120,

            opacity: 0

          },

          {

            y: 0,

            opacity: 1,

            duration:
              1,

            ease:
              "power2.out"

          },

          "-=0.5"

        );


        contactDesktopTl.to(

          contactCtaTextTwo,

          {

            y: -120,

            opacity: 0,

            duration:
              1,

            ease:
              "power2.in"

          }

        );


        return () => {

          contactDesktopTl.kill();

        };

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


    const footerMM =
      gsap.matchMedia();


    /* =================================
       FOOTER MOBILE
       <= 800px

       Sem scrub.
       Executa uma vez.
    ================================= */

    footerMM.add(
      "(max-width: 800px)",
      () => {

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

              y: 35,

              opacity: 0

            }

          );

        }


        const footerMobileTl =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                footer,

              start:
                "top 90%",

              toggleActions:
                "play none none none",

              once:
                true

            }

          });


        if (footerLine) {

          footerMobileTl.to(

            footerLine,

            {

              scaleX:
                0.8,

              x: 0,

              duration:
                0.8,

              ease:
                "power2.out"

            },

            0

          );

        }


        if (
          footerTextEls.length
        ) {

          footerMobileTl.to(

            footerTextEls,

            {

              y: 0,

              opacity: 1,

              duration:
                0.6,

              ease:
                "power3.out",

              stagger:
                0.04

            },

            0

          );

        }


        return () => {

          footerMobileTl.kill();

        };

      }
    );


    /* =================================
       FOOTER DESKTOP
       > 800px

       Mantém scrub.
    ================================= */

    footerMM.add(
      "(min-width: 801px)",
      () => {

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


        const footerDesktopTl =
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

          footerDesktopTl.to(

            footerLine,

            {

              scaleX:
                0.8,

              x: 0,

              duration:
                2,

              ease:
                "power2.out"

            },

            0

          );

        }


        if (
          footerTextEls.length
        ) {

          footerDesktopTl.to(

            footerTextEls,

            {

              y: 0,

              opacity: 1,

              duration:
                1,

              ease:
                "power3.out",

              stagger:
                0.06

            },

            0

          );

        }


        return () => {

          footerDesktopTl.kill();

        };

      }
    );

  }


  /* =================================
     RESIZE
  ================================= */

  let resizeTimer = null;


  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        setTimeout(
          () => {

            ScrollTrigger.refresh();

          },
          200
        );

    }
  );


  /* =================================
     LOAD
  ================================= */

  window.addEventListener(
    "load",
    () => {

      setTimeout(
        () => {

          ScrollTrigger.refresh();

        },
        100
      );

    }
  );

});
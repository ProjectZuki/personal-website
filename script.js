/**
 * @brief Script for williealcaraz.me index.html
 * 
 * This script handles animations and interactions contained within index.html
 *  for the website. Includes typing animation for titles, image gallery animation,
 *  artificial loading screen, and more features to come.
 * 
 * @author Willie Alcaraz
 * @version 1.0.0
 * @date 28 August 2023
 */

const TITLE_TYPING_SPEED = 25;
const SECONDARY_TITLE_TYPING_SPEED = 75;

document.addEventListener("DOMContentLoaded", () => {
  // Show loading screen
  const loadingScreen = document.querySelector(".loading-screen");
  const content = document.querySelector(".content");

  // ------------------------ cursor text animations ------------------------ //

  /**
   * Function to create typing animation for specifed title text
   * @param {*} text the string to be animated
   * @param {*} spanElement the span element of the text
   * @param {*} cursorElement cursor element of the text
   * @param {*} index current index of character
   * @param {*} typeSpeed speed of which animation should appear to "type"
   * @param {*} callback callback to execute when the string is finished processing
   */
  function animateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback) {
    // base case, current index is within string
    if (index < text.length) {
      spanElement.textContent += text[index];
      index++;
      setTimeout(() => {
        // recursive call function until completion
        animateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback);
      }, typeSpeed); // delay amount for each character, speed of typing animatino
    } else {
      callback(); // Call the callback function once typing is done
    }
  }

  // cursor element for animation
  const cursorElement = document.getElementById("cursor-animation");

  // --- title typing animation ---

  // Text for typing animation
  const subtitle_line1 = "Las Vegas, Nevada";
  const subtitle_line2 = "Website & Software Development / Engineering | UNLV Computer Science";

  // Span elements where typing animation will be displayed
  const subtitle1Span = document.getElementById("subtitle-line1");
  const subtitle2Span = document.getElementById("subtitle-line2");

  // Show the text "on line 1" without typing animation, this is specific to this line
  subtitle1Span.textContent = subtitle_line1;

  // set delay for start of typing animation for line2
  setTimeout(() => {
    // call function to animate the string
    animateTitleText(subtitle_line2, subtitle2Span, cursorElement, 0, TITLE_TYPING_SPEED, () => {
      cursorElement.style.opacity = "1"; // show cursor blink animation
      setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
      }, 500); // cursor element blink delay
    });
  }, 1750); // Delay before starting line2 typing

  // --- "About" typing animation ---

  // required variables for elements
  const aboutText = "About";  // text to be animated
  const aboutTitleSpan = document.getElementById("about-text-line");  // id of title to be animated

  // intersection observer for the "About" title section will delay animation until user scrolls to about-text-title section
  const aboutTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // set delay for when we scroll, to the beginning of the animation
        setTimeout(() => {
          animateTitleText(aboutText, aboutTitleSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            cursorElement.style.opacity = "1"; // Show cursor with blinking animation
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
            }, 500);
          });
        }, 1000); // modify delay for typing animation to begin once initiated

        // Unobserve the section to prevent unnecessary animations
        aboutTitleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // threshold for intersection for animation to begin

  // Observe the "About" title section
  aboutTitleObserver.observe(document.querySelector(".about-text-title"));

  // --- "Gallery" title animation ---

  // ... repeat above process

  // Text for "Gallery" title animation
  const galleryText = "Gallery";
  const galleryTitleSpan = document.getElementById("gallery-text-line");

  // Intersection observer for the "Gallery" title section
  const galleryTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateTitleText(galleryText, galleryTitleSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            cursorElement.style.opacity = "1"; // Show cursor with blinking animation
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
            }, 500);
          });
        }, 1000); // modify delay

        // Unobserve the section to prevent unnecessary animations
        galleryTitleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 1.0 }); // threshold for intersection

  // Observe the "Gallery" title section once gallery-text-title has been scrolled to
  galleryTitleObserver.observe(document.querySelector(".gallery-text-title"));

  // --- Projects title animation ---

  // repeat above processes
  const projectsText = "Projects";
  const projectsTitleSpan = document.getElementById("projects-text-line");

  const projectsTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateTitleText(projectsText, projectsTitleSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 1000);  //modify delay

        // unobserve section
        projectsTitleObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 1.0}); // threshold or intersection

  projectsTitleObserver.observe(document.querySelector(".projects-text-title"));

  // --- Contact title animation ---

  // repeat above processes
  const contactText = "Contact";
  const contactTitleSpan = document.getElementById("contact-text-line");

  const contactTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateTitleText(contactText, contactTitleSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 1000);  //modify delay

        // unobserve section
        contactTitleObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 1.0}); // threshold or intersection

  contactTitleObserver.observe(document.querySelector(".contact-text-title"));

  // ---------------------- end cursor text animations ---------------------- //

  // ---------------------- artificial loading screen ----------------------- //

  // delay view of main screen
  setTimeout(() => {
    loadingScreen.style.opacity = "0";

    // after loading screen animation
    setTimeout(() => {
      // hide loading screen after delay
      loadingScreen.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("content-slide-up");
    }, 0); // delay time from loading animation to main screen
  }, 500) // delay time for loading animation

  // -------------------- end artificial loading screen --------------------- //

  // ----------------------- image gallery animation ------------------------ //

  // retrieve all elements within image-section class name
  const imageSections = document.querySelectorAll(".image-section");
  // retrieve first element within gallery-view class name
  const firstImageSection = document.querySelector(".gallery-view");

  // iterate through each image-section instance
  imageSections.forEach(imageSection => {
    // retrieve all elements with animated-image class name
    const animatedImages = imageSection.querySelectorAll('.animated-image');

    // intersection observer will observe when image-section becomes visible
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // apply animation effect for each animated-image instance
          animatedImages.forEach((image, index) => {
            setTimeout(() => {
              // horizontal translation: horizontal position + translation amount in pixels * (image position + 1)
              const translateX = -50 + 20 * (index + 1);
              const opacity = 1;

              // apply image styles
              image.style.opacity = opacity;
              image.style.transform = `translateX(${translateX}px)`;
            }, index * 300); // delay each image animation
          });
          
          // unobserve section
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // threshold for intersection

    // observe section
    imageObserver.observe(imageSection);
  });

  // -------------------- end image gallery animations ---------------------- //

  // --------------------- buttons to scroll to section --------------------- //

  // // scrolling state and position
  // let scrolling = false;
  // let previousScroll = window.scrollY;

  // // listener for "scroll" event on window
  // window.addEventListener("scroll", () => {
  //   // check if scrolling is in effect
  //   if (!scrolling) {
  //     // scroll direction dependent on position
  //     const scrollDirection = window.scrollY > previousScroll ? "down" : "up";

  //     // iterate through each section
  //     imageSections.forEach(section => {
  //       // top position of section, check if section is coming to view
  //       const sectionTop = section.getBoundingClientRect().top;
  //       if (sectionTop < window.innerHeight * 0.7 && scrollDirection === "down") {
  //         scrolling = true;
  //         // smooth scrolling to desired section
  //         section.scrollIntoView({ behavior: "smooth" });

  //         // delay reset scrolling
  //         setTimeout(() => {
  //           scrolling = false;
  //         }, 1000); // delay amount
  //       }
  //     });

  //     // update scroll position
  //     previousScroll = window.scrollY;
  //   }
  // });
  
  // ---- gallery section scroll button ----
  // retrieve element for specified class
  const scrollToImageSection = document.getElementById("scroll_images_btn");
  // click event listener
  scrollToImageSection.addEventListener("click", () => {
    // scroll to view on click
    firstImageSection.scrollIntoView({ behavior: "smooth" });
  });

  // ---- projects section scroll button ----
  const scrollToProjectsSection = document.getElementById("scroll_projects_btn");
  scrollToProjectsSection.addEventListener("click", () => {
    const projectsSection = document.querySelector(".projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

  // ---- contact section scroll button ----
  const scrollToContact = document.getElementById("scroll_contact_btn");
  scrollToContact.addEventListener("click", () => {
    const contactSection = document.querySelector(".contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  // -------------------------- end scroll buttons -------------------------- //

});

/// **************************** EOF script.js **************************** ///

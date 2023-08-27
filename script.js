
document.addEventListener("DOMContentLoaded", () => {
  // Show loading screen
  const loadingScreen = document.querySelector(".loading-screen");
  const content = document.querySelector(".content");
  const aboutSection = document.querySelector(".about-text");

  // ------------------------ cursor text animations ------------------------ //

  // --- title typing animation ---

  // Text for typing animation
  const foregroundText_line1 = "Las Vegas, Nevada";
  const foregroundText_line2 = "Website & Software Development/Engineering | UNLV Computer Science";

  // Span elements where typing animation will be displayed
  const foreground_line1Span = document.getElementById("typing-text-line1");
  const foreground_line2Span = document.getElementById("typing-text-line2");
  const cursorElement = document.getElementById("cursor-animation");

  // Show the text "on line 1" without typing animation
  foreground_line1Span.textContent = foregroundText_line1;

  // Set delay for start of typing animation for line2
  setTimeout(() => {
    typeText(foregroundText_line2, foreground_line2Span, cursorElement, 0, 50, () => {
      cursorElement.style.opacity = "1"; // Show cursor with blinking animation
      setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
      }, 500);
    });
  }, 1750); // Delay before starting line2 typing

  // Function to create typing animation
  function typeText(text, spanElement, cursorElement, index, typeSpeed, callback) {
    if (index < text.length) {
      spanElement.textContent += text[index];
      index++;
      setTimeout(() => {
        typeText(text, spanElement, cursorElement, index, typeSpeed, callback);
      }, typeSpeed);
    } else {
      callback(); // Call the callback function once typing is done
    }
  }

  // --- "About" typing animation ---

  // required variables for elements
  const aboutText = "About";  // text to be animated
  const aboutTitleSpan = document.getElementById("about-text-line");  // id of title to be animated
  const aboutCursorElement = document.getElementById("about-cursor-animation"); // id of cursor element for animation

  /**
   * Function to create typing animation for specifed title text
   * @param {*} text the string to be animated
   * @param {*} spanElement the span element of the text
   * @param {*} cursorElement cursor element of the text
   * @param {*} index current index of character
   * @param {*} typeSpeed speed of which animation should appear to "type"
   * @param {*} callback callback to execute when the string is finished processing
   */
  function animnateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback) {
    if (index < text.length) {
      spanElement.textContent += text[index];
      index++;
      setTimeout(() => {
        animnateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback);
      }, typeSpeed);
    } else {
      callback(); // Call the callback function once typing is done
    }
  }

  // Intersection observer for the "About" title section
  const aboutTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // set delay for when we scroll, to the beginning of the animation
        setTimeout(() => {
          animnateTitleText(aboutText, aboutTitleSpan, aboutCursorElement, 0, 75, () => {
            aboutCursorElement.style.opacity = "1"; // Show cursor with blinking animation
            setInterval(() => {
              aboutCursorElement.style.opacity = aboutCursorElement.style.opacity === "0" ? "1" : "0";
            }, 500);
          });
        }, 1000); // modify delay for typing animation to begin once initiated

        // Unobserve the section to prevent unnecessary animations
        aboutTitleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Observe the "About" title section
  aboutTitleObserver.observe(document.querySelector(".about-text-title"));

  // --- "Gallery" title animation ---

  // Text for "Gallery" title animation
  const galleryText = "Gallery";
  const galleryTitleSpan = document.getElementById("gallery-text-line");
  const galleryCursorElement = document.getElementById("gallery-cursor-animation");

  // Intersection observer for the "Gallery" title section
  const galleryTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animnateTitleText(galleryText, galleryTitleSpan, galleryCursorElement, 0, 50, () => {
            galleryCursorElement.style.opacity = "1"; // Show cursor with blinking animation
            setInterval(() => {
              galleryCursorElement.style.opacity = galleryCursorElement.style.opacity === "0" ? "1" : "0";
            }, 500);
          });
        }, 1000); // modify delay

        // Unobserve the section to prevent unnecessary animations
        galleryTitleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 1.0 }); // threshold when to start animation

  // Observe the "Gallery" title section once gallery-text-title has been scrolled to
  galleryTitleObserver.observe(document.querySelector(".gallery-text-title"));

  // --- Projects title animation ---

  // repeat above processes
  const projectsText = "Projects";
  const projectsTitleSpan = document.getElementById("projects-text-line");
  const projectsCursorElement = document.getElementById("projects-cursor-animation");

  const projectsTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animnateTitleText(projectsText, projectsTitleSpan, projectsCursorElement, 0, 50, () => {
            setInterval(() => {
              projectsCursorElement.style.opacity = projectsCursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 1000);  //modify delay

        // unobserve section
        projectsTitleObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 1.0});

  projectsTitleObserver.observe(document.querySelector(".projects-text-title"));

  // ---------------------- end cursor text animations ---------------------- //

  // artificial oading screen

  setTimeout(() => {
    loadingScreen.style.opacity = "0";

    // after loading screen animation
    setTimeout(() => {
      // hide loading screen
      loadingScreen.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("content-slide-up");
    }, 0); // delay time from load to main
  }, 500) // delay time for loading animation

  const imageSections = document.querySelectorAll(".image-section");
  const firstImageSection = document.querySelector(".gallery-view");

  imageSections.forEach(imageSection => {
    const animatedImages = imageSection.querySelectorAll('.animated-image');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedImages.forEach((image, index) => {
            setTimeout(() => {
              const translateX = -50 + 20 * (index + 1);
              const opacity = 1;

              image.style.opacity = opacity;
              image.style.transform = `translateX(${translateX}px)`;
            }, index * 300);
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    imageObserver.observe(imageSection);
  });

  // Scroll to specific sections when user scrolls
  let scrolling = false;
  let previousScroll = window.scrollY;

  window.addEventListener("scroll", () => {
    if (!scrolling) {
      const scrollDirection = window.scrollY > previousScroll ? "down" : "up";

      imageSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.7 && scrollDirection === "down") {
          scrolling = true;
          section.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            scrolling = false;
          }, 1000); // Adjust the delay as needed
        }
      });

      previousScroll = window.scrollY;
    }
  });

  // Scroll to first section when the first button is clicked
  const scrollToImageSection = document.getElementById("scroll_images_btn");
  scrollToImageSection.addEventListener("click", () => {
    firstImageSection.scrollIntoView({ behavior: "smooth" });
  });

  // Scroll to additional section when the new button is clicked
  const scrollToAdditionalSection = document.getElementById("scroll_add_sec_btn");
  scrollToAdditionalSection.addEventListener("click", () => {
    const additionalSection = document.querySelector(".additional-section");
    additionalSection.scrollIntoView({ behavior: "smooth" });
  });

  // Scroll to contact section when the new button is clicked
  const scrollToContact = document.getElementById("scroll_contact_btn");
  scrollToContact.addEventListener("click", () => {
    const contactSection = document.querySelector(".contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

});

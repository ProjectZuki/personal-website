/*
 * 
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
  // Show loading screen
  const loadingScreen = document.querySelector(".loading-screen");
  const foreground = document.querySelector(".title");
  const content = document.querySelector(".content");
  const title = document.querySelector(".title");

  setTimeout(() => {
    loadingScreen.style.opacity = "0";

    // after loading screen animation
    setTimeout(() => {
      // hide loading screen
      loadingScreen.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("content-slide-up");
    }, 0); // delay time from load to main
  }, 1500) // delay time for loading animation

  const imageSections = document.querySelectorAll(".image-section");
  const firstImageSection = document.querySelector(".image-section");

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

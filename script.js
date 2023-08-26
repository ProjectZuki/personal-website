
document.addEventListener("DOMContentLoaded", () => {
  // Show loading screen
  const loadingScreen = document.querySelector(".loading-screen");
  const content = document.querySelector(".content");
  const aboutSection = document.querySelector(".about-text");

  // Text for typing animation
  const foregroundText_line1 = "Las Vegas, Nevada";
  const foregroundText_line2 = "Website & Software Development/Engineering | UNLV Computer Science";

  // Span elements where typing animation will be displayed
  const foreground_line1Span = document.getElementById("typing-text-line1");
  const foreground_line2Span = document.getElementById("typing-text-line2");
  const cursorElement = document.getElementById("cursor-animation");

  // Set delay for start of typing animation
setTimeout(() => {
  typeText(foregroundText_line1, foreground_line1Span, cursorElement, 0, 75, () => {
    setTimeout(() => {
      typeText(foregroundText_line2, foreground_line2Span, cursorElement, 0, 50, () => {
        cursorElement.style.opacity = "1"; // Show cursor with blinking animation
        setInterval(() => {
          cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
        }, 500);
      });
    }, 500); // Delay before starting line2 typing
  });
}, 1750);

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

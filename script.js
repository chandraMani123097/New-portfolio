document.addEventListener("DOMContentLoaded", function () {
  // Custom cursor
  const cursor = document.querySelector(".cursor");

  if (window.innerWidth > 768) {
    cursor.style.display = "block";

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Cursor hover effects
    const hoverElements = document.querySelectorAll(
      "a, button, .project-card, .skill-item, .info-card, .timeline-content"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursor.style.backgroundColor = "rgba(99, 102, 241, 0.5)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "var(--primary)";
      });
    });
  }

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#6366f1",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Mobile menu toggle
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        burger.classList.remove("active");
      }

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

  // Scroll reveal animations
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 200,
    reset: true,
  });

  sr.reveal(".section-header", { origin: "top" });
  sr.reveal(".skill-category", { interval: 200 });
  sr.reveal(".timeline-item", { interval: 200 });
  sr.reveal(".project-card", { interval: 200 });
  sr.reveal(".contact-info, .contact-form", { origin: "left", interval: 200 });

  // Form submission
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For demonstration, we'll just show an alert
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.padding = "1rem 5%";
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
    } else {
      header.style.padding = "1.5rem 5%";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.2)";
    }
  });

  // Intersection Observer for section active state
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${id}`) {
              item.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Initialize ScrollReveal if not already loaded
if (typeof ScrollReveal === "undefined") {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/scrollreveal";
  document.head.appendChild(script);
}

// Initialize particles.js if not already loaded
if (typeof particlesJS === "undefined") {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
  document.head.appendChild(script);
}

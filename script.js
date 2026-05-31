// ================================
// TYPING EFFECT
// ================================

const words = [
  "MERN Stack Developer",
  "Computer Science Engineer",
  "Digital Marketing Professional",
  "AI & IoT Enthusiast",
  "Frontend Developer",
  "Social Media Executive",
  "Creative Problem Solver",
  "Graphic Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent =
      currentWord.substring(0, charIndex++);

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === currentWord.length + 1) {
    speed = 1500;
    deleting = true;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// PARTICLES BACKGROUND
// ================================

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    },

    color: {
      value: "#ff3c3c"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.4,
      random: true
    },

    size: {
      value: 4,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 160,
      color: "#ff3c3c",
      opacity: 0.2,
      width: 1
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {

      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.6
        }
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }
  });
});


// ================================
// SCROLL REVEAL
// ================================

const revealElements =
document.querySelectorAll(
".glass-card, .skill-card, .project-card, .experience-card"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {

      el.style.opacity = "1";
      el.style.transform =
        "translateY(0)";
    }
  });
}

reveal();

window.addEventListener(
  "scroll",
  reveal
);


// ================================
// INITIAL ANIMATION STYLES
// ================================

revealElements.forEach(el => {

  el.style.opacity = "0";

  el.style.transform =
    "translateY(40px)";

  el.style.transition =
    "all 0.8s ease";
});


// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topBtn.classList.add("show");

  } else {

    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ================================
// MOBILE MENU
// ================================

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector("nav ul");

if(menuBtn){

  menuBtn.addEventListener(
    "click",
    () => {

      navMenu.classList.toggle(
        "show-menu"
      );
    }
  );
}
navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if(window.innerWidth <= 768){
      navMenu.classList.remove("show-menu");
    }

  });

});
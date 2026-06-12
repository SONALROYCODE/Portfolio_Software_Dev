// ===== MOBILE NAV TOGGLE =====
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  });
});

// ===== TYPING EFFECT =====
const typedTextSpan = document.getElementById('typed-text');
const textArray = ["Frontend Web Developer", "React Developer", "BCA Student"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, 800);
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll(
  '.about-content, .skills-grid, .projects-grid, .contact-content, .skill-card, .project-card, .cert-card, .timeline-item'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== SKILL BAR ANIMATION =====
const skillSection = document.getElementById('skills');
let skillsAnimated = false;

const animateSkillBars = () => {
  const sectionTop = skillSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight * 0.75 && !skillsAnimated) {
    document.querySelectorAll('.fill').forEach(fill => {
      fill.style.width = fill.getAttribute('style').match(/width:\s*([\d.]+%)/)[1];
    });
    skillsAnimated = true;
  }
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section, header');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(anchor => {
    anchor.classList.remove('active-link');
    if (anchor.getAttribute('href') === `#${current}`) {
      anchor.classList.add('active-link');
    }
  });
});

// ===== CONTACT FORM (Demo - no backend) =====
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please fill in all fields.";
    return;
  }

  // NOTE: This is a front-end only demo.
  // To make this form actually send emails, connect it to a service like
  // Formspree, EmailJS, or Web3Forms and update the form action/script accordingly.
  formNote.textContent = "Thank you! Your message has been noted (demo form - connect a backend/service to send emails).";
  contactForm.reset();

  setTimeout(() => {
    formNote.textContent = "";
  }, 5000);
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

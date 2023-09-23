// ?Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".sub_nav_page");
const navClose = document.querySelector(".nav-close");
const backButton = document.querySelector('.back_btn');
const successSection = document.querySelector('.success_section');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  navClose.classList.toggle("active");
}

// Close navbar when link is clicked
const closeNav = document.querySelectorAll(".close");
const closeNav2 = document.querySelectorAll(".close2");

closeNav.forEach((n) => n.addEventListener("click", closeMenu));
closeNav2.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navClose.classList.remove("active");
  navMenu.classList.remove("active");
}

// close Success page
backButton.addEventListener('click', () => {
  successSection.classList.add('hide');
});

// Contact Form
const contactForm = document.getElementById('contact_form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData2 = new FormData(contactForm);
  const requestBody2 = Object.fromEntries(formData2.entries());

  fetch('https://backend.getlinked.ai/hackathon/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody2)
  })
    .then(response => response.json())
    .then(data => {
      successSection.classList.remove('hide');
      console.log('Success', data);
    })
    .catch(error => {
      console.error('Error', error);
    });
});
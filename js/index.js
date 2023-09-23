// ?Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".sub_nav_page");
const navClose = document.querySelector(".nav-close");
const submitBtn = document.querySelector(".submit_btn");
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

// Open Success page
backButton.addEventListener('click', () => {
  successSection.classList.add('hide');
});

// Register form
const baseUrl = 'https://backend.getlinked.ai';

async function fetchCategories() {
  try {
    const response = await fetch(`${baseUrl}/hackathon/categories-list`);
    const data = await response.json();
    const selectElement = document.getElementById('category');

    selectElement.innerHTML = '';

    data.forEach(category => {
      const optionElement = document.createElement('option');
      optionElement.value = category.id;
      optionElement.text = category.name;
      selectElement.appendChild(optionElement);
    });
  } catch (error) {
    console.error('Error', error);
  }
}

fetchCategories();

const form = document.getElementById('register_form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const requestBody = Object.fromEntries(formData.entries());

  fetch('https://backend.getlinked.ai/hackathon/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
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
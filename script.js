// Get slider Items
const sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);
// Get Number of slides
const slidesCount = sliderImage.length;

// Set current slide
let currentSlide = 1;

// slide number element
const slideNumberElement = document.querySelector(".slide-number");

// Create the next and previous buttons
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Handle click on next and previous buttons

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// create the main UL Element
const paginationElement = document.createElement("ul");

// set id for the ul element
paginationElement.setAttribute("id", "pagination-ul");

//create list items based on slides count

for (let i = 1; i <= slidesCount; i++) {
  // create li element
  const paginationItem = document.createElement("li");

  // set custom attribute
  paginationItem.setAttribute("data-index", i);

  // set item content
  paginationItem.appendChild(document.createTextNode(i));

  // append items to the main ul element
  paginationElement.appendChild(paginationItem);
}
// Add the created ul element to the page
document.querySelector(".indicators").appendChild(paginationElement);

// Get the new created UL
const paginationCreatedUl = document.getElementById("pagination-ul");

// Get pagination Items
const paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// loop through all pagination items
for (let i = 0; i < paginationBullets.length; i++) {
  // add click event to each item
  paginationBullets[i].addEventListener("click", function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    showSlides();
  });
}
// next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    showSlides();
  }
}

// previous slide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    showSlides();
  }
}

// function to show slides
function showSlides() {
  // set the slide number
  slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;

  // remove active class from all slides and pagination items
  removeActive();

  // set the active class on the current slide
  sliderImage[currentSlide - 1].classList.add("active");

  // set the active class on the pagination items
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // check if the current slide is the first one
  if (currentSlide === 1) {
    // add disabled class to the previous button
    prevButton.classList.add("disabled");
  } else {
    // remove disabled class from the previous button
    prevButton.classList.remove("disabled");
  }

  // check if the current slide is the last one
  if (currentSlide === slidesCount) {
    //add disabled class to the next button
    nextButton.classList.add("disabled");
  } else {
    // remove disabled class from the next button
    nextButton.classList.remove("disabled");
  }
}
// Trgger the function when we click on the pagination items
showSlides();

// remove active class from all slides
function removeActive() {
  // loop through all slides
  sliderImage.forEach((slide) => {
    slide.classList.remove("active");
  });

  // loop through all pagination items
  paginationBullets.forEach((item) => {
    item.classList.remove("active");
  });
}

const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

let slideIndex = 0;
showSlides();

// dots controlls
function currentSlide(n) {
  showSlides((slideIndex = n));
  console.log(n);
}

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  //   setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// years controll
const years = document.getElementById("years-desktop");
const imgYear = document.querySelector(".img-years");
const imgInfo = document.querySelector(".number-info");
let lineYears = document.getElementById("line-years");
let imgLine = document.getElementById("img-line");

years.addEventListener("click", (e) => {
  if (imgLine) {
    imgLine.src = "";
    let selectYear = e.target.textContent;
    imgYear.src = `/asset/img/${selectYear}.png`;
    imgInfo.src = `/asset/img/${selectYear}-number.png`;
    let parentElement = e.target.parentElement;
    imgLine.src = "./asset/img/point line.svg";
    lineYears.append(imgLine);
    parentElement.appendChild(lineYears);
  }
});

// years mobile controll
const selectYears = document.getElementById("select-years");
let imgMobile = document.getElementById("img-mobile");

selectYears.addEventListener("change", (e) => {
  const selectValue = e.target.value;
  imgMobile.src = `/asset/img/${selectValue}.png`;
  imgInfo.src = `/asset/img/${selectValue}-number.png`;
});

// handle plus min years
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const navYears = document.getElementById("nav-years");

navYears.addEventListener("click", (e) => {
  if (e.target.id == "left") {
    if (selectYears.value > 2018) {
      let minYear = (selectYears.value -= 1);
      imgMobile.src = `/asset/img/${minYear}.png`;
      imgInfo.src = `/asset/img/${minYear}-number.png`;
    }
    return;
  }
  if (e.target.id == "right") {
    let plusYear = Number(selectYears.value);
    let setYear = (selectYears.value += 1);
    console.log(setYear);
    // imgMobile.src = `/asset/img/${plusYear}.png`;
    // imgInfo.src = `/asset/img/${plusYear}-number.png`;
    return;
  }
  return;
});

// card slide
const cardSlides = document.getElementsByClassName("card-slides");
const dotsMobile = document.getElementsByClassName("dot-mobile");

let indexMobile = 0;

// // dots controlls
function currentSlideMobile(n) {
  slideMobile((indexMobile = n));
  // console.log(n);
}

function slideMobile() {
  let i;
  for (i = 0; i < cardSlides.length; i++) {
    cardSlides[i].style.display = "none";
    // dotsMobile[i].className = dotsMobile[i].className.replace(" active", "");
  }
  indexMobile++;
  if (indexMobile > cardSlides.length) {
    indexMobile = 1;
  }
  cardSlides[indexMobile - 1].style.display = "block";
  dotsMobile[indexMobile - 1].className += " active";
  // setTimeout(slideMobile, 2000); // Change image every 10 seconds
}
slideMobile();

// read more
const buttonReadMore = document.getElementById("btn-read-more");
const textReadMore = document.getElementById("text");

const showText = () => {
  // console.log(typeof textReadMore.style.display);
  let check = textReadMore.style.display;
  // let btn = buttonReadMore.textContent;
  if (check == "" || check == "none") {
    buttonReadMore.textContent = "Minimize";
    buttonReadMore.classList.add("new-btn");
    textReadMore.classList.add("bgc-body");
    textReadMore.style.display = "block";
  }
  if (check == "block") {
    buttonReadMore.textContent = "Read More";
    buttonReadMore.classList.remove("new-btn");
    textReadMore.style.display = "none";
  }
};

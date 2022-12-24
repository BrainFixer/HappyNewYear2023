const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sideBar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const screenHeight = container.clientHeight;
const slidesCount = mainSlide.querySelectorAll("div").length;

sideBar.style.top = -100 * (slidesCount - 1) + "vh";

let slide = 0;

upBtn.addEventListener("click", function () {
  changeSlide(-1);
});

downBtn.addEventListener("click", function () {
  changeSlide(1);
});

function changeSlide(dir) {
  slide = slide + dir;
  if (slide < 0) {
    slide = slidesCount - 1;
  }
  if (slide == slidesCount) {
    slide = 0;
  }

  mainSlide.style.transform = "translateY(-" + slide * screenHeight + "px)";
  sideBar.style.transform = "translateY(" + slide * screenHeight + "px)";
}

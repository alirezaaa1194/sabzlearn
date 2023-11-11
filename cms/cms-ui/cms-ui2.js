let openBtn = document.querySelector(".OpenBtn");
let panel = document.querySelector(".panel");
let sectionContainer = document.querySelector("section");
let accordionButton = document.querySelector(".accordion-button");
let accordionItemsContainer = document.querySelector(
  ".accordion-items-container"
);
let isopen = false;
openBtn.addEventListener("click", function () {
  if (isopen == false) {
    panel.style.right = 0;
    sectionContainer.style.right = "50%";
    isopen = true;
  } else {
    panel.style.right = "-100%";
    sectionContainer.style.right = "0%";
    isopen = false;
  }
});
let downIcon=document.querySelector('.fa-chevron-down')
accordionButton.addEventListener("click", function (e) {
  if (accordionItemsContainer.classList=='accordion-items-container active'){
    accordionItemsContainer.classList.remove('active')
    downIcon.style.transform='rotate(0deg)'
  }
  else{
    accordionItemsContainer.classList.add('active')
    downIcon.style.transform='rotate(180deg)'
  }
});
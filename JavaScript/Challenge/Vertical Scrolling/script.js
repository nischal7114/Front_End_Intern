const container = document.querySelector(".carousel-container");
const cardList = document.querySelector(".carousel-wrapper");
const cards = document.querySelectorAll(".card");

let index = 0;
let startY = 0;
let currentY = 0;
let isDragging = false;
const cardVisiblePortion = 0.2;
const cardHeight = cards[0].offsetHeight + 20;

function updateScroll() {
  const offset = -(cardHeight * index - cardHeight * cardVisiblePortion);
  cardList.style.transform = `translateY(${offset}px)`;
}

cardList.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startY = e.clientY;
  isDragging = true;
  container.classList.add("dragging");
});

cardList.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  currentY = e.clientY;
  const delta = currentY - startY;

  // Optional: you can add real-time dragging effect here by translating the cardList temporarily
  // cardList.style.transform = `translateY(${-(cardHeight * index - cardHeight * cardVisiblePortion) + delta}px)`;
});

cardList.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  let delta = e.clientY - startY;
  if (delta > 50 && index > 0) index--;
  else if (delta < -50 && index < cards.length - 1) index++;
  updateScroll();
  isDragging = false;
  container.classList.remove("dragging");
});

cardList.addEventListener("mouseleave", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  isDragging = false;
  container.classList.remove("dragging");
  updateScroll();
});

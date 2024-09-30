"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModals = document.querySelectorAll(".show-modal");

//To open modal
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//To show modal & overlay
for (let i = 0; i < btnOpenModals.length; i++) {
  btnOpenModals[i].addEventListener("click", openModal);
}

//to close modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//To close modal on click of modal close icon
btnCloseModal.addEventListener("click", closeModal);

//To close modal on click on overlay
overlay.addEventListener("click", closeModal);

//To close modal on Esc keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

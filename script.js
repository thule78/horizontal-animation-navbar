const toggleBtn = document.querySelector(".dots-btn");
const container = document.querySelector(".container");

toggleBtn.addEventListener("click", () => {
    container.classList.toggle("open")
});
const filter = document.getElementById("filter");
const close = document.getElementById("close");
const body = document.querySelector("body");
const container = document.getElementById("container");

filter.addEventListener("click", () => {
  container.classList.add("active");
  body.classList.add("pop-act");
});
close.addEventListener("click", () => {
  container.classList.remove("active");
  body.classList.remove("pop-act");
});

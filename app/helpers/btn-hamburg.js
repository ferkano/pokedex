export function btnHamburg() {
  document.addEventListener("click", (e) => {
    // console.log(e.target)
    if (
      e.target.matches(".panel-btn") ||
      e.target.matches(`${".panel-btn"} *`)
    ) {
      document.querySelector(".nav").classList.toggle("is-active");
      document.querySelector(".panel-btn").classList.toggle("is-active");
    }
    if (e.target.matches(".nav a")) {
      document.querySelector(".nav").classList.remove("is-active");
      document.querySelector(".panel-btn").classList.remove("is-active");
    }
  });
}

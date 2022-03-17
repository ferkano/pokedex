import api from "./poke-api.js";

export function buttonBack() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".back")) {
      if (localStorage.getItem("buttonBack") === "home") {
        location.hash = "#/home";
      } else {
        window.history.back();
      }
    }
  });
}

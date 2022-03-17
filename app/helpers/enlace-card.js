export function enlaceCard() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".enlace-card")) {
      console.log("hola");
    }
  });
}

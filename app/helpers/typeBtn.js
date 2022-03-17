export function typeBtn() {
  const $setectFilter = document.getElementById("filter");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".type-buton")) {
      let value = "";
      if (e.target.id === "normal") {
        value = 1;
      }
      if (e.target.id === "fighting") {
        value = 2;
      }
      if (e.target.id === "flying") {
        value = 3;
      }
      if (e.target.id === "poison") {
        value = 4;
      }
      if (e.target.id === "ground") {
        value = 5;
      }
      if (e.target.id === "rock") {
        value = 6;
      }
      if (e.target.id === "bug") {
        value = 7;
      }
      if (e.target.id === "ghost") {
        value = 8;
      }
      if (e.target.id === "steel") {
        value = 9;
      }
      if (e.target.id === "fire") {
        value = 10;
      }
      if (e.target.id === "water") {
        value = 11;
      }
      if (e.target.id === "grass") {
        value = 12;
      }
      if (e.target.id === "electric") {
        value = 13;
      }
      if (e.target.id === "psychi") {
        value = 14;
      }
      if (e.target.id === "ice") {
        value = 15;
      }
      if (e.target.id === "dragon") {
        value = 16;
      }
      if (e.target.id === "dark") {
        value = 17;
      }
      if (e.target.id === "fairy") {
        value = 18;
      }
      if (e.target.id === "unknown") {
        value = 10001;
      }
      if (e.target.id === "shadow") {
        value = 10002;
      }
      location.hash = `/filter=${value}`;
      localStorage.setItem("type", value);
    }
  });
}

export function Navbar() {
  const $nav = document.createElement("nav");
  $nav.classList.add("nav");

  $nav.innerHTML = `
    <a href="#/home">Home</a>
    <a href="#/search?search=${localStorage.getItem("PokeSearch")}">Search</a>
    `;

  return $nav;
}

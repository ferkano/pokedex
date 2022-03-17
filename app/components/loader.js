export function loader() {
  const $wrapper = document.createElement("div"),
    $pokeball = document.createElement("div");

  $wrapper.classList.add("wrapper");
  $pokeball.classList.add("pokeball");

  $wrapper.appendChild($pokeball);

  return $wrapper;
}

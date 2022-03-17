export function Title() {
  const $img = document.createElement("img");
  $img.src = "./app/assets/pngegg.png";
  $img.classList.add("logo");
  $img.alt = "logo-pokemon";

  return $img;
}

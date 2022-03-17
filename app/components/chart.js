export function Chart() {
  const $canvas = document.createElement("canvas");
  $canvas.classList.add("chart");
  $canvas.id = "myChart";

  const $div = document.createElement("div");
  $div.classList.add("chart-container");
  $div.appendChild($canvas);
  return $div;
}

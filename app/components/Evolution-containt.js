import { EvolutionDetails } from "./Evolution-details.js";

export function Evolution() {
  const $evolution = document.createElement("div");
  $evolution.classList.add("evolution");
  $evolution.id = "evolution";

  const $evolutionTitle = document.createElement("h3");
  $evolutionTitle.classList.add("evolutionTitle");
  $evolutionTitle.textContent = "Evolution chain";
  $evolution.appendChild($evolutionTitle);
  return $evolution;
}

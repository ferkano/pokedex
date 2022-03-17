import pokeApi from "./helpers/poke-api.js";
import { App } from "./App.js";
import { InfiteScroll } from "./helpers/infinite_scroll.js";
import { btnHamburg } from "./helpers/btn-hamburg.js";
import { buttonBack } from "./helpers/button-back.js";
import { enlaceCard } from "./helpers/enlace-card.js";

document.addEventListener("DOMContentLoaded", () => {
  pokeApi.offset = 0;
  App();
  InfiteScroll();
  btnHamburg();
  buttonBack();
  enlaceCard();
});

window.addEventListener("hashchange", () => {
  App();
});

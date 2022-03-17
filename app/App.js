import { Header } from "./components/Header.js";
import { Main } from "./components/main.js";
import { router } from "./components/router.js";
import { BtnScroll } from "./components/btn-Scroll.js";
import api from "./helpers/poke-api.js";
import { buttonBack } from "./helpers/button-back.js";
import { InfiteScroll } from "./helpers/infinite_scroll.js";
import scrollTopButton from "./helpers/scroll-top.js";
import { enlaceCard } from "./helpers/enlace-card.js";

export function App() {
  const $root = document.getElementById("root");

  api.offset = 0;

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(BtnScroll());

  enlaceCard();

  router();
  scrollTopButton(".scroll-top-btn");
}

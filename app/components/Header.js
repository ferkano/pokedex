import { Hamburg } from "./Button-hambur.js";
import { Navbar } from "./Navbar.js";
import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");

  $header.appendChild(Title());
  $header.appendChild(Hamburg());
  $header.appendChild(Navbar());
  return $header;
}

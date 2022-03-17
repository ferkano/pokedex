const d = document,
  w = window;

export function BtnScroll() {
  const $BtnScroll = d.createElement("button");
  $BtnScroll.classList.add("scroll-top-btn");
  $BtnScroll.classList.add("hidden");

  $BtnScroll.innerHTML = "&#11014;";

  return $BtnScroll;
}

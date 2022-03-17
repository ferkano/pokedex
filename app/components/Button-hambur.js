export function Hamburg() {
  const $button = document.createElement("button");
  $button.classList.add("panel-btn");
  $button.classList.add("hamburger");
  $button.classList.add("hamburger--emphatic");

  $button.innerHTML = `
        <span class="hamburger-box">
             <span class="hamburger-inner"></span>
        </span>
    `;

  return $button;
}

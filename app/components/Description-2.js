export function DescriptionPokeTwo(props) {
  let { descriptions } = props;
  const $descriptionChar = document.createElement("div");
  $descriptionChar.classList.add("description-char");

  $descriptionChar.innerHTML = `
        <h3 class="description-text">${descriptions[5].description}</h3>
    `;

  return $descriptionChar;
}

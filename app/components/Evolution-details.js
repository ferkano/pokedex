export function EvolutionDetails(props) {
  let { sprites, forms, id } = props;
  const $div = document.createElement("div");
  $div.classList.add("details-evolution");

  $div.innerHTML = `
    <a href="#/${id}">
    <figure class="figure">
        <img src="${sprites.front_default}" class="evolution-img">
        <figcaption class="evolution-name">${forms[0].name}</figcaption>
    </figure>
    
    </a>
    `;

  return $div;
}

export function DescriptionPoke(props) {
  let { forms, sprites, height, weight, abilities } = props;

  const $descriptionPoke = document.createElement("section");
  $descriptionPoke.classList.add("description");
  $descriptionPoke.id = "description";

  let totalHeight = height / 10;
  let totalWeight = weight / 10;

  $descriptionPoke.innerHTML = `
    <a class="back">&#11013;</a>
    <h2 class="name-description">${forms[0].name}</h2>
    <img class= "img-description" src="${sprites.front_default}">
    <div class="data">
        <div class="data-details">
            <h4 class="data data-height">Height</h4>
            <h4 class="res res-height">${totalHeight} m</h4>
            <h4 class="data data-weight">Weight</h4>
            <h4 class="res res-weight">${totalWeight} kg</h4>
            <h4 class="data data-skill">Skill</h4>
            <h4 class="res res-skil">${abilities[0].ability.name}</h4>
        </div>
    </div>

    `;

  return $descriptionPoke;
}

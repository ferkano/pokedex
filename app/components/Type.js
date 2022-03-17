export function Type(props) {
  let { types } = props;

  const $type = document.createElement("div");
  $type.classList.add("type-containt");
  $type.id = "type-containt";

  $type.innerHTML = `
    <h3>Type</h3>
    <div class="type" id="type">
        <button id="${types[0].type.name}" class="type-buton ${types[0].type.name}" value="">${types[0].type.name}</button>
    </div>
    `;

  return $type;
}

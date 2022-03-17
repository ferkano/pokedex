export function TypeTWo(props) {
  let { types } = props;

  const $type = document.createElement("button");
  $type.classList.add(`${types[1].type.name}`);
  $type.classList.add("type-buton");
  $type.id = `${types[1].type.name}`;
  $type.textContent = `${types[1].type.name}`;

  return $type;
}

export function background(props) {
  let { types } = props;

  document
    .querySelectorAll("article[data-type = 'grass']")
    .forEach((e) => e.classList.add("grass"));

  document
    .querySelectorAll("article[data-type = 'normal']")
    .forEach((e) => e.classList.add("normal"));

  document
    .querySelectorAll("article[data-type = 'fighting']")
    .forEach((e) => e.classList.add("fighting"));

  document
    .querySelectorAll("article[data-type = 'flying']")
    .forEach((e) => e.classList.add("flying"));

  document
    .querySelectorAll("article[data-type = 'poison']")
    .forEach((e) => e.classList.add("poison"));

  document
    .querySelectorAll("article[data-type = 'ground']")
    .forEach((e) => e.classList.add("ground"));

  document
    .querySelectorAll("article[data-type = 'rock']")
    .forEach((e) => e.classList.add("rock"));

  document
    .querySelectorAll("article[data-type = 'bug']")
    .forEach((e) => e.classList.add("bug"));

  document
    .querySelectorAll("article[data-type = 'ghost']")
    .forEach((e) => e.classList.add("ghost"));

  document
    .querySelectorAll("article[data-type = 'steel']")
    .forEach((e) => e.classList.add("steel"));

  document
    .querySelectorAll("article[data-type = 'fire']")
    .forEach((e) => e.classList.add("fire"));

  document
    .querySelectorAll("article[data-type = 'water']")
    .forEach((e) => e.classList.add("water"));

  document
    .querySelectorAll("article[data-type = 'electric']")
    .forEach((e) => e.classList.add("electric"));

  document
    .querySelectorAll("article[data-type = 'psychic']")
    .forEach((e) => e.classList.add("psychic"));

  document
    .querySelectorAll("article[data-type = 'ice']")
    .forEach((e) => e.classList.add("ice"));

  document
    .querySelectorAll("article[data-type = 'dragon']")
    .forEach((e) => e.classList.add("dragon"));

  document
    .querySelectorAll("article[data-type = 'dark']")
    .forEach((e) => e.classList.add("dark"));

  document
    .querySelectorAll("article[data-type = 'fairy']")
    .forEach((e) => e.classList.add("fairy"));

  document
    .querySelectorAll("article[data-type = 'unknown']")
    .forEach((e) => e.classList.add("unknown"));

  document
    .querySelectorAll("article[data-type = 'shadow']")
    .forEach((e) => e.classList.add("shadow"));
}

export function PokeCard(props) {
  let { forms, id, sprites, types } = props;

  return `
    <article class="poke-card" data-type="${types[0].type.name}" id="poke-card">
    <img src="${sprites.front_default}" alt="" class="poke-img">
    <div class="poke-name"><h2>${forms[0].name}</h2></div>
    <div class="poke-id"><h2>ID:</h2><h2>${id}</h2></div>
    
    <button class="button-enlace"><a href="#/${id}">Details</a></button>
        </article>

    `;
}

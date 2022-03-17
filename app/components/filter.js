export function filter() {
  const $select = document.createElement("select"),
    $filter = document.createElement("div");
  $filter.classList.add("filter");
  $select.classList.add("filter-select");
  $select.id = "filter";

  $select.innerHTML = `
        <option disabled selected hidden >Selected type pokemon</option>
        <option class= "option-filter" value="1" data-type="normal">Normal</option>
        <option class= "option-filter" value="2" data-type="fighting">Fighting</option>
        <option class= "option-filter" value="3" data-type="flying">Flying</option>
        <option class= "option-filter" value="4" data-type="poison">Poison</option>
        <option class= "option-filter" value="5" data-type="ground">Ground</option>
        <option class= "option-filter" value="6" data-type="rock">Rock</option>
        <option class= "option-filter" value="7" data-type="bug">Bug</option>
        <option class= "option-filter" value="8" data-type="ghost">Ghost</option>
        <option class= "option-filter" value="9" data-type="steel">Steel</option>
        <option class= "option-filter" value="10" data-type="fire">Fire</option>
        <option class= "option-filter" value="11" data-type="water">Water</option>
        <option class= "option-filter" value="12" data-type="grass">Grass</option>
        <option class= "option-filter" value="13" data-type="electric">Electric</option>
        <option class= "option-filter" value="14" data-type="psychi">Psychi</option>
        <option class= "option-filter" value="15" data-type="ice">Ice</option>
        <option class= "option-filter" value="16" data-type="dragon">Dragon</option>
        <option class= "option-filter" value="17" data-type="dark">Dark</option>
        <option class= "option-filter" value="18" data-type="fairy">Fairy</option>
        <option class= "option-filter" value="10001" data-type="unknown">Unknown</option>
        <option class= "option-filter" value="10002" data-type="shadow">Shadow</option>
    `;
  $filter.appendChild($select);
  return $filter;
}

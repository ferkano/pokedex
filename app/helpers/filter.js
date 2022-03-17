export function selected() {
  const $setectFilter = document.getElementById("filter");

  $setectFilter.addEventListener("change", (e) => {
    if (!e.target.value) {
      location.hash = "/";
    } else {
      location.hash = `/filter=${e.target.value}`;
      let detailsPoke = location.hash.slice(9);
      console.log(detailsPoke);
      localStorage.setItem("type", detailsPoke);
    }
  });
  if (location.hash.includes("#/filter")) {
    $setectFilter.value = localStorage.getItem("type");
  }
}

import api from "./poke-api.js";
import { ajax } from "./ajax.js";
import { PokeCard } from "../components/Poke-card.js";
import { background } from "../helpers/backgroun-card.js";

export async function InfiteScroll() {
  const d = document,
    w = window;

  let Component;

  api.offset = 20;
  w.addEventListener("scroll", async (e) => {
    //console.log(api.offset);
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    let { hash } = w.location;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (!hash || hash === "#/home") {
        console.log(api.offset);

        await ajax({
          url: `${api.POKEAPI}?offset=${api.offset}&limit=${api.limit}`,
          cbSuccess: async (next) => {
            //console.log(next)
            for (let i = 0; i < next.results.length; i++) {
              let html = "";

              await ajax({
                url: next.results[i].url,
                cbSuccess: (pokemon) => {
                  //console.log(pokemon)
                  Component = PokeCard;
                  html += Component(pokemon);
                  d.getElementById("main").insertAdjacentHTML(
                    "beforeend",
                    html
                  );

                  background(pokemon);
                },
              });
            }
          },
        });
        api.offset += 20;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });
}

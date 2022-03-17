import { ajax } from "../helpers/ajax.js";
import { background } from "../helpers/backgroun-card.js";
import api from "../helpers/poke-api.js";
import { PokeCard } from "./Poke-card.js";
import { filter } from "./filter.js";
import { InfiteScroll } from "../helpers/infinite_scroll.js";
import { Search } from "./Search.js";
import { selected } from "../helpers/filter.js";
import { DescriptionPoke } from "./Description-1.js";
import { Chart } from "./chart.js";
import { chart } from "../helpers/chart.js";
import { EvolutionDetails } from "./Evolution-details.js";
import { Evolution } from "./Evolution-containt.js";
import { Type } from "./Type.js";
import { TypeTWo } from "./Type-two.js";
import { typeBtn } from "../helpers/typeBtn.js";

import { loader } from "./loader.js";

export async function router() {
  const d = document,
    w = window,
    $main = d.getElementById("main"),
    $root = d.getElementById("root");
  let $div = document.createElement("div");
  $div.classList.add("container-card");

  let { hash } = location;
  localStorage.setItem("hash", hash);

  $main.innerHTML = null;

  if (hash.includes("#/") || !hash || hash === "#/home") {
    // scrollTopButton(".scroll-top-btn");

    $root.insertBefore(filter(), $main);
    d.querySelectorAll(".option-filter").forEach((el) => {
      el.classList.add(`${el.dataset.type}`);
    });
  }

  if (!hash || hash === "#/home") {
    //location.reload(1);

    localStorage.setItem("buttonBack", "home");

    selected();
    $main.appendChild(loader());
    await ajax({
      url: api.POKEAPI,
      cbSuccess: async (main) => {
        let html = "";
        for (let i = 0; i < main.results.length; i++) {
          //console.log(main.results[i])
          await ajax({
            url: main.results[i].url,
            cbSuccess: (card) => {
              //console.log(card);
              html += PokeCard(card);
              //console.log(PokeCard)
              $main.innerHTML = html;
              background(card);
            },
          });
        }
      },
    });
  } else if (location.hash.includes("#/filter=")) {
    localStorage.setItem("buttonBack", "filter");

    selected();

    $main.appendChild(loader());

    let typeHash = hash.slice(9);
    // $filter.value = typeHash;
    //console.log(typeof typeHash)

    await ajax({
      url: `${api.POKETYPE}${typeHash}/`,
      cbSuccess: async (res) => {
        let html = "";
        for (let i = 0; i < res.pokemon.length; i++) {
          await ajax({
            url: res.pokemon[i].pokemon.url,
            cbSuccess: (pokemon) => {
              html += PokeCard(pokemon);

              $div.innerHTML = html;
            },
          });
        }
        document.querySelector(".wrapper").classList.add("none");
        $main.appendChild($div);
        background($div);
      },
    });
  } else if (hash.includes("#/search")) {
    localStorage.setItem("buttonBack", "search");

    $main.appendChild(loader());

    document
      .querySelector(".filter")
      .removeChild(document.querySelector(".filter-select"));
    document.querySelector(".filter").appendChild(Search());

    //console.log(hash)
    let searchPoke = hash.slice(16);
    //console.log(searchPoke);
    let html = "";
    await ajax({
      url: `${api.POKEAPI}${searchPoke}/`,
      cbSuccess: (res) => {
        //console.log(res);
        document.querySelector(".wrapper").classList.add("none");
        html += PokeCard(res);

        $main.innerHTML = html;
        background(res);
      },
    });
  } else {
    localStorage.setItem("buttonBack", hash);

    document
      .querySelector(".filter")
      .removeChild(document.querySelector(".filter-select"));

    $main.innerHTML = null;

    typeBtn();

    //console.log(hash)
    let detailsPoke = hash.slice(2);
    //console.log(detailsPoke)

    let html = "";
    await ajax({
      url: `${api.POKEAPI}${detailsPoke}`,
      cbSuccess: (res) => {
        //console.log(res)
        html = DescriptionPoke(res);

        $main.appendChild(html);
        $main.appendChild(Type(res));

        if (res.types[1]) {
          document.getElementById("type").appendChild(TypeTWo(res));
        }
      },
    });

    let chartNodo = "";
    await ajax({
      url: `${api.POKEAPI}${detailsPoke}`,
      cbSuccess: (res) => {
        //console.log(res)
        chartNodo = Chart();
        $main.appendChild(chartNodo);
        chart(res);
      },
    });
    if (detailsPoke < 900) {
      let evolutionOne = "";
      await ajax({
        url: `${api.SPECIES}${detailsPoke}`,
        cbSuccess: async (res) => {
          //console.log(res)
          await ajax({
            url: `${res.evolution_chain.url}`,
            cbSuccess: async (res) => {
              //console.log(res)
              await ajax({
                url: `${res.chain.species.url}`,
                cbSuccess: async (res) => {
                  // console.log(res)
                  await ajax({
                    url: `${api.POKEAPI}${res.id}`,
                    cbSuccess: (res) => {
                      //console.log(res)
                      Evolution();
                      evolutionOne = EvolutionDetails(res);
                      $main.appendChild(Evolution());
                      document
                        .getElementById("evolution")
                        .appendChild(evolutionOne);
                    },
                  });
                },
              });
            },
          });
        },
      });

      await ajax({
        url: `${api.SPECIES}${detailsPoke}`,
        cbSuccess: async (res) => {
          await ajax({
            url: `${res.evolution_chain.url}`,
            cbSuccess: async (res) => {
              if (!res.chain.evolves_to[0]) {
                evolutionOne = "";
              } else {
                await ajax({
                  url: `${res.chain.evolves_to[0].species.url}`,
                  cbSuccess: async (res) => {
                    // console.log(res)
                    await ajax({
                      url: `${api.POKEAPI}${res.id}`,
                      cbSuccess: (res) => {
                        //console.log(res)
                        setTimeout(() => {
                          Evolution();
                          evolutionOne = EvolutionDetails(res);
                          document
                            .getElementById("evolution")
                            .appendChild(evolutionOne);
                        }, 200);
                      },
                    });
                  },
                });

                if (!res.chain.evolves_to[0].evolves_to[0]) {
                  evolutionOne = "";
                } else {
                  await ajax({
                    url: `${res.chain.evolves_to[0].evolves_to[0].species.url}`,
                    cbSuccess: async (res) => {
                      // console.log(res)
                      await ajax({
                        url: `${api.POKEAPI}${res.id}`,
                        cbSuccess: (res) => {
                          //console.log(res)
                          setTimeout(() => {
                            Evolution();
                            evolutionOne = EvolutionDetails(res);
                            document
                              .getElementById("evolution")
                              .appendChild(evolutionOne);
                          }, 300);
                        },
                      });
                    },
                  });
                }
              }
            },
          });
        },
      });
    }
  }
}

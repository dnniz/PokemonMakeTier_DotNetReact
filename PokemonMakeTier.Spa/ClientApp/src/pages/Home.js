import React from "react";

import "./styles/Home.css";
import Pokeball from "../components/Pokeball";
import api from "../api";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeballs: [],
      numPokeballs: 20,
      numMaxPokedex: 809
    };
  }

  handleClickPokeball = dexId => {
    alert("POKEMON!" + dexId);
  };

  getTypePokeball = async (numPokedex, index) => {
    // const pokeGli = await api.pokemon.glitch.detail(numPokedex);
    // if (pokeGli[0].starter) {
    //   return "great";
    // } else if (
    //   pokeGli[0].legendary ||
    //   pokeGli[0].mythical ||
    //   pokeGli[0].ultraBeast ||
    //   pokeGli[0].mega
    // ) {
    //   return "master";
    // } else {
    try {
      const LEGENDARY_IDS = [
        144,
        145,
        146,
        150,
        151,
        243,
        244,
        245,
        249,
        250,
        251,
        377,
        378,
        379,
        380,
        381,
        382,
        383,
        384,
        385,
        386,
        480,
        481,
        482,
        483,
        484,
        485,
        486,
        487,
        488,
        489,
        490,
        491,
        492,
        493,
        494,
        638,
        639,
        640,
        641,
        642,
        643,
        644,
        645,
        646,
        647,
        648,
        649,
        716,
        717,
        718,
        716,
        719,
        720,
        721,
        785,
        786,
        787,
        788,
        789,
        790,
        791,
        793,
        794,
        795,
        796,
        797,
        798,
        799,
        800,
        801,
        802,
        803,
        804,
        805,
        806,
        807,
        808,
        809
      ];

      const pokeCo = await api.pokemon.co.detail(numPokedex);
      let sumStatBase = 0;
      let typePokeBall = "";

      const legendary = LEGENDARY_IDS.some(item => {
        return item == pokeCo.id;
      });
      console.log("ES LEGENDARIO : " + legendary);
      if (legendary) {
        typePokeBall = "master";
      } else {
        pokeCo.stats.map((stat, i) => {
          sumStatBase = sumStatBase + stat.base_stat;
        });
        if (sumStatBase >= 600) {
          typePokeBall = "ultra";
        } else {
          typePokeBall = "poke";
        }
      }
      this.setState(prevState => ({
        pokeballs: [
          ...prevState.pokeballs,
          <Pokeball
            index={index}
            onClickPokeball={this.handleClickPokeball}
            onRandomNumPokedex={numPokedex}
            typePokeBall={typePokeBall}
            isLegendary={legendary}
          />
        ]
      }));
    } catch (error) {
      console.log(error);
    }

    // }
  };

  generateRandomNumPokedex = () => {
    var generate = Math.floor(Math.random() * this.state.numMaxPokedex);
    var strNumPokedex =
      generate.toString().length < 3
        ? generate.toString().padStart(3, "0")
        : generate.toString();
    return strNumPokedex;
  };

  render() {
    if (this.state.pokeballs.length > 0) {
      return (
        <div className="Home">
          {this.state.pokeballs.map((pokeball, i) => {
            return <React.Fragment key={i}>{pokeball}</React.Fragment>;
          })}
        </div>
      );
    }

    return (
      <div className="Home">
        <div>pokeballs null</div>
      </div>
    );
  }

  componentDidMount() {
    this.createPokeballs();
  }

  createPokeballs = async () => {
    for (let index = 1; index <= this.state.numPokeballs; index++) {
      const numPokedex = Math.floor(Math.random() * this.state.numMaxPokedex);
      this.getTypePokeball(numPokedex, index);

      // this.setState(prevState => ({
      //   pokeballs: [
      //     ...prevState.pokeballs,
      //     <Pokeball
      //       index={index}
      //       onClickPokeball={this.handleClickPokeball}
      //       onRandomNumPokedex={numPokedex}
      //       typePokeBall={typePokeBall}
      //     />
      //   ]
      // }));
    }
  };
}

export default Home;

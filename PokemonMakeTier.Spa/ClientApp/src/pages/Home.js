import React from "react";

import "./styles/Home.css";
import Pokeball from "../components/Pokeball";
import api from "../api";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeballs: [],
      numPokeballs: 20,
      numMaxPokedex: 809,
      updatePokeballs: true,
      onRegister: false,
      form: {
        UserName: "",
        Password: "",
        UserProfileId: 0
      }
    };
  }

  handleOpenRegister = e => {
    this.setState({
      onRegister: true
    });
    console.log("registrarse CLICK");
  };

  handleOpenLogin = e => {
    this.setState({
      onRegister: false
    });
    console.log("login CLICK");
  };

  getTypePokeball = async (numPokedex, index) => {
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
      const STARTER_IDS = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        252,
        253,
        254,
        255,
        256,
        257,
        258,
        259,
        260,
        387,
        388,
        389,
        390,
        391,
        392,
        393,
        394,
        395,
        495,
        496,
        497,
        498,
        499,
        500,
        501,
        502,
        503,
        722,
        723,
        724,
        725,
        726,
        727,
        728,
        729,
        730
      ];

      const pokeCo = await api.pokemon.co.detail(numPokedex);
      let sumStatBase = 0;
      let typePokeBall = "";

      const legendary = LEGENDARY_IDS.some(item => {
        return item == pokeCo.id;
      });
      const starter = STARTER_IDS.some(item => {
        return item == pokeCo.id;
      });

      if (legendary) {
        typePokeBall = "master";
      } else if (starter) {
        typePokeBall = "great";
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
            isStarter={starter}
          />
        ]
      }));
    } catch (error) {
      console.log(error);
    }
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
    if (this.state.pokeballs.length > 0 && this.state.updatePokeballs) {
      return (
        <div className="Home">
          {this.state.pokeballs.map((pokeball, i) => {
            return <React.Fragment key={i}>{pokeball}</React.Fragment>;
          })}
          {this.state.onRegister && (
            <RegisterModal
              formValues={this.state.form}
              onLogin={this.handleOpenLogin}
            />
          )}
          {!this.state.onRegister && (
            <LoginModal onRegister={this.handleOpenRegister} />
          )}
        </div>
      );
    }

    return (
      <div className="Home">
        <LoginModal />
      </div>
    );
  }

  componentDidMount() {
    this.createPokeballs();
    this.idInterval = setInterval(() => {
      // const pokeballsBack = this.state.pokeballs;
      this.setState({ pokeballs: [] });
      // this.setState({ pokeballs: pokeballsBack });this.createPokeballs();
      this.createPokeballs();
      console.log(this.state.pokeballs);
    }, 180000);
  }

  createPokeballs = async () => {
    for (let index = 1; index <= this.state.numPokeballs; index++) {
      const numPokedex = Math.floor(Math.random() * this.state.numMaxPokedex);
      await this.getTypePokeball(numPokedex, index);
    }
  };

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }
}

export default Home;

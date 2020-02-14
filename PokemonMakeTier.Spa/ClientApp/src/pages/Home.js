import React from "react";

import "./styles/Home.css";
import Pokeball from "../components/Pokeball";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeballs: [],
      numPokeballs: 20
    };
  }

  handleClickPokeball = dexId => {
    alert("POKEMON!" + dexId);
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

  createPokeballs = () => {
    for (let index = 1; index <= this.state.numPokeballs; index++) {
      this.setState(prevState => ({
        pokeballs: [
          ...prevState.pokeballs,
          <Pokeball
            index={index}
            onClickPokeball={() => this.handleClickPokeball(index)}
          />
        ]
      }));
    }
  };
}

export default Home;

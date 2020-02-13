import React from "react";

import "./styles/Home.css";
// import "../components/styles/Pokeball.css";

import Pokeball from "../components/Pokeball";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeballs: [],
      numPokeballs: 50
    };
  }

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

  // handleAnimation = index => {
  //   let to = {
  //     x: Math.random() * (index % 2 === 0 ? -11 : 11),
  //     y: Math.random() * 12
  //   };

  //   const keyframes = [
  //     { transform: "translate(0, 0)" },
  //     { transform: `translate(${to.x}rem, ${to.y}rem)` }
  //   ];
  //   const options = {
  //     duration: (Math.random() + 1) * 2000, // random duration
  //     direction: "alternate",
  //     fill: "both",
  //     iterations: Infinity,
  //     easing: "ease-in-out"
  //   };

  //   return keyframes, options;
  // };

  componentDidMount() {
    this.createPokeballs();
  }

  createPokeballs = () => {
    for (let index = 1; index <= this.state.numPokeballs; index++) {
      // const element = <Pokeball />;
      // element.animate(() => this.handleAnimation(index));

      // let ball = document.createElement("div");
      // let button = ball.appendChild(document.createElement("div"));
      // ball.classList.add("ball");
      // ball.classList.add("poke");
      // ball.setAttribute("id", { index });
      // button.classList.add("pokeball-btn");

      this.setState(prevState => ({
        // pokeballs: [...prevState.pokeballs, ball]
        // pokeballs: [...prevState.pokeballs, element]
        pokeballs: [...prevState.pokeballs, <Pokeball index={index} />]
      }));
    }
  };
}

export default Home;

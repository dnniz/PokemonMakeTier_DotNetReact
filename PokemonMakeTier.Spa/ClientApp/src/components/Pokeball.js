import React from "react";

import "./styles/Pokeball.css";
import { keyframes } from "styled-components";
import styled from "styled-components";

function Pokeball(props) {
  let to = {
    x: Math.random() * (props.index % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };
  let spin = keyframes` from {
    transform:  translate(0, 0);
  }

  to {
    transform: translate(${to.x}rem, ${to.y}rem);
  }
`;

  //${(Math.random() + 1) * 2000}s

  const Move = styled.div`
    animation: ${spin} 2s ease-in-out alternate both infinite;
  `;
  //`${keyframes} 2s ease-in-out alternate both infinite`
  // const Spin = {
  //   animation: `${spin} 2s ease-in-out alternate both infinite`
  // };

  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;

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

  //   return { keyframes, options };
  // };

  return (
    <Move>
      <div
        className="ball poke"
        // animation={() => this.handleAnimation(this.props.onAnimate)}
      >
        <div className="pokeball-btn"></div>
      </div>
    </Move>
  );
}

export default Pokeball;

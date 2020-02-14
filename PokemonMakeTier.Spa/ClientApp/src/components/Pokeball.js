import React, { useState, useEffect } from "react";

import "./styles/Pokeball.css";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { Route } from "react-router-dom";
import "animate.css";

function useMovePokeball(index) {
  const [prevVector, setPrevVector] = useState({
    x: 0,
    y: 0
  });

  const [nextVector, setNextVector] = useState({
    // x: 0,
    // y: 0
    x: Math.random() * (index % 2 === 0 ? -1 * index : index),
    y: Math.random() * (index % 2 === 0 ? -1 * index : index)
  });

  useEffect(() => {
    const idInterval = setTimeout(() => {
      setPrevVector({ x: nextVector.x, y: nextVector.y });
      setNextVector({
        x: Math.random() * (index % 2 === 0 ? -1 * index : index),
        y: Math.random() * (index % 2 === 0 ? -1 * index : index)
      });
    }, 8000);

    return () => clearTimeout(idInterval);
  });

  return [prevVector.x, prevVector.y, nextVector.x, nextVector.y];
}

function Pokeball(props) {
  const [prevX, prevY, nextX, nextY] = useMovePokeball(props.index);
  const [fadeIn, setFadeIn] = useState(true);

  let move = keyframes`
                    from {
                      transform:  translate(${prevX}vw, ${prevY}vh);
                    }
                    to {
                      transform: translate(${nextX}vw, ${nextY}vh);
                    }
                    `;

  const Move = styled.div`
    animation: ${move} 8s ease-out alternate both infinite;
  `;

  return (
    <Move>
      <div className={fadeIn ? "ball poke" : "ball animated swing"}>
        <span className={fadeIn ? "spanImage fadeOut" : "spanImage fadeIn"}>
          <img
            className="pokeImage"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.onRandomNumPokedex}.png`}
          ></img>
        </span>
        <div
          className={fadeIn ? "pokeball-btn" : ""}
          onClick={() => {
            setFadeIn(false);
          }}
        ></div>
      </div>
    </Move>
  );
}

export default Pokeball;

/*
OTROS EJEMPLOS


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

  //   return keyframes, options;
  // };

*/

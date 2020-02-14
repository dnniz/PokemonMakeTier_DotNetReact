import React, { useState, useEffect } from "react";

import "./styles/Pokeball.css";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { Route } from "react-router-dom";

function useMovePokeball(index) {
  const [prevVector, setPrevVector] = useState({
    x: 0,
    y: 0
  });

  const [nextVector, setNextVector] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const idInterval = setTimeout(() => {
      setPrevVector({ x: nextVector.x, y: nextVector.y });
      setNextVector({
        x: Math.random() * (index % 2 === 0 ? -1 * index : index),
        y: Math.random() * (index % 2 === 0 ? -1 * index : index)
      });
    }, 8000);

    //x: Math.random() * (index % 2 === 0 ? -1 * index : index) < 15? cantidad * Math.random() :  (index % 2 === 0 ? -1 * index : index
    //y: Math.random() * (index % 2 === 0 ? -1 * index : index) < 15? cantidad * Math.random() :  (index % 2 === 0 ? -1 * index : index)

    return () => clearTimeout(idInterval);
  });

  return [prevVector.x, prevVector.y, nextVector.x, nextVector.y];
}

function Pokeball(props) {
  const [prevX, prevY, nextX, nextY] = useMovePokeball(props.index);

  let move = keyframes`
                    from {
                      transform:  translate(${prevX}vw, ${prevY}vh);
                    }
                    to {
                      transform: translate(${nextX}vw, ${nextY}vh);
                    }
                    `;

  // let move = keyframes`
  //                   from {
  //                     transform:  translate(${prevX}rem, ${prevY}rem);
  //                   }
  //                   to {
  //                     transform: translate(${nextX}rem, ${nextY}rem);
  //                   }
  //                   `;

  //   const Move = styled.div`
  //   animation: ${move} 4s ease-in-out alternate both infinite;
  // `;

  const Move = styled.div`
    animation: ${move} 8s ease-out alternate both infinite;
  `;

  return (
    <Move>
      <div className="ball poke">
        <div className="pokeball-btn" onClick={props.onClickPokeball}></div>
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

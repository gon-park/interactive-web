import React, { useState, useEffect } from 'react';

import { CardList } from './card';

import './styles/rotateMenu.css';

export const ShiftCards = () => {
  const cardDescription = [
    {
      color: "red",
      link: "red"
    }, {
      color: "yellow",
      link: "yellow"
    }, {
      color: "green",
      link: "green"
    }, {
      color: "blue",
      link: "blue"
    }, {
      color: "black",
      link: "black"
    }, {
      color: "red",
      link: "red"
    }, {
      color: "yellow",
      link: "yellow"
    }, {
      color: "green",
      link: "green"
    }, {
      color: "blue",
      link: "blue"
    }, {
      color: "black",
      link: "black"
    }, {
      color: "red",
      link: "red"
    }, {
      color: "yellow",
      link: "yellow"
    }, {
      color: "green",
      link: "green"
    }, {
      color: "blue",
      link: "blue"
    }, {
      color: "black",
      link: "black"
    }, {
      color: "red",
      link: "red"
    }, {
      color: "yellow",
      link: "yellow"
    }, {
      color: "green",
      link: "green"
    }, {
      color: "blue",
      link: "blue"
    }, {
      color: "black",
      link: "black"
    }, {
      color: "red",
      link: "red"
    }, {
      color: "yellow",
      link: "yellow"
    }, {
      color: "green",
      link: "green"
    }, {
      color: "blue",
      link: "blue"
    }, {
      color: "black",
      link: "black"
    }, {
      color: "red",
      link: "red"
    }, {
      color: "yellow",
      link: "yellow"
    }, {
      color: "green",
      link: "green"
    }, {
      color: "blue",
      link: "blue"
    }, {
      color: "black",
      link: "black"
    }
  ];

  const [centerPosX, setCenterPosX] = useState(window.innerWidth / 2);
  const [centerPosY, setCenterPosY] = useState(window.innerHeight + 800);

  const [fromX, setFromX] = useState(0);
  const [fromY, setFromY] = useState(0);

  const [baseDegree, setBaseDegree] = useState(0);
  const [isDown, setDown] = useState(false);

  const setCenter = () => {
    setCenterPosX(window.innerWidth / 2);
    setCenterPosY(window.innerHeight + 800);
  };

  const radiansToDegrees = (radians) => {
    return radians * 180 / Math.PI;
  }

  const initialize = () => {
    window.addEventListener('resize', setCenter);
  }

  useEffect(initialize, []);

  // const tempStyle = {
  //   width: "10px",
  //   height: "10px",
  //   top: 10 + "px",
  //   left: 10 + "px",
  //   zIndex: 1000,
  //   position: "fixed",
  //   border: "10px solid",
  //   borderColor: 'red'
  // }

  return (
    <div id="Base" className="App"
      onMouseDown={(it) => {
        setDown(true);
        setFromX(it.clientX);
        setFromY(it.clientY);
      }}
      onMouseUp={() => {
        setDown(false)
      }}
      onMouseMove={(it) => {
        if (isDown) {
          var toX = it.clientX;
          var toY = it.clientY;

          var toAngle = radiansToDegrees(Math.atan2(toY - centerPosY, toX - centerPosX));
          var fromAngle = radiansToDegrees(Math.atan2(fromY - centerPosY, fromX - centerPosX));

          setBaseDegree(baseDegree + toAngle - fromAngle);

          setFromX(it.clientX);
          setFromY(it.clientY);
        }
      }}>
      {<CardList
        center={[centerPosX, centerPosY]}
        cardDescription={cardDescription}
        baseDegree={baseDegree} />}
      {/* <div style={tempStyle}>{centerPosX},{centerPosY}</div> */}
    </div>
  );
}

import React from 'react';
// import logo from './logo.svg'
import './App.css'
import CardList from './cards/card'

function App() {

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
    }
  ];

  const radius = 200
  var baseDegree = 0

  var isMouseDown = false
  const onMouseMove = (it) => {
    if (isMouseDown == true) {
      baseDegree += it.movementX / 5
      console.log(baseDegree)
    }
    // console.log(it)
  }
  const onMouseUp = () => {
    isMouseDown = false
    console.log("Mouse up")
  }
  const onMouseDown = () => {
    isMouseDown = true
    console.log("Mouse down")
  }

  return (
    <div id="Base" className="App"
      style={{
        transform: "rotateX(" + baseDegree + "deg)",
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}

      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      onTouchMove={onMouseMove}
    >

      {<CardList globalRadius={radius} cardDescription={cardDescription} baseDegree={baseDegree} />}
    </div>
  );
}

export default App;

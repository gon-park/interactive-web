import React, { Component } from 'react';
import './App.css';
import CardList from './cards/card';

class ShiftCards extends Component {

  constructor(props) {
    super(props);

    this.cardDescription = [
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

    this.radius = 200;
    this.tempDegree = 0;
    this.isActive = false;
    this.fromX = 0;
    this.fromY = 0;
    this.state = {
      baseDegree: 0
    }
  }

  radiansToDegrees(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
  }

  onmousedown = (it) => {
    this.isActive = true;
    this.fromX = it.screenX;
    this.fromY = it.screenY;

    console.log("UP")
  }

  onmouseup = () => {
    this.isActive = false;

    console.log("DOWN")
  }

  onmousemove = (it) => {
    if (this.isActive) {
      var toX = it.screenX;
      var toY = it.screenY;

      var toAngle = this.radiansToDegrees(Math.atan2(500 - toY, toX - 500)) / 10;
      var fromAngle = this.radiansToDegrees(Math.atan2(500 - this.fromY, this.fromX - 500)) / 10;

      this.tempDegree = this.tempDegree + (toAngle - fromAngle);
      this.setState({ baseDegree: this.tempDegree });
      // console.log("MOVE\ttempDegree: " + this.tempDegree + "\tdeltaDegree : " + deltaDegree);
    }
  }

  render() {
    return (
      <div id="Base" className="App"
        onMouseUp={this.onmouseup}
        onMouseDown={this.onmousedown}
        onMouseMove={this.onmousemove}>
        {<CardList globalRadius={this.radius} cardDescription={this.cardDescription} baseDegree={this.state.baseDegree} />}
      </div>
    );
  }
}

export default ShiftCards;

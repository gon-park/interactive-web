import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {
  const { center, cardMeta } = props;

  const [flag, setFlag] = useState(false);

  var midX = center[0];
  var midY = center[1];

  var scale = ((midX * 2) + (midY - 800)) / (window.screen.width + window.screen.height)

  var cardWidth = 300;
  var cardHeight = cardWidth * 1.3;

  var globalRadius = 1200 * scale;

  var xy = {
    x: midX - (globalRadius * Math.sin((-cardMeta.degree * (Math.PI / 180)))) - (cardWidth / 2),
    y: midY - (globalRadius * Math.cos((-cardMeta.degree * (Math.PI / 180)))) - (cardHeight / 2),
  }

  var cardStyle = {
    backgroundColor: cardMeta.color,
    transform:
      "translate(" + xy.x + "px, " + xy.y + "px) "
      + "rotateZ(" + cardMeta.degree + "deg)"
      + "scale(" + (scale * flag ? 1.1 : 1) + ") ",
    zIndex: flag ? 100 : cardMeta.index,
    display: "block",
    position: "fixed",
    width: cardWidth + "px",
    height: cardHeight + "px",
  }

  return (
    <div
      key={cardMeta.index}
      style={cardStyle}
      onMouseOver={() => { setFlag(true) }}
      onMouseOut={() => { setFlag(false) }}>
    </div>
  );
}

Card.propTypes = {
  center: PropTypes.array.isRequired,
  cardMeta: PropTypes.object.isRequired,
}

export const CardList = (props) => {
  const { center, cardDescription, baseDegree } = props;

  var cardCount = cardDescription.length;
  var index = 0;

  const initialize = () => {
    cardDescription.map(((entry) => {
      entry['index'] = index++;
      entry['degree'] = baseDegree + index * (360 / cardCount);
    }));
  }

  initialize();

  return (
    Object.keys(cardDescription).map((key) => (
      <Card center={center} cardMeta={cardDescription[key]}></Card>
    ))
  )
}

CardList.propTypes = {
  center: PropTypes.array,
  cardDescription: PropTypes.array.isRequired,
  baseDegree: PropTypes.number.isRequired
}

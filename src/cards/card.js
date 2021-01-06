import { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';


function CardList({ globalRadius, cardDescription, baseDegree }) {
    const [flag, setFlag] = useState(false);

    const onMouseOver = () => setFlag(true);
    const onMouseOut = () => setFlag(true);

    var midX = 500
    var midY = 500

    var cardCount = cardDescription.length;
    var index = 0;

    console.log("baseDegree : " + baseDegree)

    return (
        <div
            style={{
                transform: "rotateZ(" + baseDegree + "deg)",
            }}>
            {
                cardDescription.map((value) => {
                    var degree = index++ * (360 / (cardCount - 1))

                    var xy = ((degree) => {
                        return {
                            x: midX + (globalRadius * Math.sin((-degree * (Math.PI / 180)))),
                            y: midY + (globalRadius * Math.cos((-degree * (Math.PI / 180)))),
                        }
                    })(degree);

                    // console.log(xy);

                    if (xy.y <= midY) {
                        return (
                            <div key={index} className="card-items"
                                style={{
                                    backgroundColor: value.color, transform: "translate(" + xy.x + "px, " + xy.y + "px) rotateZ(" + degree + "deg)",
                                    zIndex: flag ? 100 : 0,
                                    scale: flag ? 1.2 : 1
                                }}
                                onMouseOver={onMouseOver}
                                onMouseOut={onMouseOut}>
                            </div>
                        );
                    }
                })
            }
        </div>
    )
}

CardList.propTypes = {
    globalRadius: PropTypes.number.isRequired,
    cardDescription: PropTypes.array.isRequired,
    baseDegree: PropTypes.number.isRequired,
}

export default CardList;

import { useState } from 'react';

import shippyDefault from './img/shippy6.png';
import shippyRadio from './img/shippy2.png';
import shippyConfused from './img/shippy7.png';
import { shippy, floatingHeart } from "./styles.css";   

const heartColors = ['#ff5a8a', '#ffb3c6', '#ff6f91', '#ff99ac', '#ff477e'];

const Shippy = ({ variation = "default" }) => {
  const [hearts, setHearts] = useState([]);

  const handleShippyClick = (e) => {
    const createHeart = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const color = heartColors[Math.floor(Math.random() * heartColors.length)];
      const left = 60 + Math.random() * 20; // percent, for some horizontal randomness
      setHearts((prev) => [...prev, { id, color, left }]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 1400);
    }
    createHeart();
  };

  const imgSrc = ({
    default: shippyDefault,
    radio: shippyRadio,
    confused: shippyConfused,
  })[variation];

  return (
    <>
      {/* Floating hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className={floatingHeart}
          style={{
            left: `${h.left}%`,
            top: "60%",
            fontSize: "2.2rem",
            color: h.color,
            filter: "drop-shadow(0 2px 6px #0002)",
          }}
        >
          ♥
        </span>
      ))}
      <img
        className={shippy}
        src={imgSrc}
        height={300}
        alt="Shippy the pup smiles at you"
        onClick={handleShippyClick}
      />
    </>
  );
};

export default Shippy;

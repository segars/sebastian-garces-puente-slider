import React, { useState, useEffect } from "react";
import "./PruebasHooks.css"; // Importa tu archivo CSS

const PruebasHooks = ({ contador, setContador }) => {
  const arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://i.pinimg.com/originals/f4/7f/e2/f47fe2fcd9921b2c6871a32e5abd2437.jpg",
    "https://i.pinimg.com/564x/d9/e0/7c/d9e07c472fe6aea30d18b15e73933630.jpg",
    "https://i.pinimg.com/564x/df/03/6b/df036be0827996fc88cbf37bdac07927.jpg",
    "https://i.pinimg.com/564x/ed/0b/79/ed0b79e21aed78dede72c70ba1188dad.jpg"
  ];

  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(arr[contador]);
  }, [contador]);

  const handleNext = () => {
    if (contador < arr.length - 1) {
      setContador(contador + 1);
    }
  };

  const handlePrev = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="image-container">
      <button className="arrow-button left" onClick={handlePrev}>
        {"<"}
      </button>
      <img src={img} alt="" className="center-image" />
      <button className="arrow-button right" onClick={handleNext}>
        {">"}
      </button>
      <div className="counter">{contador}</div>
    </div>
  );
};

export default PruebasHooks;

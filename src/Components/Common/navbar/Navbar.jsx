import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Inicio');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <ul className="navbar">
      <li
        className={activeItem === 'Inicio' ? 'active' : ''}
        onClick={() => handleItemClick('Inicio')}
      >
        Inicio
      </li>
      <li
        className={activeItem === 'Nosotros' ? 'active' : ''}
        onClick={() => handleItemClick('Nosotros')}
      >
        Nosotros
      </li>
      <li
        className={activeItem === 'Contacto' ? 'active' : ''}
        onClick={() => handleItemClick('Contacto')}
      >
        Contacto
      </li>
    </ul>
  );
};

export default Navbar;

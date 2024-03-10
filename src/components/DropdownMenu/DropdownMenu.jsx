import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [isOpen, SetIsOpen] = useState(true);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-wrapper">
      <button className="button" onClick={toggleMenu}>
        Hizmetlerimiz
      </button>
      <div className={`${isOpen && 'show-dropdown'} dropdown-menu`}>
        <div className="dropdown-item">item4</div>
        <div className="dropdown-item">item5</div>
        <div className="dropdown-item">item6</div>
      </div>

      {/* {isOpen && (
      <ul className={`${isOpen && 'show-dropdown'} dropdown-menu`}>
        <li className='dropdown-item'>
          <Link to="/">Anasayfa111</Link>
        </li>
       
      </ul>
    )} */}
    </div>
  );
};

export default DropdownMenu;

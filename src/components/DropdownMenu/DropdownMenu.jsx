import React, { useState } from "react";
import "./DropdownMenu.css";
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-wrapper">
      <button className="button" onClick={toggleMenu}>
        Hizmetlerimiz
      </button>
      <div className={`${isOpen && 'show-dropdown'} dropdown-menu`}>
        <div className="dropdown-item">
        <Link to="/Konut">
            Konut Sigortası
          </Link>
        </div>
        <div className="dropdown-item">
        <Link to="/Dask">
            Dask Sigortası
          </Link></div>
        <div className="dropdown-item">
        <Link to="/Nakliyat">
            Nakliyat Sigortası
          </Link>
        </div>
        <div className="dropdown-item">
        <Link to="/Isyeri">
            İşyeri Sigortası
          </Link>
        </div>
        <div className="dropdown-item">
        <Link to="/Kasko">
            Kasko Sigortası
          </Link>
        </div>

        <div className="dropdown-item">
        <Link to="/Saglik">
            Sağlık Sigortası
          </Link>
        </div>
        <div className="dropdown-item">
        <Link to="/Trafik">
            Trafik Sigortası
          </Link>
        </div>
        <div className="dropdown-item">
        <Link to="/Insaat">
            İnşaat Sigortası
          </Link>
        </div>

      </div>

      
    </div>
  );
};

export default DropdownMenu;

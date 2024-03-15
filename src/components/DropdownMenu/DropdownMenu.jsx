import React, { useEffect, useRef, useState } from "react";
import "./DropdownMenu.css";
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const dropdownRef=useRef(null);
/* Mouse ile sitenin herhangi bir yerine dokunduğumuz zaman menü kapanıyor */
  useEffect(()=>{
    const closeMenu = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        SetIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeMenu);

    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }
  ,[]);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button className="button" onClick={toggleMenu}>
        Hizmetlerimiz
      </button>
      <div className={`${isOpen && 'show-dropdown'} dropdown-menu`}>
        <div className="dropdown-item">
          <Link to="/Konut">
            Ev Sigortaları
          </Link>
        </div>
        <div className="dropdown-item">
       
        <Link to="/Trafik">
            Araç Sigortaları
          </Link>
          
          <div className="dropdown-item-2">
          <Link to="/Trafik">
            -Zorunlu Trafik Sigortası
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Trafik">
            -Motorsiklet Trafik Sigortası 
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Kasko">
            -Kasko Sigortası 
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Yesilkart">
            -Yeşil kart Sigortası-Yurtdışı Araç Sigortası
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Garanti">
            -Garanti Sigortası
          </Link>
          </div>
          
        </div>
        <div className="dropdown-item">
        <Link to="/Hayat">
            Hayat Sigortaları
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
        <Link to="/Saglik">
            Sağlık Sigortaları
          </Link>

           <div className="dropdown-item-2">
          <Link to="/Saglik">
            -Tamamlayıcı Sağlık Sigortası
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Saglik">
            -Yabancılar Sağlık Sigortası
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Saglik">
            -Seyahat Sağlık Sigortası
          </Link>
          </div>

        </div>


        <div className="dropdown-item">    
        <Link to="/Sorumluluk">
        Sorumluluk Sigortaları          </Link> 

           <div className="dropdown-item-2">
          <Link to="/Sorumluluk">
            -Zorunlu Hekim Sorumluluk Sigortası
          </Link>
          </div>
          <div className="dropdown-item-2">
          <Link to="/Sorumluluk">
            -	Mesleki Sorumluluk Sigortaları
          </Link>
          </div>
   
          </div>

        </div>

      </div>
  );
};

export default DropdownMenu;

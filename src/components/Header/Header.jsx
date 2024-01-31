
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Header.css'
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }};
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./Grayscale_on_Transparent.png" alt="logo" width={200} />

        <div className="flexCenter h-menu">

          <a href="">
            Anasayfa
          </a>
          
        
          <a href="">
            Sıkça Sorulan Sorular
          </a>
          <a href="">
            Teklif Al
          </a>
          <button className='button'>
          <a href="">
            İletişim
          </a>
          </button>
       
        </div>
      </div>


    </section>
  )
}

export default Header



/*

<div className="dropdown">
<button onClick={toggleDropdown}>Hizmetlerimiz</button>
{isOpen && (
  <ul>
    <li>Seçenek 1</li>
    <li>Seçenek 2</li>
    <li>Seçenek 3</li>
  </ul>
)}
</div>*/
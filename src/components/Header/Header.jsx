
import React, { useState } from 'react'
import './Header.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./Grayscale_on_Transparent.png" alt="logo" width={200} />

        <div className="flexCenter h-menu">

          <Link to="/Home">
            Anasayfa
          </Link>
          
          <DropdownMenu/>
          <Link to="/Sorular">
            Sıkça Sorulan Sorular
          </Link>
          
          <Link to="">
            Teklif Al
          </Link>
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
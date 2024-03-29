
import React, { useState } from 'react'
import './Header.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Link } from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'



const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false)
const getMenuStyles=(menuOpened)=>{
if(document.documentElement.clientWidth <= 800)
{
  return {right: !menuOpened && "-100%"}
}

}
  return (
    <section className="h-wrapper">
      
      <div className="flexCenter paddings innerWidth h-container">
      <Link to="/Home">
        <img src="./Grayscale_on_Transparent.png" alt="logo" width={200} className='header_img'/>
        </Link>
    
     <OutsideClickHandler
     onOutsideClick={()=>{
      setMenuOpened(false);
     }}>
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >

          <Link to="/Home">
            Anasayfa
          </Link>
          
          <DropdownMenu/>
          <Link to="/Sorular">
            Sıkça Sorulan Sorular
          </Link>
          
          <Link to="/EmailPage">
            Teklif Al
          </Link>
          <button className='button'>
          <a href="#Contact">
            İletişim
          </a>
          </button>
       
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}></BiMenuAltRight>
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
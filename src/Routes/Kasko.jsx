import React from 'react'
import OnePageHero from '../components/OnePage/OnePageHero'
import { Helmet } from 'react-helmet'

const Kasko = () => {
  return (
 <> 
  <Helmet>
    <title>Kasko Sigortası</title>
    <meta name="description" content="Kasko motorlu kara taşıtlarının kaza, hırsızlık, yanma ve diğer risklere karşı güvence altına alındığı bir sigorta türüdür
    Trafik sigortasından farklı olarak Kasko sigortası zorunlu değildir Kasko sigortasının teminatları Kasko Temel Teminatlar Kasko Ek Teminatlar Kasko sigortası primi " />
  </Helmet>
 
 <OnePageHero
   cName="arac"
   heroImg="./OnePagePhoto/kasko.png"
   title="Kasko Sigortası"
   altInfo="Kasko Sigortası"
   text=""
   
   />
   
   <div className="paddings innerWidth  k-container">
     <div className="flexColStart inner-container">
       <span className="onePageText">
     
Kasko, <b>motorlu kara taşıtlarının kaza, hırsızlık, yanma ve diğer risklere karşı</b> güvence altına alındığı bir sigorta türüdür.<br/><br/>
<b>Trafik sigortasından farklı olarak:</b><br/><br/>
•	Kasko sigortası zorunlu değildir.<br/>
•	Kasko sigortası, kaza sonucunda kendi aracınızın hasarını da karşılayabilir.<br/>
•	Kasko sigortası, trafik sigortasına göre daha kapsamlı bir teminat sunar.<br/><br/>
<b>Kasko sigortasının teminatları:</b><br/><br/>
<b>•	Kasko Temel Teminatlar:</b><br/><br/>
o	Çarpışma<br/>
o	Çalınma<br/>
o	Yangın<br/>
o	Hırsızlık<br/><br/>

<b>•	Kasko Ek Teminatlar:</b><br/><br/>
o	İhtiyari Mali Mesuliyet<br/>
o	Araç Çevre Kirliliği Teminatı<br/>
o	Ferdi Kaza Sigortası<br/>
o	Hukuksal Koruma Sigortası<br/>
o	Yol Yardım Sigortası<br/><br/>
<b>Kasko sigortası primi:</b><br/><br/>
•	Aracın türüne, modeline, yaşına, motor hacmine, tescil il ve ilçesine, sürücülerin yaş ve kaza geçmişine ve seçilen teminatlara göre belirlenir.


       </span>
  
     </div> </div>
   
   
   
   
   </> 
  )
}

export default Kasko
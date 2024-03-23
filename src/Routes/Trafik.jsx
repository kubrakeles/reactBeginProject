import React from 'react'
import OnePageHero from '../components/OnePage/OnePageHero'
import { Helmet } from 'react-helmet';

const Trafik = () => {
  return (
    <>
    <Helmet>
    <title>Trafik Sigortası</title>
    <meta name="description" content="Zorunlu Trafik Sigortası Trafik sigortasının teminatları 	Motosiklet Trafik Sigortası Trafik sigortası, karayolu taşıtlarının neden olabileceği maddi ve bedeni zararları karşılayan zorunlu bir sigortadır. " />
  </Helmet>
    
    <OnePageHero
    cName="trafik"
    heroImg="./OnePagePhoto/trafik.png"
    title="Trafik Sigortaları"
    text=""

    
    />

<div className="paddings innerWidth  k-container">
     <div className="flexColStart inner-container">
       <span className="onePageText">
       <b>1)	Zorunlu Trafik Sigortası</b> <br/><br/>
Trafik sigortası, karayolu taşıtlarının neden olabileceği maddi ve bedeni zararları karşılayan zorunlu bir sigortadır.<br/><br/>
<b>Zorunlu olması:</b><br/>
•	2918 sayılı Karayolları Trafik Kanunu gereği, her motorlu aracın trafik sigortası yaptırması zorunludur.<br/>
•	Trafik sigortası yaptırmadan trafiğe çıkan araçlara para cezası uygulanır.<br/>
•	Trafik sigortası, trafik kazalarında karşı tarafa verilebilecek maddi ve bedeni zararları karşılar.<br/>
•	Kendi aracınızın hasarını karşılamaz.<br/><br/>
<b>Trafik sigortasının teminatları:</b><br/>
<b>•	Maddi Hasar:</b> Kaza sonucunda karşı tarafın aracına veya mallarına verilen maddi zararları karşılar.<br/>
<b>•	Bedeni Hasar:</b> Kaza sonucunda karşı tarafta meydana gelen yaralanma veya ölümleri karşılar.<br/><br/>
<b>Trafik sigortası prim fiyatı;</b> Aracın türüne, modeline, yaşına, motor hacmine, tescil il ve ilçesine ve sürücülerin yaş ve kaza geçmişine göre belirlenir.<br/>
<br/>
<b>2)	Motosiklet Trafik Sigortası</b><br/><br/>
Motosiklet trafik sigortası, 2918 sayılı Karayolları Trafik Kanunu gereği, motorlu taşıtların kusurlu olduğu kazalarda üçüncü şahıslara verdiği zararları karşılayan zorunlu bir sigortadır.


       </span>
  
     </div> </div>
    </>
  )
}

export default Trafik
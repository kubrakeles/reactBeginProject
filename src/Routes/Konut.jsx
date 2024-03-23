import React from 'react'
import OnePageHero from '../components/OnePage/OnePageHero'
import { Helmet } from 'react-helmet'
const Konut = () => {
  return (
   <>
   
   <Helmet>
    <title>Konut Sigortası</title>
    <meta name="description" content=" Ev sigortası Ev sigortasının kapsamı Yangın Hırsızlık Su Baskını Doğal Afetler Cam Kırılması
    Kişisel Sorumluluk Ev sigortası, evinizi ve eşyalarınızı yangın, hırsızlık, su baskını gibi birçok riske karşı güvence altına alan bir sigorta türüdür." />
  </Helmet>
   <OnePageHero

      cName="konut"
      heroImg="./OnePagePhoto/konut.png"
      title="Ev Sigortası"
      altInfo="Konut Sigortası"
      text="" />
      <div className="paddings innerWidth  k-container">
       <div className="flexColStart inner-container">
         <span className="onePageText">
         Ev sigortası, evinizi ve eşyalarınızı yangın, hırsızlık, su baskını gibi birçok riske karşı güvence altına alan bir sigorta türüdür.<br/> Ev sahibi veya kiracı olmanız fark etmeksizin, ev sigortası yaptırmak, beklenmedik bir durumda maddi kayıplar yaşamanızı önleyebilir.<br/><br/>
<b>Ev Sigortasının Kapsamı:</b><br/>
Ev sigortasının kapsamı, sigorta şirketlerine ve seçtiğiniz poliçeye göre değişiklik gösterebilir.<br/><br/> Genel olarak:<br/><br/>
<b>•	Yangın:</b> Yangın sonucu evinize ve eşyalarınıza gelebilecek zararlar<br/>
<b>•	Hırsızlık:</b> Hırsızlık sonucu eşyalarınızın çalınması veya hasar görmesi<br/>
<b>•	Su Baskını:</b> Su baskını veya sel sonucu evinize ve eşyalarınıza gelebilecek zararlar<br/>
<b>•	Doğal Afetler:</b> Deprem, fırtına gibi doğal afetler sonucu evinize ve eşyalarınıza gelebilecek zararlar<br/>
<b>•	Cam Kırılması:</b> Evinizdeki camların kırılması sonucu oluşabilecek zararlar<br/>
<b>•	Kişisel Sorumluluk:</b> Komşularınıza veya üçüncü kişilere verebileceğiniz zararlar<br/>

         </span>
         <span></span>
         <span></span>
       </div> </div></>
   
  
  )
}

export default Konut
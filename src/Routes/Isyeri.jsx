import React from 'react'
import OnePageHero from '../components/OnePage/OnePageHero'
import { Helmet } from 'react-helmet'

const Isyeri = () => {
  return (
    <>
    <Helmet>
    <title>İş yeri Sigortası</title>
    <meta name="description" content="İş yeri sigortaları İş Kesintisi Yasal Sorumluluk İş yeri Sigortasının Kapsamı Yangın Hırsızlık Su Baskını Doğal Afetler Cam Kırılması " />
  </Helmet>
    
    <OnePageHero

    cName="hayat"
    heroImg="./OnePagePhoto/işyeri.png"
    title="İş yeri Sigortası"
    altInfo="İş yeri Sigortası"
    text="" />
    <div className="paddings innerWidth  k-container">
     <div className="flexColStart inner-container">
       <span className="onePageText">
       İş yeri sigortaları, <b>iş yerinizi ve işyerinizdeki demirbaş, makine-tesisat veya cam-emtia gibi varlıklarınızı</b> çeşitli risklere karşı güvence altına alan bir sigorta türüdür. Bu sigorta sayesinde, işyerinizde meydana gelebilecek <b>yangın, hırsızlık, su baskını, doğal afetler, grev, lokavt, kargaşa, halk hareketleri, terör </b>gibi durumlarda maddi kayıplar yaşamanızı önleyebilirsiniz.<br/><br/>
<b>İş yeri Sigortasının Kapsamı:</b><br/><br/>
İş yeri sigortasının kapsamı, sigorta şirketlerine ve seçtiğiniz poliçeye göre değişiklik gösterebilir. <b>Genel olarak:</b><br/><br/>
<b>•	Yangın:</b> Yangın sonucu işyerinize ve demirbaşlarınıza gelebilecek zararlar<br/>
<b>•	Hırsızlık:</b> Hırsızlık sonucu demirbaşlarınızın çalınması veya hasar görmesi<br/>
<b>•	Su Baskını:</b> Su baskını veya sel sonucu işyerinize ve demirbaşlarınıza gelebilecek zararlar<br/>
<b>•	Doğal Afetler:</b> Deprem, fırtına gibi doğal afetler sonucu iş yerinize ve demirbaşlarınıza gelebilecek zararlar<br/>
<b>•	Cam Kırılması:</b> İş yerinizdeki camların kırılması sonucu oluşabilecek zararlar<br/>
<b>•	Makine Kırılması:</b> Makinelerinizin arızalanması veya hasar görmesi<br/>
<b>•	İş Kesintisi:</b> İş yerinizde meydana gelecek bir hasar sonucu iş akışının durması ve bundan dolayı oluşacak maddi kayıplar<br/>
<b>•	Elektronik Cihaz Kırılması:</b> Bilgisayarlar, telefonlar gibi elektronik cihazlarınızın arızalanması veya hasar görmesi<br/>
<b>•	Yasal Sorumluluk:</b> Üçüncü kişilere verebileceğiniz zararlar<br/>

       </span>
       <span></span>
     
     </div> </div></>
  )
}

export default Isyeri
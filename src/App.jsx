import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Companies from "./components/Companies/Companies";
import { Route } from "react-router-dom";
import Sorular from "./Routes/Sorular";
import Home from "./Routes/Home";
import Konut from "./Routes/Konut"
import Kasko from "./Routes/Kasko";
import Yabancilar from "./Routes/Yabancilar";
import Trafik from "./Routes/Trafik";
import Saglik from "./Routes/Saglik";
import Nakliyat from  "./Routes/Nakliyat";
import Isyeri from  "./Routes/Isyeri";
import Sorumluluk from "./Routes/Sorumluluk";
import Dask from  "./Routes/Dask";
import Hayat from "./Routes/Hayat";
import Yesilkart from "./Routes/yesilkart";
import Garanti from "./Routes/Garanti";
import EmailPage from './Routes/EmailPage';
import { redirect } from "react-router-dom";


import "./App.css";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Header />
      </div>

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route  path="/Home" element={<Home />} />
        <Route  path="/Sorular" element={<Sorular />} />
        <Route  path="/Konut" element={<Konut />} />
        <Route  path="/Kasko" element={<Kasko />} />
        <Route  path="/Yabancilar" element={<Yabancilar />} />
        <Route  path="/Trafik" element={<Trafik />} />
        <Route  path="/Saglik" element={<Saglik />} />
        <Route  path="/Nakliyat" element={<Nakliyat />} />
        <Route  path="/Isyeri" element={<Isyeri />} />
        <Route  path="/Sorumluluk" element={<Sorumluluk />} />
        <Route  path="/Dask" element={<Dask />} />
        <Route  path="/Hayat" element={<Hayat />} />
        <Route  path="/Yesilkart" element={<Yesilkart />} />
        <Route  path="/Garanti" element={<Garanti />} />
        <Route  path="/EmailPage" element={<EmailPage />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;

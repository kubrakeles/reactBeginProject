import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes } from "react-router-dom";
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
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Sorular" element={<Sorular />} />
        <Route exact path="/Konut" element={<Konut />} />
        <Route exact path="/Kasko" element={<Kasko />} />
        <Route exact path="/Yabancilar" element={<Yabancilar />} />
        <Route exact path="/Trafik" element={<Trafik />} />
        <Route exact path="/Saglik" element={<Saglik />} />
        <Route exact path="/Nakliyat" element={<Nakliyat />} />
        <Route exact path="/Isyeri" element={<Isyeri />} />
        <Route exact path="/Sorumluluk" element={<Sorumluluk />} />
        <Route exact path="/Dask" element={<Dask />} />
        <Route exact path="/Hayat" element={<Hayat />} />
        <Route exact path="/Yesilkart" element={<Yesilkart />} />
        <Route exact path="/Garanti" element={<Garanti />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;

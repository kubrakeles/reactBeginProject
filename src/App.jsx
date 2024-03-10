import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Companies from "./components/Companies/Companies";
import { Route } from "react-router-dom";
import Sorular from "./Routes/Sorular";
import Home from "./Routes/Home";

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

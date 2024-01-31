import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import './App.css';
import Companies from "./components/Companies/Companies";
function App() {
  return (
    <div className="App">
   <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
        </div>
      
      <MainPage/>
      <Companies/>
      <MainPage/>
    </div>
  );
}

export default App;

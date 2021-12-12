import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Clubs } from "./pages/clubs/Clubs";
import {Stadiums} from "./pages/stadiums/Stadiums"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/clubs" element={<Clubs/>}/>  
        <Route path="/stadiums" element={<Stadiums/>}/>  
      </Routes>
    </Router>
  );
}

export default App;

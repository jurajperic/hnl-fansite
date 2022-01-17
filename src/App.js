import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Clubs } from "./pages/clubs/Clubs";
import {Stadiums} from "./pages/stadiums/Stadiums"
import {ClubInfo} from "./pages/clubInfo/ClubInfo"
import { Players } from "./pages/players/Players";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/clubs" element={<Clubs/>}/>  
        <Route path="/stadiums" element={<Stadiums/>}/>  
        <Route path="/clubs/:clubId" element={<ClubInfo/>}/>
        <Route path="/players" element={<Players/>}/>
      </Routes>
    </Router>
  );
}

export default App;

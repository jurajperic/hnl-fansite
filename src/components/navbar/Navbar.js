import React from "react";
import { GiSoccerKick } from "react-icons/gi";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <a className="logo-link nav-link" href="/">
          <div className="logo-box">
            <GiSoccerKick className="icon" size={70} />
            <h1>HNL Fanzone</h1>
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a className="nav-link" href="/">
              početna
            </a>
          </li>
          <li>
            <a className="nav-link" href="/league">
              liga
            </a>
          </li>
          <li>
            <a className="nav-link" href="/clubs">
              klubovi
            </a>
          </li>
          <li>
            <a className="nav-link" href="/stadiums">
              stadioni
            </a>
          </li>
          <li>
            <a className="nav-link" href="/players">
              igrači
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

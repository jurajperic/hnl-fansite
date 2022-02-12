import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useGlobalContext } from "../../../context";
import "./nextGame.css";

export const NextGame = () => {
  const { currentFixture } = useGlobalContext();
  const [game, setGame] = useState({});
  useEffect(() => {
    setGame(
      currentFixture.find((fixture) => fixture.result.includes("PM")) ||
        currentFixture[currentFixture.length - 1]
    );
  }, [currentFixture]);

  return (
    <table className="NextFixture-table">
      <thead className="table-headers">
        <tr>
          <td colSpan="5">Slijedeća utakmica</td>
        </tr>
      </thead>
      <tbody className="table-data">
        <tr>
          <td>
            <img
              className="td-img"
              src={game.firstTeamImg}
              alt={game.firstTeam}
            />
          </td>
          <td className="td-team">{game.firstTeam}</td>

          <td className="td-res">
            <div className="time">{game.result}</div>
            <div className="date">{game.date}</div>
          </td>
          <td className="td-team">{game.secondTeam}</td>
          <td>
            <img
              className="td-img"
              src={game.secondTeamImg}
              alt={game.secondTeam}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

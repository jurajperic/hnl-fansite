import React from "react";
import "../rankingTable/rankingTable.css";
import "./playersTable.css"
import { useGlobalContext } from "../../../context";

export const PlayersTable = () => {
    const {players} = useGlobalContext()
    return (
        <table className="players-table">
        <thead className="players-table-header table-headers">
            <tr className="header-tr">
                <td>#</td>
                <td>Br.Dresa</td>
                <td>Ime</td>
                <td>God.</td>
                <td>Nacionalnost</td>
                <td>Klub</td>
                <td>Vrijednost</td>
                <td>Pozicija</td>
            </tr>
        </thead>
        <tbody className="players-table-data">
        {players.map((player,index)=>{
              return <tr className="player-tr" key={index}>
                  <td className="num-td">{index+1}.</td>
                  <td className="num-td">{player.num}.</td>
                  <td className="name-td">{player.name}</td>
                  <td className="age-td">{player.age}</td>
                  <td className="nat-td"><img src={player.nat} alt="country" /></td>
                  <td className="gd-td">{player.club}</td>
                  <td className="pts-td">{player.price}</td>
                  <td className="pts-td">{player.position}</td>
              </tr>
          })}
        </tbody>
      </table>
    )
}

import React from 'react'
import './currentFixtureTable.css'
import { useGlobalContext } from "../../../context";
export const CurrentFixtureTable = () => {
    const { currentFixture } = useGlobalContext();
  return (
    <table className="currentFixture-table">
      <thead className="table-headers">
        <tr className="header-tr">
          <td colSpan="5">Trenutno Kolo</td>
        </tr>
      </thead>
      <tbody className="current-fixture-table-data">
        {currentFixture.map((match,index)=>{
          return <tr key= {index}>
            <td>
              <img
                className="td-img"
                src={match.firstTeamImg}
                alt={match.firstTeam}
              />
            </td>
            <td className="td-team">{match.firstTeam}</td>
  
            <td className="td-res">
              <div className="time">{match.result}</div>
              <div className="date">{match.date}</div>
            </td>
            <td className="td-team">{match.secondTeam}</td>
            <td>
              <img
                className="td-img"
                src={match.secondTeamImg}
                alt={match.secondTeam}
              />
            </td>
          </tr>
        })}
        
      </tbody>
    </table>
  )
}

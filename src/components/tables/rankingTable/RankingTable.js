import React from "react";
import "./rankingTable.css";
import { useGlobalContext } from "../../../context";
export const RankingTable = () => {
  const {tableItems} = useGlobalContext();
  return (
    <table className="ranking-table">
      <thead className="ranking-table-header table-headers">
        <tr className="header-tr">
          <td>#</td>
          <td>Klub</td>
          <td>Utakmice</td>
          <td>+/-</td>
          <td>Bod</td>
        </tr>
      </thead>
      <tbody className="ranking-table-data">
          {tableItems.map((item,index)=>{
              const {pos,img,nm,mtc,gd,pts} = item
              return <tr className="club-tr" key={index}>
                  <td className="position-td">{pos}.</td>
                  <td className="name-td"><a href={`/clubs/${nm.toLowerCase().replace(/\s/g, '')}`}><img className="img-rank"src={img} alt={nm} />  {nm}</a></td>
                  <td className="match-td">{mtc}</td>
                  <td className="gd-td">{gd}</td>
                  <td className="pts-td">{pts}</td>
              </tr>
          })}
      </tbody>
    </table>
  );
};

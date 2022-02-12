import React from "react";
import "./rankingTable.css";
import { useGlobalContext } from "../../../context";
export const RankingTable = (props) => {
  const bigTable=props.params
  const {tableItems} = useGlobalContext();
  return (
    <table className="ranking-table">
      <thead className=" table-headers">
        <tr className="header-tr">
          <td>#</td>
          <td>Klub</td>
          <td>Utakmice</td>
          {!bigTable || <td>Pobjede</td>}
          {!bigTable || <td>Izjednačeno</td>}
          {!bigTable || <td>Porazi</td>}
          {!bigTable || <td>Golovi</td>}
          <td>+/-</td>
          <td>Bod</td>
        </tr>
      </thead>
      <tbody className="ranking-table-data">
          {tableItems.map((item,index)=>{
              const {pos,img,nm,mtc,gd,pts,w,d,l,g} = item
              return <tr className="club-tr" key={index}>
                  <td className="position-td">{pos}.</td>
                  <td className="name-td"><a href={`/clubs/${nm.toLowerCase().replace(/\s/g, '')}`}><img className="img-rank"src={img} alt={nm} />  {nm}</a></td>
                  <td className="match-td">{mtc}</td>
                  {!bigTable || <td>{w}</td>}
                  {!bigTable || <td>{d}</td>}
                  {!bigTable || <td>{l}</td>}
                  {!bigTable || <td>{g}</td>}
                  <td className="gd-td">{gd}</td>
                  <td className="pts-td">{pts}</td>
              </tr>
          })}
      </tbody>
    </table>
  );
};

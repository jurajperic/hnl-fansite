import React from "react";
import "./clubInfo.css";
import {useEffect } from "react";
import { PlayersTable } from "../../components/tables/playersTable/PlayersTable";
import { useGlobalContext } from "../../context";
import { useParams } from "react-router-dom";
import clubsPreview from "../../data/clubsPreview";
import { useState } from "react/cjs/react.development";
import { Loading } from "../loading/Loading";
import stadiumsInfo from "../../data/stadiumsInfo";



export const ClubInfo = () => {
    const {fetchClubData,clubData,loading,setLoading,fetchPlayers} = useGlobalContext()
    const {clubId} = useParams()
    var myClub =  clubsPreview.find((club)=>club.id===clubId)
    const [club,setClub]=useState(myClub)
    const fetchClubInfoComponents = async() => {
        myClub = await clubsPreview.find((club)=>club.id===clubId)
        setClub(myClub)
        await fetchClubData(club.link)
        await fetchPlayers(club)
      }


      useEffect(() => {
        const fetchInfo=async()=>{
          setLoading(true)
        await fetchClubInfoComponents()  
          setLoading(false)
        }
        fetchInfo()
      }, [clubId,club])
    

    if(loading) return <Loading></Loading>
    return (
    <section className="clubInfo-section">
      <div className="clubInfo-container">
        <div className="first-part">
        <img
          className="club-logo"
          src={club.logo}
          alt={club.name}
        />
        <h1 className="club-name">{club.name}</h1>
        <div className="clubInfo-column">
          <p>Veličina ekipe: {clubData.size}</p>
          <p>Prosječno godina: {clubData.avgYears}</p>
          <p>Stranci: {clubData.foreigners}</p>
        </div>
        <div className="clubInfo-column">
          <p>Reprezentativci: {clubData.nationalPlayers}</p>
          <p>Stadion: <a className="stadium-link" href={`/stadiums/${club.stadium}`}>{stadiumsInfo.find(stad=>stad.id===club.stadium).name}</a></p>
          <p>Trener: {club.manager}</p>
        </div>
        </div>
        <div className="club-value">
            <h1>{clubData.value}</h1>
            <p>Ukupna Vrijednost</p>
        </div>
      </div>
      <PlayersTable></PlayersTable>
    </section>
  );
};

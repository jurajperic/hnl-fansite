import React from 'react';
import { useParams } from 'react-router-dom';
import stadiumsInfo from '../../data/stadiumsInfo';
import './stadiumInfo.css'
import clubsPreview from '../../data/clubsPreview';

export const StadiumInfo = () => {
  const {stadiumId} = useParams()
  
  return <div className='stadium-container' style={{backgroundImage:`url(${stadiumsInfo.find(stad=>stad.id===stadiumId).background})`}}>
      <aside className='stadium-info'>
          <h1>{stadiumsInfo.find(stad=>stad.id===stadiumId).name}</h1>
          <p>Kapacitet: {stadiumsInfo.find(stad=>stad.id===stadiumId).capacity}</p>
          <p>Vrsta Terena: {stadiumsInfo.find(stad=>stad.id===stadiumId).terrain}</p>
          <p>Korisnici: {clubsPreview.map((club)=>{
            if(club.stadium===stadiumId)
            return <>
            <a href={"/clubs/"+club.id}>{club.name}, </a>
            </>
            return<></>
          })
          }</p>
          <p>O stadionu: <br />{stadiumsInfo.find(stad=>stad.id===stadiumId).about}</p>
      </aside>
  </div>;
};

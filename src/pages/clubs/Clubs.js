import React, { useState } from 'react'
import { Card } from '../../components/card/Card'
import ClubsInfo from '../../data/ClubsInfo'
import './clubs.css'

export const Clubs = () => {
    return (
        <section className='clubs-section'>
            {ClubsInfo.map((club,index)=>{
                
                return <Card key={index} params={club}></Card>
            })}
        </section>
    )
}

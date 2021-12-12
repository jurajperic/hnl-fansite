import React, { useState } from 'react'
import { Card } from '../../components/card/Card'
import StadiumsInfo from '../../data/StadiumsInfo'


export const Stadiums = () => {
    return (
        <section className='clubs-section'>
            {StadiumsInfo.map((stadium,index)=>{
                
                return <Card key={index} params={stadium}></Card>
            })}
        </section>
    )
}

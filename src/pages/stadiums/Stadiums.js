import { Card } from '../../components/card/Card'
import stadiumsInfo from '../../data/stadiumsInfo'


export const Stadiums = () => {
    return (
        <section className='clubs-section'>
            {stadiumsInfo.map((stadium,index)=>{
                
                return <Card key={index} params={stadium}></Card>
            })}
        </section>
    )
}

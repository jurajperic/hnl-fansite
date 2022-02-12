import { Card } from '../../components/card/Card'
import clubsPreview from '../../data/clubsPreview'
import './clubs.css'

export const Clubs = () => {
    return (
        <section className='clubs-section'>
            {clubsPreview.map((club,index)=>{
                
                return <Card key={index} params={club}></Card>
            })}
        </section>
    )
}

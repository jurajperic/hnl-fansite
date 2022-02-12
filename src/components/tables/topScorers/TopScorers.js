import {React,useState} from 'react'
import { useGlobalContext } from '../../../context'

export const TopScorers = (props) => {
    const {scorers} = useGlobalContext();
    const [bound,setBound]=useState(0)
  return (<>
    <table className='top-scorers-table'>
        <thead className=" table-headers">
        <tr className="header-tr">
          <td>#</td>
          <td>Igrač</td>
          <td>Klub</td>
          <td>Br.Golova</td>
        </tr>
      </thead>
      <tbody className="ranking-table-data">
          {scorers.map((item,index)=>{
              if(index>=(props.short? 0 : bound*25)&& index<(props.short? 5 : bound*25+25)){
              const {name,club,goals} = item
              if(name){
              return <tr className="club-tr" key={index}>
                  <td className="position-td">{index+1}.</td>
                  <td className="player-td">{name}</td>
                  <td className="club-td">{club?<img className="img-rank"src={club} alt="club" />:<>Više klubova</>}</td>
                  <td className="goals-td">{goals}</td>
              </tr>
              }
              return<></>
              }
              return<></>
          })}
      </tbody>
    </table>
    <div className='more-div'>
    {props.short?<a href="/topscorers">Pogledaj Više</a>:<div className='btns'>{[...Array(5)].map((e,index)=><button type="button" onClick={()=>setBound(index)}>{index+1}</button>)}</div>}
    </div>
    </>
  )
}

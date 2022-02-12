import React, { useEffect } from 'react'
import { TopScorers } from '../../components/tables/topScorers/TopScorers'
import { useGlobalContext } from '../../context'
import { Loading } from '../loading/Loading'
import './moreTopScorers.css'
export const MoreTopScorers = () => {
    const {fetchTopScorers,loading,setLoading} = useGlobalContext()
    useEffect(() => {
      const fetchMoreTopScorers=async()=>{
        setLoading(true)
        await fetchTopScorers(false)
        setLoading(false)
      }
      fetchMoreTopScorers()
    }, [])
    if(loading)return <Loading></Loading>
  return (
    <div className='scorers-table'>
        <TopScorers short={false}></TopScorers>
    </div>
  )
}

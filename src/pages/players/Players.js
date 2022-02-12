import React from 'react'
import { useEffect } from 'react'
import { PlayersTable } from '../../components/tables/playersTable/PlayersTable'
import { useGlobalContext } from '../../context'
import { Loading } from '../loading/Loading'

export const Players = () => {
    const {fetchAllPlayers,loading,setLoading} = useGlobalContext()
    useEffect(() => {
        const fetchPlayersPage=async()=>{
            setLoading(true)
            await fetchAllPlayers()
            setLoading(false)
        }
        fetchPlayersPage()
    },[])
    if(loading)return <Loading></Loading>
    return (<>
    <PlayersTable></PlayersTable>
    </>
    )
}

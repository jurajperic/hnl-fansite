import React from 'react'
import { useEffect } from 'react'
import { PlayersTable } from '../../components/tables/playersTable/PlayersTable'
import { useGlobalContext } from '../../context'
import { Loading } from '../loading/Loading'

export const Players = () => {
    const {fetchAllPlayers,loading,setLoading} = useGlobalContext()
    useEffect(async() => {
        setLoading(true)
        await fetchAllPlayers()
        setLoading(false)
    }, [])
    if(loading)return <Loading></Loading>
    return (<>
    <PlayersTable></PlayersTable>
    </>
    )
}

import React from 'react'
import { NewsSlider } from '../../components/newsSlider/NewsSlider'
import { RankingTable } from '../../components/tables/rankingTable/RankingTable'
import './home.css'
import ReactPlayer from "react-player"
import { Loading } from '../loading/Loading'
import { useGlobalContext } from '../../context'
import { useEffect,useState } from 'react'
import { NextGame } from "../../components/tables/nextGame/NextGame"


const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdZuGHA8fV0oKQRCE4AYV0A&maxResults=1&order=date&type=video&key=AIzaSyAVLZCrkCb2HYyGhEzqKaK0K8Xm6Ak3sdw"
export const Home = () => {
    const {loading,fetchHomeTable,setLoading,fetchCurrentFixture} = useGlobalContext()
    const [video,setVideo]=useState("https://www.youtube.com/watch?v=")
    const fetchVideo = async () => {

        await fetch(url).then((res)=>{
            return res.json()
          }).then((data)=>setVideo(video+data.items[0].id.videoId))
          console.log("video fetched");
    }
    const fetchHomeScreenComponents = async() => {
      await fetchHomeTable()
      await fetchVideo()
      await fetchCurrentFixture()
      setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchHomeScreenComponents()
      },[]);
    if(loading) return <Loading/>
    return (
        <section className="home-page">
            <NewsSlider ></NewsSlider>
            <RankingTable ></RankingTable>
            <ReactPlayer className="newVideo"
            controls= {true}
            width="100%"
            url={video}/>
            <NextGame></NextGame>
        </section>
    )
}

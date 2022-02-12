import { React, useEffect } from "react";
import { RankingTable } from "../../components/tables/rankingTable/RankingTable";
import { useGlobalContext } from "../../context";
import { Loading } from "../loading/Loading";
import {CurrentFixtureTable} from "../../components/tables/currentFixture/CurrentFixtureTable"
import "./league.css";
import { TopScorers } from "../../components/tables/topScorers/TopScorers";
export const League = () => {
  const { fetchHomeTable, setLoading, loading,fetchCurrentFixture,fetchTopScorers } = useGlobalContext();
  useEffect( () => {

    const fetchLeague = async()=>{
      setLoading(true);
      await fetchHomeTable();
      await fetchCurrentFixture();
      await fetchTopScorers(true);
      setLoading(false);
    }
    fetchLeague()
  }, []);
  if (loading) return <Loading></Loading>;
  return (
    <section className="league-section">
      <div className="full-table">
        <RankingTable params={true}></RankingTable>
      </div>
      <div className="current-fixture">
          <CurrentFixtureTable></CurrentFixtureTable>
      </div>
      <div className="topscorers-less">
          <TopScorers  short={true}></TopScorers>
      </div>
    </section>
  );
};

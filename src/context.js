import React, { useState, useContext } from "react";
import JSSoup from "jssoup";
import clubsPreview from "./data/clubsPreview";

const tableUrl =
  "https://www.transfermarkt.com/1-hnl/tabelle/wettbewerb/KR1/saison_id/2021";

const currentFixtureUrl =
  "https://www.transfermarkt.com/1-hnl/startseite/wettbewerb/KR1";

const scorersUrl = 
  "https://www.transfermarkt.com/1-hnl/torschuetzenliste/wettbewerb/KR1/saison_id/2021/page/"

const AppContext = React.createContext();
const getPlayersAttrs = (items,pos,club)=>{
  return items.map((tag)=>{
    let position = pos
    
    while (tag.attrs.class!=='rn_nummer') {
      tag=tag.nextElement
    }
    let number=tag.text
    
    while(tag.attrs?.class!=='hauptlink'){
      tag=tag.nextElement
    }
    let name= tag.text.split(' ')
    name=name.length>1 ? (name[0]+' '+name[2]).split('&')[0] : name[0]
    while(tag.attrs?.class!=='zentriert'){
      tag=tag.nextElement
    }
    let age = tag.text
    
    while(tag.name!=='img'){
      tag=tag.nextElement
    }
    let nat = tag.attrs.src
    
    while(tag.name!=='a'){
      tag=tag.nextElement
    }
    let price = tag.text.split('&')[0]
    price = (price.endsWith('Th.') || price.endsWith('m')) ? price :null
    return({
      position:position,
      num:number,
      name:name,
      age:age,
      nat:nat,
      price:price,
      club:club
    })
    
  }
  )
  
}

const getScorers=(tag)=>{
        while(tag.name !== 'a'){
          tag=tag.nextElement;
        }
        const name = tag.text
        var count =0
        while(count !== 4){
          tag=tag.nextElement;
          if(tag.name==='td') count++
        }
        tag=tag.nextElement.nextElement
        const club = tag.attrs.src
        count=0
        while(count !== 2){
          tag=tag.nextElement;
          if(tag.name==='a') count++
        }
        const goals = tag.text
        return {
          name:name,
          club: club,
          goals:goals
        }
}
const MakeSoup = async (Url)=>{
    const res = await fetch(Url);
    const data = await res.text();
    return new JSSoup(data);
}

const AppProvider = ({ children }) => {
  const [tableItems, setTableItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentFixture, setCurrentFixture] = useState([]);
  const [clubData, setClubData] = useState({});
  const [players,setPlayers] = useState([]);
  const [scorers,setScorers]=useState([]);

  const fetchHomeTable = async () => {
    const soup = await MakeSoup(tableUrl);
    var tableItems = soup.findAll("tr");
    tableItems = tableItems.slice(12, 22);
    var items = tableItems.map((tag, index) => {
      let position = index + 1;
      let image = tag.nextElement.findNextSibling("td").nextElement.nextElement;
      let name = image.nextElement.nextElement;
      let matches = name.previousElement.findNextSibling("td").nextElement;
      let wins = matches.previousElement.findNextSibling("td").nextElement;
      let draws = wins.previousElement.findNextSibling("td").nextElement;
      let loses = draws.previousElement.findNextSibling("td").nextElement;
      let goals = loses.previousElement.findNextSibling("td");
      let goalDifference = goals.findNextSibling("td");
      let points = goalDifference.findNextSibling("td");
      return {
        pos: position,
        img: image.attrs.src,
        nm: name.text,
        mtc: matches.text,
        w: wins.text,
        d: draws.text,
        l: loses.text,
        g: goals.text,
        gd: goalDifference.text,
        pts: points.text,
      };
    });
    setTableItems(items);
  };

  const fetchCurrentFixture = async () => {
    const soup =await  MakeSoup(currentFixtureUrl);;
    var fixtures = soup.findAll("tr");

    fixtures = fixtures.slice(32, 37);
    var items = fixtures.map((tag) => {
      let day = tag.nextElement;
      let firstTeam = day.findNextSibling("td").findNextSibling("td")
        .nextElement.nextElement;
      let firstTeamImg =
        firstTeam.nextElement.nextElement.nextElement.nextElement.nextElement;
      let result = firstTeamImg.nextElement;
      let secondTeamImg =
        result.findNextSibling("td").nextElement.nextElement.nextElement
          .nextElement;
      let secondTeam = secondTeamImg.nextElement.nextElement;

      return {
        date: day.text.replaceAll(" ", "").replace("\n", ""),
        firstTeam: firstTeam.text,
        firstTeamImg: firstTeamImg.attrs.src,
        result: result.text,
        secondTeamImg: secondTeamImg.attrs.src,
        secondTeam: secondTeam.text,
      };
    });
    setCurrentFixture(items);
  };

  const fetchClubData = async (url) => {
    const soup = await MakeSoup(url);
    var dataItems = soup.findAll("span", "dataValue");
    var value = soup.find("span",'waehrung').previousElement
    const state = {
      size:dataItems[0].text.trim(),
      avgYears: dataItems[1].text.trim(),
      foreigners: dataItems[2].text.split('&')[0],
      nationalPlayers: dataItems[3].text,
      value: value.text.split('T')[0]
    }
    setClubData(clubData=>({
      ...clubData,
      ...state
    }));
  };
  const fetchPlayers = async(club) =>{
    const soup = await MakeSoup(club.link);
    var tableData = soup.findAll('td')
    var items = tableData.filter((item)=>item.attrs.title==='Goalkeeper')
    const gks= getPlayersAttrs(items,'GK',club.name)
    items = tableData.filter((item)=>item.attrs.title==='Defender')
    const def = getPlayersAttrs(items,'DEF',club.name)
    items = tableData.filter((item)=>item.attrs.title==='midfield')
    const mid = getPlayersAttrs(items,'MID',club.name)
    items = tableData.filter((item)=>item.attrs.title==='attack')
    const fwd = getPlayersAttrs(items,'FWD',club.name)
    
    setPlayers(gks.concat(def,mid,fwd))
    return gks.concat(def,mid,fwd)
  }
  const fetchAllPlayers = async()=>{ 
      var allPLayers =[]
     for (let index = 0; index < clubsPreview.length; index++) {
       const element = clubsPreview[index];
       const clubPlayers = await fetchPlayers(element)
       allPLayers.push(...clubPlayers)
     }
     allPLayers.sort((player1,player2)=>{
       if(player1.price===null) return 1
       if(player2.price===null) return -1
       var price1 = player1.price.endsWith('Th.') ? parseFloat(player1.price.slice(1,-3)) : parseFloat(player1.price.slice(1,-1))*1000
       var price2 = player2.price.endsWith('Th.') ? parseFloat(player2.price.slice(1,-3)) : parseFloat(player2.price.slice(1,-1))*1000
       if(price1<price2) return 1
       else return -1
     })
    setPlayers(allPLayers)
        
    }

  const fetchTopScorers = async(short)=>{
    var scorers = []
    if(short){
      const soup = await MakeSoup(scorersUrl+'1');
      const tableItems = soup.findAll('tr').slice(14,87).filter((item,index)=>index%3===0);
      for (let index = 0; index < tableItems.length; index++) {
        scorers.push(getScorers(tableItems[index]))
      }
      
    }
    else{
      for (let index = 1; index <6; index++) {
        const soup = await MakeSoup(scorersUrl+index);
        const tableItems = soup.findAll('tr').slice(14,87).filter((item,index)=>index%3===0);
        for (let index = 0; index < tableItems.length; index++) {
          scorers.push(getScorers(tableItems[index]))
        }
      }
    }
    
    setScorers(scorers);
  }
  
  return (
    <AppContext.Provider
      value={{
        fetchHomeTable,
        tableItems,
        loading,
        setLoading,
        fetchCurrentFixture,
        currentFixture,
        fetchClubData,
        clubData,
        fetchPlayers,
        players,
        fetchAllPlayers,
        setPlayers,
        fetchTopScorers,
        scorers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

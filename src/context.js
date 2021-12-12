import React, { useState, useContext } from "react";
import JSSoup from "jssoup";


const tableUrl =
  "https://www.transfermarkt.com/1-hnl/tabelle/wettbewerb/KR1/saison_id/2021";

const currentFixtureUrl = "https://www.transfermarkt.com/1-hnl/startseite/wettbewerb/KR1"

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [tableItems, setTableItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentFixture,setCurrentFixture] = useState([])
  const fetchHomeTable = async () => {
    const res = await fetch(tableUrl);
    const data = await res.text();
    const soup = new JSSoup(data);
    var tableItems = soup.findAll("tr");
    tableItems = tableItems.slice(12, 22);
    var items = tableItems.map((tag, index) => {
      let position = index + 1;
      let image = tag.nextElement.findNextSibling('td').nextElement.nextElement
      let name = image.nextElement.nextElement;
      let matches = name.previousElement.findNextSibling('td').nextElement;
      let wins = matches.previousElement.findNextSibling('td').nextElement
      let draws =wins.previousElement.findNextSibling('td').nextElement
      let loses = draws.previousElement.findNextSibling('td').nextElement
      let goals=loses.previousElement.findNextSibling('td')
      let goalDifference = goals.findNextSibling('td')
      let points = goalDifference.findNextSibling('td')
      return {
        pos: position,
        img: image.attrs.src,
        nm: name.text,
        mtc: matches.text,
        w: wins.text,
        d: draws.text,
        l: loses.text,
        g:goals.text,
        gd: goalDifference.text,
        pts: points.text
      };
    });
    setTableItems(items)
    console.log("fetched table");
    
  };

  const fetchCurrentFixture = async() =>{
    const res = await fetch(currentFixtureUrl);
    const data = await res.text();
    const soup = new JSSoup(data);
    var fixtures = soup.findAll("tr");
    
    fixtures = fixtures.slice(32, 37);
    var items = fixtures.map((tag,index) => {
      let day = tag.nextElement
      let firstTeam = day.findNextSibling('td').findNextSibling('td')
      .nextElement.nextElement
      let firstTeamImg=firstTeam.nextElement.nextElement.nextElement.nextElement.nextElement
      let result = firstTeamImg.nextElement
      let secondTeamImg = result.findNextSibling('td').nextElement.nextElement.nextElement.nextElement
      let secondTeam = secondTeamImg.nextElement.nextElement

      return {
        date:day.text.replaceAll(' ','').replace('\n',''),
        firstTeam:firstTeam.text,
        firstTeamImg:firstTeamImg.attrs.src,
        result:result.text,
        secondTeamImg:secondTeamImg.attrs.src,
        secondTeam:secondTeam.text
      }
      
    })
    setCurrentFixture(items)
    console.log("fetched fixtures");
  }

  return (
    <AppContext.Provider value={{ fetchHomeTable,tableItems,loading,setLoading,fetchCurrentFixture,currentFixture }}>
      {children}
    </AppContext.Provider>
  );
};



export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

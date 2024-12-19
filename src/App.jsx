import './App.css';
import { useEffect, useState } from "react";
import * as starshipService from './services/starshipService';
import StarshipList from "./components/StarshipList";
import StarshipSearch from './components/StarshipSearch'

const App = () => {
  const [starShips, setStarShips] = useState([]);

  const fetchAllData = async (type) => {
    const data = await starshipService.showAll(type);
    setStarShips(data.results);
  };

  const fetchData = async (name) => {
    const data = await starshipService.show(name);
    setStarShips(data.results);
  };

  useEffect(() => {
    fetchAllData('starships');
  }, []);

  return (
    <main>
      <h1>StarShips API</h1>
      <StarshipSearch fetchData={fetchData}/>
      <StarshipList starShips={starShips} />
    </main>
  );
};

export default App;

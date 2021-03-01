import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './components/Details';
import { List } from './components/List';
import CreateRobot from './components/CreateRobot';
import FightQueue from './components/FightQueue';
import ResultList from './components/ResultList';

function App() {

  const [robots, setRobots] = useState([]);
  const [activeRobot, setActiveRobot] = useState({});
  const [fightQueue, setFightQueue] = useState([]);
  const [battleResults, setBattleResults] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/robots'
      );
      setRobots(result.data);
      setActiveRobot(result.data[0]);
    }
    fetchData();
  }, []);
  

  return (
    <div className='App'>
      <div className='drawer'>
        <CreateRobot className="form" setRobots={setRobots} robots={robots} />
        
        <List 
          robotList={robots} 
          setRobots={setRobots}
          
          setActiveRobot={setActiveRobot}/>
        <Details robot={activeRobot} fightQueue={fightQueue} setFightQueue={setFightQueue} />
        
      </div>
      <div>
      {(fightQueue.length > 0) && <FightQueue fightQueue={fightQueue} battleResults={battleResults} setBattleResults={setBattleResults}  />}
        {(battleResults.length > 0) && <ResultList battleResults={battleResults} />}
      </div>
    </div>
  );
}

export default App;

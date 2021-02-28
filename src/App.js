import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './components/Details'
import { List } from './components/List'
import CreateRobot from './components/CreateRobot'

function App() {

  const [robots, setRobots] = useState([]);
  const [activeRobot, setActiveRobot] = useState({});


  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/robots'
      );
      console.log(result.data);
      setRobots(result.data);
      setActiveRobot(result.data[0]);
    }
    fetchData();
  }, []);
  

  return (
    <div className='App'>
      
      <CreateRobot className="form" setRobots={setRobots} robots={robots} />
      
      <List 
        robotList={robots} 
        setRobots={setRobots}
        
        setActiveRobot={setActiveRobot}/>
      <Details robot={activeRobot} />
    </div>
  );
}

export default App;

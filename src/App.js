import './App.css';
import { useState } from 'react';
import Details from './components/Details'
import { List } from './components/List'
import CreateRobot from './components/CreateRobot'

function App() {

const initialValues = [
  {
    name:'R2-d2',
    color:'gray',
    attack: 'lazer',
    defense: 'force field'
  },
  {
    name:'robby the robot',
    color:'gray',
    attack: 'lazer',
    defense: 'force field'
  },
  {
    name:'optimus prime',
    color:'red',
    attack: 'sword',
    defense: 'shield'
  },
  ];

  const [robots, setRobots] = useState(initialValues);
  const [activeRobot, setActiveRobot] = useState(initialValues[0]);

  

  return (
    <div className='App'>
      
      <div>
      <CreateRobot setRobots={setRobots} robots={robots} />
      <h3>All Robots</h3>
      <List 
        robotList={robots} 
        setRobots={setRobots}
        
        setActiveRobot={setActiveRobot}/>
      <Details robot={activeRobot} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';


export function List({
  robotList,
  setRobots, 
  setActiveRobot
}){

  const handleDelete = (robot) =>{
    const result = robotList.filter(r => {
      return r.name !== robot.name
    });
    setRobots(result);
  }

  const handleSetActiveRobot = (robot) => {
    console.log(robot);
    setActiveRobot(robot);
  }

  return (
    <div className="list">
      <h3>All Robots</h3>
      {robotList.map( robot =>
        <div 
        onClick={() => handleSetActiveRobot(robot)} 
        key={robot.name} >
          <span className="robot-detail">{robot.name}</span>
          <button 
            onClick={() => handleDelete(robot)}>
              delete
          </button>
        </div>
      )}
    </div>
  )
} 
import React from 'react';


export default function Details({robot, fightQueue, setFightQueue}){
  const { name, color, attack, defense } = robot;
  
  const handleFightQueue = (robot) => {
    const robots  = new Set([...fightQueue, robot])
    setFightQueue(Array.from(robots));
  }


  return (
    <div className="details">
      <p>Name: <span className="robot-detail">{name}</span></p>
      <p>color: <span className="robot-detail">{color}</span></p>
      <p>attack: <span className="robot-detail">{attack}</span></p>
      <p>defense: <span className="robot-detail">{defense}</span></p>
      <button onClick={() => handleFightQueue(robot) }>Queue!</button>
    </div>
  )

}

import React from 'react';

export default function FightQue({fightQueue, battleResults, setBattleResults}) {

  const handleBattleRoyale = (fightQueue) => {
    const robots = new Set(fightQueue)
    const values = Array.from(robots).map((robot) => {
      const { name } = robot
      return {robot: robot, score: Math.random()}
    });
    values.sort((a,b) => b.score - a.score);
    setBattleResults([...battleResults, values[0]]);
  }
  

  return (
    <div>
      <h3>fight Queue</h3>
      {
        fightQueue.map( robot => 
          <div key={`${robot.name}${Math.random()}`}>{robot.name}</div>
        )
      }
      <button onClick={() => handleBattleRoyale(fightQueue)} >battle Royale!</button>
    </div>
  )
}
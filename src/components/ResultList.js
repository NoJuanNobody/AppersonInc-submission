import React from 'react';

export default function ResultList({battleResults}){
  

  return (
    <div>
      <h3>battle results</h3>
      {battleResults.map(({robot: {name, attack, color}}) => {
        return <div key={`${name}${Math.random()}`}>{name} won this match with his attack: {attack}</div>
      }
      )}
    </div>
  )

}
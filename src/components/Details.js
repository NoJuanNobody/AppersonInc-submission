import React from 'react';


export default function Details({robot}){
  const { name, color, attack, defense } = robot;
  return (
    <div>
      <p>Name: {name}</p>
      <p>color: {color}</p>
      <p>attack: {attack}</p>
      <p>defense: {defense}</p>
      
    </div>
  )

}

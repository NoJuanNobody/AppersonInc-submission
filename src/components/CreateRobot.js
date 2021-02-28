import React from 'react';
import useCustomForm from '../hooks/createRobot'

export default function CreateRobot({ robots, setRobots }){
   const initialValues = {
    name:'',
    color: '',
    attack: '',
    defense: '',
  }
  
  const {
    values,
    handleChange,
    handleSubmit,
  } = useCustomForm({
    initialValues,
    onSubmit: ({values}) => setRobots([ ...robots, values])
  });

 


  return (
    <form onSubmit={handleSubmit} >
      <h1 className="form-heading">Create a robot</h1>

      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <br />

      <label>color</label>
      <input
        type="text"
        name="color"
        onChange={handleChange}
        value={values.color}
      />
      <br />

      <label>Attack</label>
      <input
        type="text"
        name="attack"
        onChange={handleChange}
        value={values.attack}
      />
      <br/>
      <label>defense</label>
      <input
        type="text"
        name="defense"
        onChange={handleChange}
        value={values.defense}
      />
      <br />

      <button type="submit">Submit</button>
      <br/>
    </form>
  )

}
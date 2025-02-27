import React, { useState } from 'react'
import { Grid2 as Grid , Button, TextField } from '@mui/material'


function AfficherList() {

  const [liste, setListe]= useState([])
  const [task, setTask]= useState("")
  
  const addTask= ()=> {
    if (task.trim() !== "") {
      setListe([ ...liste, task])
      setTask("")
    }
  }
  const suppTask= (value)=> {
    // con
    // console.log(value)
    setListe(liste.splice(value, 1))
    setListe([...liste])
  }

  return (
    <Grid
      container
      sx={{ width:'450px', 
            height:'600px',  
            boxShadow: '0 4px 8px rgba(34, 10, 214, 0.396)',
            margin: '20px auto',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
    >
      <h1 style={{
                fontFamily:'insaniburger',
                width: '100%'
                }}
      >
        ToDo List
      </h1>
      <Grid
        
      >
        <TextField id="filled-basic" label="Ajouter une tache" value={task} variant="filled" onChange={ (e)=> setTask(e.target.value) }/>
        <Button variant="contained" onClick={addTask}>Add Task</Button>
        <ul>
        {liste.map((task, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
            {task}
            <Button variant="outlined"  onClick={()=>suppTask(index)} color="error" >
              x
            </Button>
            </li>
        ))}
        </ul>
          
        
      </Grid>

    </Grid>
  )
}

export default AfficherList
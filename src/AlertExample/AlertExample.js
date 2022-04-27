
import { ACTIONS } from "./AlertManager"
import { styled, Button, TextField } from '@mui/material/'

import { v4 as uuid } from "uuid";

const AlerteExampleContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '25%',
  height: '25%',
});


export const AlertExample = ({ dispatch }) => {

  const handleClick = (e) => {
    e.preventDefault();
    const id = uuid()
    const text = e.target[0].value
    const time = e.target[1].value
    const link = e.target[2].value
    const alertType = e.target[3].value
    const alertTitle = e.target[4].value
    dispatch({ 
      type: ACTIONS.SUCCESS, 
      payload: {
        timeLimit: setTimeout(() => {
          dispatch({ type: ACTIONS.DELETE, payload: { id } })}
          , time * 1000 || 10000),
        text,
        link,
        alertType,
        id,
        alertTitle: alertTitle || '' 
      } 
    })
  }

  return (
    <div>
      <h1>Alerts UI</h1>
      <AlerteExampleContainer onSubmit={handleClick}>
        <TextField variant="filled" label="Text"/>
        <TextField variant="filled" label="Time Limit"/>
        <TextField variant="filled" label="Link"/>
        <TextField variant="filled" label="Alert Type"/>
        <TextField variant="filled" label="Alert Title"/>
        <Button type="submit" variant="contained" sx={{ mt: 4 }}>
          Submit Alert
        </Button>
      </AlerteExampleContainer>
    </div>
  )
}
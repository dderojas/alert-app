
import { useContext } from "react";
import { AlertContext } from "../App";
import { ACTIONS } from "./AlertManager"
import { AlertExampleContainer } from "./alertContainers";
import { TextField, Button } from '@mui/material/'
import { v4 as uuid } from "uuid";



export const AlertExample = () => {
  const { alertDispatch } = useContext(AlertContext)

  const handleClick = (e) => {
    e.preventDefault();
    const id = uuid()
    const text = e.target[0].value
    const time = e.target[1].value
    const link = e.target[2].value
    const alertType = e.target[3].value
    const alertTitle = e.target[4].value
    alertDispatch({ 
      type: ACTIONS.SUCCESS, 
      payload: {
        timeLimit: setTimeout(() => {
          alertDispatch({ type: ACTIONS.DELETE, payload: { id } })}
          , time * 1000 || 10000),
        text,
        link,
        alertType,
        id,
        alertTitle 
      } 
    })
    e.target.reset()
  }

  return (
    <div>
      <h1>Alerts UI</h1>
      <AlertExampleContainer onSubmit={handleClick}>
        <TextField variant="filled" label="Text"/>
        <TextField variant="filled" label="Time Limit"/>
        <TextField variant="filled" label="Link" placeholder="use https://www"/>
        <TextField variant="filled" label="Alert Type" placeholder="error, warning, info, success"/>
        <TextField variant="filled" label="Alert Title"/>
        <Button type="submit" variant="contained" sx={{ mt: 4 }}>
          Submit Alert
        </Button>
      </AlertExampleContainer>
    </div>
  )
}
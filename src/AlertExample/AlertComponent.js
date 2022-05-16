import { useContext } from 'react'
import { AlertContext } from '../App'
import { Alert, AlertTitle, Stack, Link } from '@mui/material/'
import { ACTIONS } from "./AlertManager"

export const AlertComponent = ({ elem }) => {
  const { dispatch }  = useContext(AlertContext)

  const { alertType, id, alertTitle, link } = elem
  return (
    <Stack>
      <Alert severity={alertType} key={id} id={id} onClose={() => dispatch({ type: ACTIONS.DELETE, payload: { id } })}> 
          {alertTitle && (<AlertTitle>{alertTitle}</AlertTitle>)}
          <strong>{elem.text}</strong>
          <br/>
          {link && <Link href={link} target="_blank" rel="noreferrer">Click here to learn more!</Link>}
      </Alert>
    </Stack>
  ) 

}
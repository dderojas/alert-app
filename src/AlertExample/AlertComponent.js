import { Alert, AlertTitle, Stack, Link } from '@mui/material/'
import { ACTIONS } from "./AlertManager"

export const AlertComponent = ({ elem, dispatch }) => {
  console.log(elem, 'elem!@#!@#')

  return (
    <Stack sx={{ width: '100%'}} spacing={3}>
        <Alert severity={elem.alertType} onClose={() => dispatch({ type: ACTIONS.DELETE, payload: { id: elem.id } })}> 
            {elem.alertTitle && (<AlertTitle>{elem.alertTitle}</AlertTitle>)}
            {elem.text}
            {elem.link && <Link href={elem.link} target="_blank" rel="noreferrer">Click here to learn more!</Link>}
        </Alert>
    </Stack>
  ) 

}
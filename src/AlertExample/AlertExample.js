
import { useContext } from "react";
import { AlertContext } from "../App";
import { ACTIONS } from "./AlertManager"
import { Formik } from "formik";
import { AlertExampleContainer } from "./alertContainers";
import { TextField, Button } from '@mui/material/'
import { v4 as uuid } from "uuid";



export const AlertExample = () => {
  const { alertDispatch } = useContext(AlertContext)

  const handleURL = (value) => {
    const urlPattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
    let string = value;

    if(urlPattern.test(string)){
      //string is url

      ///clear http && https from string
      string = string.replace("https://","").replace("http://","");

      //add https to string
      string = `https://${string}`;
    }
    return string
  }

  const handleClick = (values, actions) => {
    const { text, timeLimit, link, alertType, alertTitle} = values
    const url = handleURL(link)
    const id = uuid()
    alertDispatch({ 
      type: ACTIONS.SUCCESS, 
      payload: {
        timeLimit: setTimeout(() => {
          alertDispatch({ type: ACTIONS.DELETE, payload: { id } })}
          , timeLimit * 1000 || 10000),
        text,
        link: url,
        alertType,
        id,
        alertTitle 
      } 
    })
    actions.resetForm()
  }

  return (
    <div>
      <h1>Alerts UI</h1>
        <Formik 
          initialValues={{ 
            text: '',
            timeLimit: '',
            link: '',
            alertType: '',
            alertTitle: ''
          }} 
          onSubmit={handleClick}
        >
          {props => (
            <AlertExampleContainer onSubmit={props.handleSubmit}>
              <TextField variant="filled" label="Text" value={props.values.text} onChange={props.handleChange} name="text"/>
              <TextField variant="filled" label="Time Limit" value={props.values.timeLimit} onChange={props.handleChange} name="timeLimit"/>
              <TextField variant="filled" label="Link" placeholder="use https://www" value={props.values.link} onChange={props.handleChange} name="link"/>
              <TextField variant="filled" label="Alert Type" placeholder="error, warning, info, success" value={props.values.alertType} onChange={props.handleChange} name="alertType"/>
              <TextField variant="filled" label="Alert Title" value={props.values.alertTitle} onChange={props.handleChange} name="alertTitle"/>
              <Button type="submit" variant="contained" sx={{ mt: 4 }}>
                Submit Alert
              </Button>
            </AlertExampleContainer>
          )}
        </Formik>
    </div>
  )
}
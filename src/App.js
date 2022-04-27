import { useReducer } from "react";
import { useAlertReducer } from "./AlertExample/AlertManager";
import { styled } from '@mui/material/'
import AlertExample from "./AlertExample";
import { AlertManager } from "./AlertExample/AlertManager";

const AlertManagerContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '30px'
})

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

const App = () => {
  const [state, dispatch] = useReducer(useAlertReducer, [])

  return (
    <AppContainer className="App">
      <AlertExample dispatch={dispatch}/>
      <AlertManagerContainer>
        <AlertManager state={state} dispatch={dispatch} />
      </AlertManagerContainer>
    </AppContainer>
  );
}

export default App;

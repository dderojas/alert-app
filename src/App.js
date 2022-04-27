import React, { useReducer } from "react";
import { useAlertReducer } from "./AlertExample/AlertManager";
import AlertExample from "./AlertExample";
import { AlertManager } from "./AlertExample/AlertManager";
import { AppContainer } from "./AlertExample/alertContainers";

export const AlertContext = React.createContext()

const App = () => {
  const [state, dispatch] = useReducer(useAlertReducer, [])

  return (
    <AlertContext.Provider value={{ alertState: state, alertDispatch: dispatch }}>
      <AppContainer className="App">
        <AlertExample />
        <AlertManager state={state} />
      </AppContainer>
    </AlertContext.Provider>
  );
}

export default App;

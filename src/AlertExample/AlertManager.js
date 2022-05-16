import { useContext } from 'react';
import { AlertComponent } from './AlertComponent'
import { AlertContext } from '../App'


export const ACTIONS = {
  DELETE: 'delete'
} 

export const useAlertReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.DELETE:
      state = state.filter((elem) => elem.id !== action.payload.id)
      return state
     default:
        return [ ...state, action.payload]
  }
}

export const AlertManager = () => {
  const { state } = useContext(AlertContext)
  return (
    <div>
      {state.map((elem) => {
        return <AlertComponent elem={elem} />
      })}
    </div>
  )
}
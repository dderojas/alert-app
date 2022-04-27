import { AlertComponent } from './AlertComponent'


export const ACTIONS = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
  DELETE: 'delete'
} 

export const useAlertReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.DELETE:
      state = state.filter((elem) => elem.id !== action.payload.id)
      return state
    case ACTIONS.ERROR: 
     return ''
    case ACTIONS.WARNING:
      return ''
    case ACTIONS.INFO:
      return ''
    case ACTIONS.SUCCESS:
     return [ ...state, action.payload]
     default:
        return state
  }
}

export const AlertManager = ({ state }) => {
  return (
    <div>
      {state.map((elem) => {
        return <AlertComponent elem={elem} />
      })}
    </div>
  )
}
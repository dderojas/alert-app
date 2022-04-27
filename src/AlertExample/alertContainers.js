import { styled } from '@mui/material/'


const AppContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})

const AlertExampleContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

export {
  AppContainer,
  AlertExampleContainer
}
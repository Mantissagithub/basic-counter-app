import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { atom, useRecoilState, useRecoilValue, RecoilRoot} from 'recoil'

function App() {

  return (
    <RecoilRoot>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ display: "flex", justifyContent: "center", width: "500px", padding: "15px" }}>
        <Typography variant='h5'>Welcome to the counter page</Typography>
        <Buttons/>
        <CountComponent/>
      </Card>
    </Box>
    </RecoilRoot>
  )
}

function Buttons() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Increase/>
      </Grid>
      <Grid item xs={6}>
        <Decrease />
      </Grid>
    </Grid>
  )
}

function Increase() {
    const [count, setCount] = useRecoilState(CountState);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant='outlined' onClick={() => {
        setCount(count + 1)
      }}>Increase</Button>
    </Box>
  )
}

function Decrease() {
    const [count, setCount] = useRecoilState(CountState);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant='outlined' onClick={() => {
        setCount(count - 1)
      }}>Decrease</Button>
    </Box>
  )
}

function CountComponent() {
    const count = useRecoilValue(CountState);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "15px" }}>
      <Typography variant='h5'>
        {count}
      </Typography>
    </Box>
  )
}

const CountState = atom({
    key: 'ContState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

export default App

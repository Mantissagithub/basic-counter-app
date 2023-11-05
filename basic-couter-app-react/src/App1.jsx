import { useState, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Button, Card, Grid, Typography } from '@mui/material'

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value = {{
        count : count,
        setCount : setCount
    }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ display: "flex", justifyContent: "center", width: "500px", padding: "15px" }}>
        <Typography variant='h5'>Welcome to the counter page</Typography>
        <Buttons />
        <CountComponent/>
      </Card>
    </Box>
    </CountContext.Provider>
  )
}

function Buttons() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Increase/>
      </Grid>
      <Grid item xs={6}>
        <Decrease/>
      </Grid>
    </Grid>
  )
}

function Increase() {
    const {count,setCount} = useContext(CountContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant='outlined' onClick={() => {
        setCount(count + 1)
      }}>Increase</Button>
    </Box>
  )
}

function Decrease() {
    const {count,setCount} = useContext(CountContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant='outlined' onClick={() => {
        setCount(count - 1)
      }}>Decrease</Button>
    </Box>
  )
}

function CountComponent() {
    const {count} = useContext(CountContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "15px" }}>
      <Typography variant='h5'>
        {count}
      </Typography>
    </Box>
  )
}

// export default App

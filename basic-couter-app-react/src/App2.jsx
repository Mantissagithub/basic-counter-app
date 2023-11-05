import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Box, Button, Card, Grid, Typography } from '@mui/material'



function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ display: "flex", justifyContent: "center", width: "500px", padding: "15px" }}>
        <Typography variant='h5'>Welcome to the counter page</Typography>
        <Buttons count={count} setCount={setCount} />
        <CountComponent count={count} setCount={setCount} />
      </Card>
    </Box>
  )
}

function Buttons({ count, setCount }) {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Increase count={count} setCount={setCount} />
      </Grid>
      <Grid item xs={6}>
        <Decrease count={count} setCount={setCount} />
      </Grid>
    </Grid>
  )
}

function Increase({ count, setCount }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant='outlined' onClick={() => {
        setCount(count + 1)
      }}>Increase</Button>
    </Box>
  )
}

function Decrease({ count, setCount }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant='outlined' onClick={() => {
        setCount(count - 1)
      }}>Decrease</Button>
    </Box>
  )
}

function CountComponent({ count, setCount }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "15px" }}>
      <Typography variant='h5'>
        {count}
      </Typography>
    </Box>
  )
}

// export default App2

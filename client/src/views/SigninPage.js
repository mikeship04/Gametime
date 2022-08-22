import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'

const paperStyle = {
    padding: 20,
    height:'fit',
    width: 280,
    margin: "50px auto",
  }

function SigninPage() {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <Paper elevation={10} style={paperStyle}>
    <Stack spacing={2} >
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="password" variant="standard" />
        <Button variant="contained">Submit</Button>
        <Typography variant="subtitle1" gutterBottom>
        Welcome, please sign in!
        Not a memeber?
        Please <a href="/SignupPage">Signup here!</a>
      </Typography>
    </Stack>
    </Paper>
  </Box>
  )
}

export default SigninPage
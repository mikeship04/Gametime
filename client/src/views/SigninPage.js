import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material/'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { useNavigate } from "react-router-dom"

const paperStyle = {
  padding: 20,
  height:'fit',
  width: 280,
  margin: "50px auto",
}

function SigninPage({updateUser}) {

  let navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState([])
  const [formObj, setFormObj] = useState ({
    username: "",
    password: ""
})

function handleSubmit(e){
  e.preventDefault()
  fetch('/login', {
    method: "POST",
    headers:{"Content-Type": "Application/json"},
    body:JSON.stringify(formObj)
  })
  .then(res => {
    if(res.ok) {
      res.json().then(user => {
        updateUser({id: user.id, username: user.username})
        navigate(`/HomePage`)
        // will add redirect
      })
    } else {
      res.json().then(json => setErrors(Object.entries(json.errors)))
    }
  })
}

function handleChange(e){
  setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
}
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
    onSubmit={handleSubmit}
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
        <TextField 
        id="username" 
        label="Username" 
        value={formObj.username} 
        onChange={handleChange} 
        variant="standard" />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel>Password</InputLabel>
        <Input
        id="password" 
        label="password"
        type={showPassword ? 'text' : 'password'}
        value={formObj.password} 
        onChange={handleChange} 
        variant="standard" 
        endAdornment={
          <InputAdornment position="end">
          <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
          >
              {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
          </InputAdornment>
      }/>
      </FormControl>
        {errors ? errors.map((e) => <div>{e}</div>) : null}
        <Button variant="contained" type="submit">Submit</Button>
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
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

const paperStyle = {
    padding: 20,
    height:'fit',
    width: 280,
    margin: "50px auto",
}

function SignupPage() {

    const [formObj, setFormObj] = useState ({
        username: "",
        email: "",
        password: "",
        showPassword: false,
        showConfirmPassword: false
    })

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

    const handleClickShowPassword = () => {
        setFormObj({
        ...formObj,
        showPassword: !formObj.showPassword,
        });
    };

    const handleClickShowConfirmPassword = () => {
        setFormObj({
        ...formObj,
        showConfirmPassword: !formObj.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    

return (
    <Box
    display='flex'
    justifyContent='center'
    component="form"
    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
    noValidate
    autoComplete="off"
>
    <Paper elevation={10} style={paperStyle}>
    <Stack spacing={2} >
        <TextField id="username" label="Username" value={formObj.username} onChange={handleChange}  variant="standard" />
        <TextField id="email" label="email" value={formObj.email} onChange={handleChange} variant="standard" />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel>Password</InputLabel>
            <Input
        id="password" 
        label="password" 
        type={formObj.showPassword ? 'text' : 'password'} 
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
                {formObj.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
        }/>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel>Confirm Password</InputLabel>
            <Input
        id="standard-basic" 
        type={formObj.showConfirmPassword ? 'text' : 'password'} 
        label="confirm password" 
        variant="standard" 
        endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {formObj.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
        }/>
        </FormControl>
        <Button variant="contained">Submit</Button>
        <Typography variant="subtitle1" gutterBottom></Typography>
    </Stack>
    </Paper>
  </Box>
)
}

export default SignupPage
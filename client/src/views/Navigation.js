import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

function Navigation({currentUser}) {

return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
        <Link to='HomePage'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentUser ? `welcome back ${currentUser.username}` : null}
        </Typography>
        {currentUser ? null : <Link to='/SigninPage'>
        <Button color="inherit">Login</Button>
        </Link>}
        {currentUser ? null : <Link to='/SignupPage'>
        <Button color="inherit">Sign up</Button>
        </Link>}
        </Toolbar>
    </AppBar>
    </Box>
);
}

export default Navigation
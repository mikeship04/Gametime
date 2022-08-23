import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Navigation({currentUser, handleLogout}) {
    const [state, setState] = useState({left: false})

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
    
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {/* ['Create new set', 'running sets', 'find a game', 'friends'] */}
            <ListItem disablePadding>
                <Link to='/newGame'>
                <ListItemButton>
                <ListItemText primary={'Create new set'} />
                </ListItemButton>
                </Link>
            </ListItem>
            <ListItem disablePadding>
                <Link to='/currentGames'>
                <ListItemButton>
                <ListItemText primary={'Running sets'} />
                </ListItemButton>
                </Link>
            </ListItem>
            <ListItem disablePadding>
                <Link to='/lobby'>
                <ListItemButton>
                <ListItemText primary={'Find a game'} />
                </ListItemButton>
                </Link>
            </ListItem>
        </List>
        <Divider />
                {/* //display friends */}
        </Box>
    );

return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
        {[''].map((anchor) => (
        <React.Fragment key={anchor}>
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }} 
        onClick={toggleDrawer(anchor, true)}>
        {anchor}
        <MenuIcon/>
        </IconButton>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            {list(anchor)}
        </Drawer>
        </React.Fragment>
    ))}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentUser ? `welcome back ${currentUser.username}.` : null}
        </Typography>
        {currentUser ? null : <Link to='/SigninPage'>
        <Button color="inherit">Login</Button>
        </Link>}
        {currentUser ? null : <Link to='/SignupPage'>
        <Button color="inherit">Sign up</Button>
        </Link>}
        {currentUser ? <Button onClick={handleLogout} color="inherit">Sign out</Button>: null}
        </Toolbar>
    </AppBar>
    </Box>
);
}

export default Navigation
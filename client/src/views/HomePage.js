import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function HomePage({currentUser}) {
    const [errors, setErrors] = useState([])
    const [user, setUser] = useState(false)
    const {games_played, wins, losses, coins} = user
    const paperStyle = {
        padding: 20,
        height: 560,
        width: 560,
        margin: "50px auto",
    }

    function createData(hand, pointValueTop, PointValueMiddle, PointValueBottom) {
        return { hand, pointValueTop, PointValueMiddle, PointValueBottom};
    }

    const rows = [
        createData('66', 1, 0, 0),
        createData('77', 2, 0, 0),
        createData('88', 3, 0, 0),
        createData('99', 4, 0, 0),
        createData('1010', 5, 0, 0),
        createData('JJ', 6, 0, 0),
        createData('QQ', 7, 0, 0),
        createData('KK', 8, 0, 0),
        createData('AA', 9, 0, 0),
        createData('222', 10, 2, 0),
        createData('333', 11, 2, 0),
        createData('444', 12, 2, 0),
        createData('555', 13, 2, 0),
        createData('666', 14, 2, 0),
        createData('777', 15, 2, 0),
        createData('888', 16, 2, 0),
        createData('999', 17, 2, 0),
        createData('101010', 18, 2, 0),
        createData('JJJ', 19, 2, 0),
        createData('QQQ', 20, 2, 0),
        createData('KKK', 21, 2, 0),
        createData('AAA', 22, 2, 0),
        createData('Straight', 0, 4, 2),
        createData('Flush', 0, 8, 4),
        createData('Full House', 0, 12, 6),
        createData('Four of a Kind', 0, 32, 16),
        createData('Straight Flush', 0, 40, 20),
        createData('Royal flush', 0, 50, 25),
    ];
    
    // useffect fetch to /show/:id and get user info
    useEffect(() => {
        fetch('/me', {
            method: "POST",
            headers:{"Content-Type": "Application/json"},
            body:JSON.stringify(currentUser)
        })
        .then(res => {
            if(res.ok) {
            res.json().then(setUser)
            } else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    },[currentUser])

return (
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
        m: 1,
        width: 256,
        height: 256,
        },
    }}
    >
    <Paper elevation={3} style={paperStyle}>
        {errors ? errors.map((e) => <div>{e}</div>) : null}
        <Typography variant="h4">Total games played: {games_played}</Typography>
        <Typography variant="h4">Total wins: {wins}</Typography>
        <Typography variant="h4">Total losses: {losses}</Typography>
        <Typography variant="h4">you have {coins} coins.</Typography>
    </Paper>
    <TableContainer component={Paper} style={paperStyle}>
    <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Hands & Values</TableCell>
            <TableCell align="right">Top</TableCell>
            <TableCell align="right">Middle</TableCell>
            <TableCell align="right">Bottom</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
            key={row.hand}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {row.hand}
            </TableCell>
            <TableCell align="right">{row.pointValueTop}</TableCell>
            <TableCell align="right">{row.PointValueMiddle}</TableCell>
            <TableCell align="right">{row.PointValueBottom}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    </Box>
)
}

export default HomePage
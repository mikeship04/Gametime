import React, {useEffect, useState} from 'react'

function HomePage({currentUser}) {
    const [errors, setErrors] = useState([])
    const [user, setUser] = useState(false)
    const {username, email, games_played, wins, losses, coins} = user

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
    },[])
    console.log(user)

return (
    
    <div>
        welcome back ! {username} 
        {email}
        {games_played}
        {wins}
        {losses}
        {coins}
    </div>
)
}

export default HomePage
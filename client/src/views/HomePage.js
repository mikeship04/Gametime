import React, {useEffect, useState} from 'react'

function HomePage({currentUser}) {
    const [errors, setErrors] = useState([])

    //useffect fetch to /show/:id and get user info
    useEffect(() => {
        fetch('/me', {
            method: "POST",
            headers:{"Content-Type": "Application/json"},
            body:JSON.stringify(currentUser)
        })
        .then(res => {
            if(res.ok) {
            res.json().then(console.log)
            } else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    },[])

return (
    
    <div>HomePage</div>
)
}

export default HomePage
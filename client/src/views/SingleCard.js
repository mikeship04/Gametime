import React from 'react'
import './SingleCard.css'
import lotr7 from '../images/lotr7.png'

let num = Math.floor(Math.random() * (2))


function SingleCard({card, handleChoice, flipped}) {
    
    function handleClick () {
        handleChoice(card)
    }

return (
    <div className="card" >
        <div className={flipped ? "flipped" : ""}>
            <img className="front" alt="card front" src={card.src}/>
            <img 
            className="back" 
            src={lotr7}
            alt="card back" 
            onClick={handleClick}/>
    </div>
</div>
)
}

export default SingleCard
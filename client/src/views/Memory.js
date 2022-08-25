import React, {useEffect, useState} from 'react'
import './memorycss.css'
import SingleCard from './SingleCard'
import lotr1 from '../images/lotr1.png'
import lotr2 from '../images/lotr2.png'
import lotr3 from '../images/lotr3.png'
import lotr4 from '../images/lotr4.png'
import lotr5 from '../images/lotr5.png'
import lotr6 from '../images/lotr6.png'

// fetch to '/images' index that returns all card images []

const cardImages = [
    { "src": lotr1, matched: false },
    { "src": lotr2, matched: false },
    { "src": lotr3, matched: false },
    { "src": lotr4, matched: false },
    { "src": lotr5, matched: false },
    { "src": lotr6, matched: false }
  ]

  function Memory() {
    
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    
    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

      setCards(shuffledCards)
      setTurns(0)
    }

    function handleChoice(card) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
      if (choiceOne && choiceTwo) {
        if (choiceOne.src === choiceTwo.src)  {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === choiceOne.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            })
          })
          nextTurn()
        } else {
          setTimeout(() => nextTurn(), 1000)
        } 
      }
    },[choiceOne, choiceTwo])

    function nextTurn() {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurns => prevTurns + 1)
    }

  return (
    <>
    <h1>LOTR Memory</h1>
    <button onClick={shuffleCards}>play again?</button>

    <div className="card-grid">
      {cards.map(card => (
        <SingleCard 
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        card={card} 
        handleChoice={handleChoice} 
        key={card.id}/>
      ))}
    </div>
    </>
  )
}

export default Memory
import React, {useEffect, useState} from 'react'
import Deck from './Deck'
import './CasinoWar.css'
import Paper from '@mui/material/Paper'

function Game() {
    const [playerDeck, setPlayerDeck] = useState([])
    const [oppDeck, setOppDeck] = useState([])
    const [playerCard, setPlayerCard] = useState({})
    const [oppCard, setOppCard] = useState({})
    const [win, setWin] = useState('')
    const [inRound, setInRound] = useState(false)
    const CARD_VALUE_MAP = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    
    //set playerdeck with a new deck that is the deck that i want, which is a new deck without last card and potentially opponents card
    //need a function in my deck class ? to take in existing deck 
    //const gamestart?
    useEffect(() => {
        const deck = new Deck()
        deck.shuffle()
        const deckMiddle = Math.ceil(deck.numberOfCards / 2)
        let pd = new Deck(deck.cards.slice(0, deckMiddle))
        let od = new Deck(deck.cards.slice(deckMiddle, deck.length))
        setPlayerDeck(pd)
        setOppDeck(od)
    },[])

    function flipCards() {
        setInRound(true)
        const pCard = playerDeck.pop()
        const oCard = oppDeck.pop()
        setPlayerCard(pCard)
        setOppCard(oCard)

        if (roundWinner(pCard, oCard)) {
            setWin('You win!')
            playerDeck.push(pCard)
            playerDeck.push(oCard)
        } else if (roundWinner(oCard, pCard)) {
            setWin('You lose this one, bummer!')
            oppDeck.push(pCard)
            oppDeck.push(oCard)
        } else {
            setWin('Draw')
            playerDeck.push(pCard)
            oppDeck.push(oCard)
        }

        if (isGameOver(playerDeck)) {
            setWin('Game over, you lost!')
        } else if (isGameOver(oppDeck)) {
            setWin('Game over, you won!!')
        }
    }

    function isGameOver(deck) {
        return deck.numberOfCards === 0
    }

    function roundWinner(playerCard, oppCard) {
        return CARD_VALUE_MAP[playerCard.value] > CARD_VALUE_MAP[oppCard.value]
    }
    
        // function getYourColor(shownCard) {
        //     if (shownCard.suit === '♣' || shownCard.suit === '♠') {
        //         shownCard.className='card.black'
        //     } else {
        //         shownCard.className='card.red'
        //     }
        // }
    
    return (
        <>
    <button onClick={flipCards}>Play next Turn</button>
    <h1>{win}</h1>
    <div className="card-grid">
        <div className="opponent-deck deck">{oppDeck.numberOfCards}</div>
            {inRound ? 
            <Paper className="card" elevation={3}>{oppCard.suit + oppCard.value}</Paper> : 
            <Paper className="card" elevation={3}>Opponents Card Flips Here</Paper>}
            {inRound ? 
            <Paper className="card" elevation={3}>{playerCard.suit + playerCard.value}</Paper> : 
            <Paper className="card" elevation={3}>Your Card Flips Here</Paper>}
        <div className="player-deck deck">{playerDeck.numberOfCards}</div>
    </div>
    </>
)
}

//war.  split deck into 2 even decks (find midpoint and slice)
//give opponnet half deck and player half deck
//flip top card of deck for both player and opponent
//compare values, winner gets both cards
//if tie go to war and repeat gameplay until no tie
//when one player deck is empty game is over.

//turn over next card 1x for player, 1x for dealer, 1x for player, next card face down for dealer
// display total.  decide to hit or stay
// if hit take another card from the deck and display to player, repeat until stay or 21 or bust
//once player decision done, dealer plays.  dealer must hit until soft 17, 21, or bust
// once both players turn complete, compare totals. if draw reset turn, if player wins win chips reset hand, if player loses lose coins reset hand
export default Game
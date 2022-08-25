import React, {useState} from 'react'
import Deck from './Deck'
import './CasinoWar.css'
import Paper from '@mui/material/Paper'

function Game() {
    const [displayedCard, setDisplayedCard] = useState({})
    const [opponentCard, setOpponentCard] = useState({})

    const deck = new Deck()
    deck.shuffle()
    const cards = deck.cards
    let count = 0
    
    function showNextCard() {
        let shownCard = cards[count]
        let oppCard = cards[count + 1]
            count++
            setDisplayedCard(shownCard)
            setOpponentCard(oppCard)
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

return (
    <>
    <button onClick={showNextCard}>Play next Turn</button>
    <div className="card-grid">
        <div class="opponent-deck deck">Opponents Deck</div>
            <Paper className="card" elevation={3}>{displayedCard.suit+displayedCard.value}</Paper>
            <Paper className="card" elevation={3}>{opponentCard.suit+opponentCard.value}</Paper>
        <div class="player-deck deck">Your Deck</div>
    </div>
    </>
)
}

export default Game
import React, {useState} from 'react'
import Deck from './Deck'

function Game() {
    const [displayedCard, setDisplayedCard] = useState({})

    const deck = new Deck()
    deck.shuffle()
    const cards = deck.cards
    let count = 0
    
    function showNextCard() {
        let shownCard = cards[count]
            count++
            setDisplayedCard(shownCard)
    }

    //turn over next card 1x for player, 1x for dealer, 1x for player, next card face down for dealer
    // display total.  decide to hit or stay
    // if hit take another card from the deck and display to player, repeat until stay or 21 or bust
    //once player decision done, dealer plays.  dealer must hit until soft 17, 21, or bust
    // once both players turn complete, compare totals. if draw reset turn, if player wins win chips reset hand, if player loses lose coins reset hand

return (
    <>
    <div class="opponent-deck deck"></div>
    <div class="opponent-slot card-slot">Game Cards being dealt</div>
    <div class="text">text between game</div>
    <div class="playercard-slot card-slot">Game Cards being dealt</div>
    <button onClick={showNextCard}>show next card</button>
    <div class="player-deck deck">{displayedCard.suit+displayedCard.value}</div>
    </>
)
}

export default Game
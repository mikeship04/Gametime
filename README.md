# README

This will be an app to play Chinese poker - pineapple style.

Chinese poker is a card game in which the user is initially dealt 5 cards, and then each subsequent turn dealt 3 cards and is able to use 2 to add to thier hand while the 3rd is discarded.  Using standard poker rules a player makes a 3 card hand (top) a 5 card hand (middle) and a 2nd 5 card hand (bottom).  The bottom hand must be the best hand based on standard poker rules, the middle hand 2nd best, and the top hand 3rd best.  As an example if you had 3 pairs AA, KK, QQ you would need to place QQ (top), KK (middle), AA (bottom) to not foul your hand.

A session (or round) of chinese poker is played by completing 5 games.  A game is finished after both players complete their 13 card hands and then the score is talleyed.  The scoring is as follows

Top -
66 - 1pt
77 - 2pt
88 - 3pt
99 - 4pt
1010 - 5pt
JJ - 6pt
QQ - 7pt **minimal entry for fantasy land
...
AAA 22pt

Bottom

straight - 2pt
flush - 4pt
full house - 6pt
4 of a kind 16pt
straight flush 20pt
royal flush 25pt

Middle
3 of a kind 2pt
anything else,
2x score of bottom hand equivelant (example - straight = 4pt)

When both players hands are completed they are played against each other with a value of 1 point per street (row) and an additional 3 points for a scoop (or -3 for a foul) meaning the base game is worth potentially 6 points.  Then all bonus points are compared (see table above for reference) and are netted out +/- and then added / subtracted accordingly.  

Example hand

P1              P2

88A             10JJ
999JQ           56789
45678           KKKKA

P1 loses street 1, loses street 2, loses street 3 -1 point per street and -3 for being "scooped".  P1 is currently down 6 points.  Next bonus points are applied, P1 gets +3 for the pair of 8s, +2 for 3 of a kind, +2 for straight.  P2  gets +6 for pair of jacks, +4 for straight, and +16 for 4 of a kind. P1 (7) - P2 (26) = 19 points + (6) = 25 total points to player 2 and -25 total points to player 1.

**fantasy land**
When a player Successfully completes a hand in which they had QQ or better as thier (top) hand the next round they will be in "fantasy land".  A fantasy land hand is played outside the original game (it does not count towards game count) and the player who is in fantasy land is dealt all 13 cards to make their hand (plus 1 extra which will be discarded) at the time their hand is dealt.  

The round is played until all 5 games are finished and then total points determines the winner.  For this application a session will be 5 games (+/- based on fantasy land) and winners/losers will win/lose a predetermined coin value.  A user account will be generated with more than enough coins to play several sessions as they have no real value.

As a user you will be able to make an account and play games.  You can create a session that will be hosted in a lobby and when another player joins that session you will play the games until you finish or time runs out (there will be a 72 hour limit on sessions at which point they will be terminated).  You will also be able to add friends (and remove) and invite them to play a session directly (avoiding the lobby).  You will be able to have multiple sessions against multiple players going at the same time.


go into rails server and User.find(person) User.update(admin: true) add coins etc.
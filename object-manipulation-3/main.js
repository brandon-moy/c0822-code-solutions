console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Yugi',
    hand: []
  },
  {
    name: 'Joey',
    hand: []
  },
  {
    name: 'Kaiba',
    hand: []
  },
  {
    name: 'Pegasus',
    hand: []
  }
];

var suits = ['spade', 'hearts', 'clubs', 'diamonds'];
var rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function createDeck() {
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      var card = {
        suit: suits[i],
        rank: rank[j]
      };
      deck.push(card);
    }
  }
  return deck;
}

var deck = createDeck();
var shuffled = _.shuffle(deck);

function deal() {
  var cards = _.sampleSize(shuffled, 8);
  for (var l = 0; l < cards.length; l++) {
    if (l < 2) {
      players[0].hand.push(cards[l]);
    } else if (l < 4) {
      players[1].hand.push(cards[l]);
    } else if (l < 6) {
      players[2].hand.push(cards[l]);
    } else if (l < 8) {
      players[3].hand.push(cards[l]);
    }
  }
  return cards;
}

function checkWinner() {
  // for (var m = 0; m < players.length; m++) {
  //   for (var n = 0; n < players[m].hand.length; n++) {
  //     if (players[m].hand[n].rank === 'A') {

  //     } else if (players[m].hand[n].rank === 'J' || players[m].hand[n].rank === 'Q' || players[m].hand[n].rank === 'K') {

  //     } else {
  //       players[m].hand[n].rank;
  //     }
  //   }
  // }
}

console.log(deal);
console.log(checkWinner);

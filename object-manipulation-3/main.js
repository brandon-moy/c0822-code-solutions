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

// function deal(deck) {
//   var cards = _.sampleSize(deck, 8);
//   for (var l = 0; l < cards.length; l++) {
//     if (l < 2) {
//       players[0].hand.push(cards[l]);
//     } else if (l < 4) {
//       players[1].hand.push(cards[l]);
//     } else if (l < 6) {
//       players[2].hand.push(cards[l]);
//     } else if (l < 8) {
//       players[3].hand.push(cards[l]);
//     }
//   }
//   return cards;
// }

function deal(deck, amount) {
  var cards = _.sampleSize(deck, amount);
  var numberOfPlayers = players.length;
  var cardsPerPlayer = amount / numberOfPlayers;
  for (var l = 0; l < players.length; l++) {
    var start = l * cardsPerPlayer;
    var end = (l + 1) * cardsPerPlayer;
    players[l].hand = _.slice(cards, start, end);
  }
}

function checkWinner(players) {
  var currentWinner;
  var currentTotal = 0;
  for (var m = 0; m < players.length; m++) {
    for (var n = 0; n < players[m].hand.length; n++) {
      var playerTotal = 0;
      if (players[m].hand[n].rank === 'A') {
        playerTotal += 11;
      } else if (players[m].hand[n].rank === 'J' || players[m].hand[n].rank === 'Q' || players[m].hand[n].rank === 'K') {
        playerTotal += 10;
      } else {
        playerTotal += players[m].hand[n].rank;
      }
      if (playerTotal > currentTotal) {
        currentTotal = playerTotal;
        currentWinner = players[m];
      }
    }
  }
  return currentWinner;
}

function testGame(players, amount) {
  var deck = createDeck();
  var shuffled = _.shuffle(deck);
  deal(shuffled, amount);
  var winner = checkWinner(players);
  return winner;
}

console.log('Winner:', testGame(players, 48));

console.log('Lodash is loaded:', typeof _ !== 'undefined');

// 1) Create an array of players with name and hand
// 2) Create a function to make a "deck" of cards
//      make an array of suits
//      make an array of number/values/ranks
//      go through each array and pair them together
//      return the deck
// 3) Shufle the deck - use lodash
// 4) Deal cards to players (2cards * 4 players = 8 cards)
//      Get a group of cards
//      Go through amount of cards and give 2 per player
// 5) Get the winner
//      create placeholder for current winner
//      create placeholder for current winner's total
//      go through the player list
//        go through the player's hand
//          create a player total
//          if card is A - player total + 11
//          if card is K, Q, or J - player total + 10
//          otherwise add the value of the card
//          check the player total vs current winners total
//          if player total > current winners total then replace the value
//          and the current winner with the current player
//      return the winner

// Redo 4 to be adjustable with number of players
//    take the deck and the amount of cards to take for parameter
//    get the number of players (from the length)
//    get the number of cards needed per player
//    go through the amount of cards dealt
//      we need a start and end point
//      start = position * number of cards?
//      end = position + 1 * number of cards?
//      remove cards from start until the end position
//      add the cards to the players hand
// need to reset the value of the players hand, this is create a subarray in the hand array

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

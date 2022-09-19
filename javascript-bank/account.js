/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {

    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {

};

Account.prototype.getBalance = function () {

};

/* exported maxValue */

function maxValue(stack) {
  let largest = stack.pop();
  if (largest === undefined) return -Infinity;
  let check = stack.pop();
  while (check !== undefined) {
    if (check > largest) {
      largest = check;
    }
    check = stack.pop();
  }
  return largest;
}

/* exported getLength */

function getLength(list) {
  let count = 0;
  while (list !== null) {
    list = list.next;
    count++;
  }
  return count;
}

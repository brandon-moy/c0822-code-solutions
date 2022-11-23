/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const secondValue = list.next.data;
  list.next.data = list.data;
  list.data = secondValue;
  return list;
}

/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const startThird = list.next.next;
  list.next = startThird;
  return list;
}

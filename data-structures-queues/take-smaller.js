/* exported takeSmaller */

function takeSmaller(queue) {
  const front = queue.dequeue();
  const second = queue.dequeue();
  if (front === undefined) return;
  if (second === undefined) return front;
  if (front < second) {
    queue.enqueue(second);
    return front;
  } else {
    queue.enqueue(front);
    return second;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.length) {
      return this;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return this;
    }
    const firstElement = this.first;
    this.first = this.first.next;
    firstElement.next = null;
    this.length--;
    return this;
  }
}

const myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
// myQueue.dequeue();

console.log(myQueue);

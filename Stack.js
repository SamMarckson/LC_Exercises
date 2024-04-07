// A STACK BASED ON A LINKED LIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.top = newNode;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) {
      return false;
    }
    let pointer = this.top;
    this.top = this.top.next;
    pointer.next = null;
    this.length--;
    return pointer;
  }
}

const myStack = new Stack(5);
myStack.push(3);
myStack.push(7);
myStack.pop();
console.log(myStack);

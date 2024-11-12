class Stack {
  constructor() {
    this.storage = new Object();
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  top() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push("Apple");
stack.push("Banana");
stack.push("Carrot");

console.log(stack.pop());
console.log(stack.storage["1"]);

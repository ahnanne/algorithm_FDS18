class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top >= this.capacity) return false;
    const i = this.top;

    this.array[i] = value;
    this.top += 1;

    return true;
  }

  pop() {
    if (this.isEmpty()) return false;

    const i = this.top;
    const v = this.array[i - 1];

    // pop(제거)
    this.array[i - 1] = null;
    this.top -= 1;

    return v;
  }

  peek() {
    if (this.isEmpty()) return false;

    const i = this.top;

    return this.array[i - 1];
  }

  isEmpty() {
    return (this.top === 0);
  }
}

const stack = new Stack(5);

/** test */

console.log(stack); // Stack { capacity: 5, top: 0, array: [ <5 empty items> ] }
console.log(stack.isEmpty()); // true

console.log(stack.push(100));
console.log(stack);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.push(600);
console.log(stack);
console.log(stack.push(600)); // false

console.log(stack.peek());

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.array = new Array(capacity);
  }

  put(value) {
    // overflow
    if (this.rear === this.capacity - 1) {
      if (this.front === 0) return false;
    }

    this.array[this.rear++] = value;

    if (this.rear === this.capacity) this.rear = 0;
  }

  get() {
    // underflow
    if (this.front === 0) {
      if (this.rear === 0) return false;
    }

    const v = this.array[this.front++];
    if (this.front === this.capacity) this.front = 0;

    return v;
  }

  peek() {
    return this.array[this.front + 1];
  }

  print() { // Front~Rear 출력
    // for (let i = this.front; i )
    // console.log(this.array[this.front]);
  }
}

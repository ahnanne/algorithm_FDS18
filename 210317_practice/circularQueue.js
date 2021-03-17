class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    // FRONT는 "dequeue 때 반환될 값"을 가리키며,
    // dequeue가 되는 순간 다음 칸으로 이동한다.
    this.rear = 0;
    // REAR는 "enqueue 때 값이 들어올 칸"을 가리키며,
    // enqueue가 되는 순간 다음 칸으로 이동한다.
    this.array = new Array(capacity);

    this.isFull = false;
  }

  /**
  ✅ rear와 front가 동일한 3가지 경우
    1. 큐가 제일 처음 생성되고 아무 것도 enqueue되지 않은 상태 -> Underflow 상태에 해당
    2. Overflow 상태
    3. Underflow 상태
  */

  put(value) {
    if (!this.isFull) {
      this.array[this.rear++] = value;

      this.rear %= this.capacity;
      if (this.rear === this.front) this.isFull = true;
    }

    if (this.isFull) return false;
  }

  get() {
    // underflow -> return false
    if (!this.isFull && this.front === this.rear) return false;

    if (this.isFull) {
      // this.isFull 해제 - dequeue하면 무조건 해제됨.
      this.isFull = false;
    }

    const value = this.array[this.front++];
    this.front %= this.capacity;

    return value;
  }

  peek() {
    // underflow
    if (!this.isFull && this.front === this.rear) return false;

    return this.array[this.front];
  }

  print() { // Front~Rear 출력
    // underflow
    if (!this.isFull && this.front === this.rear) {
      console.log(new Error('UNDERFLOW'));
      return;
    }

    let values = '';

    if (this.front >= this.rear) {
      for (let i = this.front; i <= this.capacity + this.rear - 1; i++) {
        values += this.array[i % this.capacity];
      }
    } else {
      for (let i = this.front; i <= this.rear - 1; i++) {
        values += this.array[i % this.capacity];
      }
    }

    console.log(values);
  }
}

/** test */
const circularQueue = new CircularQueue(6);
const cl = () => console.log(circularQueue);

cl();
/*
CircularQueue {
  capacity: 6,
  front: 0,
  rear: 0,
  array: [ <6 empty items> ],
  isFull: false
}
*/

circularQueue.put(100);
circularQueue.put(200);
circularQueue.put(300);
circularQueue.put(400);
circularQueue.put(500);
circularQueue.put(600);
console.log(circularQueue.put(700)); // false
cl();
/*
CircularQueue {
  capacity: 6,
  front: 0,
  rear: 0,
  array: [ 100, 200, 300, 400, 500, 600 ],
  isFull: true
}
*/

console.log(circularQueue.get()); // 100
console.log(circularQueue.get()); // 200
console.log(circularQueue.get()); // 300
console.log(circularQueue.get()); // 400
console.log(circularQueue.get()); // 500
console.log(circularQueue.get()); // 600
console.log(circularQueue.get()); // false
cl();
/*
CircularQueue {
  capacity: 6,
  front: 0,
  rear: 0,
  array: [ 100, 200, 300, 400, 500, 600 ],
  isFull: false
}
😨: "분명 다 dequeue 했는데 왜 array에 값들이 아직 남아있는거지..!?"
=> 당황하지 마시라. array에는 원래 삭제라는 개념이 없다.
   그래서 여기서 애초에 삭제하는 걸 구현하지도 않았으니 값들이 그대로 있는 게 당연하다.
   어차피 get과 peek은 큐에 front로만 접근할 수 있고, 위와 같이 전체 array를 확인할 일이 없다.
   그러니까 그냥 array에 저렇게 들어있는 값들은 못본 척 하면 된다.
*/

console.log(circularQueue.peek()); // false
// 앞서 모든 값을 enqueue한 상황
// isFull === false이며 front와 rear가 동일한 상태, 즉 underflow 상태이므로 false 반환

circularQueue.put(10);
circularQueue.put(20);
circularQueue.put(30);
circularQueue.put(40);
circularQueue.put(50);
circularQueue.put(60);
console.log(circularQueue.peek()); // 10
cl();
circularQueue.get();
circularQueue.get();
circularQueue.put(70);
cl();

circularQueue.print();

circularQueue.put(80);
circularQueue.print();

circularQueue.get();
circularQueue.get();
circularQueue.get();
circularQueue.get();
circularQueue.get();
circularQueue.print(); // 80

circularQueue.get();
circularQueue.print(); // Error: UNDERFLOW

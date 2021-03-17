class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.array = new Array(capacity);

    this.isFull = false;
    // 꽉 차있는 상태인지 확인하기 위함!
  }

  // 🔅HINT: front와 rear이 동일한 위치에 있을 때
  // 1) 맨 처음 시작할 때, 2) underflow일 때, 3) overflow일 때

  put(value) {
    // overflow
    /*
    if (this.rear === this.capacity - 1) {
      if (this.front === 0) return false;
    }
    */
    if (this.front === this.rear) {
      this.isFull = true;
    }

    this.array[this.rear++] = value;

    if (this.rear === this.capacity) this.rear = 0;
    // this.rear %= this.capacity;
    // 빙글빙글 돌아가는 것들은 보통 이런 식으로 깔끔하게 계산해줌.
  }

  get() {
    // get을 하면 무조건 isFull === false;
    // underflow
    if (this.front === this.rear && this.isFull === false) {
      return false;
    }
    /*
    if (this.front === 0) {
      if (this.rear === 0) return false;
    }
    */

    const v = this.array[this.front++];
    if (this.front === this.capacity) this.front = 0;
    // this.rear %= this.capacity;
    // 빙글빙글 돌아가는 것들은 보통 이런 식으로 깔끔하게 계산해줌.
    // modular 연산

    return v;
  }

  peek() {
    // peek도 underflow 고려해줘야 함.
    if (this.front === this.rear && this.isFull === false) {
      return false;
    }

    return this.array[this.front];
  }

  print() { // Front~Rear 출력
    // HINT: rear에게 가상의 인덱스를 부여한 뒤,
    // 그만큼의 인덱스를 큐에 추가함. (선형 큐처럼)
    // 실제 접근할 때는 modular 연산
  }
}

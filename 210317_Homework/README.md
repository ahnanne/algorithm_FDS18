# 210317 Homework

## 문제 및 코드
- 문제 : Linked Queue 구현하기 ([코드 파일 바로가기](https://github.com/ahnanne/algorithm_FDS18/blob/main/210317_Homework/after.js))

  - 솔루션 코드

      ```js
      class Node {
        constructor(value, prev, next) {
          this.value = value;
          this.prev = prev;
          this.next = next;
        }
      }

      class LinkedQueue {
        constructor() {
          // HEAD
          this.front = null;
          // TAIL
          this.rear = null;

          this.size = 0;
        }

        isEmpty() {
          return this.size === 0;
        }

        put(value) {
          /**
          물리적 메모리를 다 사용하기 전까지
          overflow가 발생하지 않음.
          */
          const node = new Node(value, null, null);

          if (this.size === 0) {
            this.front = node;
            this.rear = node;
          } else {
            // 큐의 가장 마지막 노드와 새로운 노드 상호 연결 시켜주기
            this.rear.next = node;
            node.prev = this.rear;

            // 새로운 노드를 큐의 가장 마지막 노드(REAR)로 지정하기
            this.rear = node;
          }

          this.size += 1;
        }

        get() {
          // underflow 여부부터 확인
          if (this.size === 0) return false;

          // underflow가 아니라면 this.front 값 내보내기
          const temp = this.front;

          if (this.size === 1) {
            this.front = null;
            this.rear = null;
          } else {
            this.front = this.front.next;
            this.front.prev = null;
          }

          this.size -= 1;

          return temp;
        }

        print() {
          // underflow 여부부터 확인
          if (this.size === 0) {
            console.error(new Error('조회할 노드가 없습니다.'));
            return;
          }

          // underflow가 아니라면 큐 출력
          const q = [];
          let pointer = this.front;

          for (let i = 0; i < this.size; i++) {
            q.push(pointer.value);
            pointer = pointer.next;
          }

          return console.log(q);
        }
      }
      ```

  - 테스트 코드

      ```js
      /** test */
      const queue = new LinkedQueue();

      queue.print(); // Error: 조회할 노드가 없습니다.

      queue.put(1);
      queue.put(2);
      queue.put(3);
      queue.put(4);
      queue.put(5);
      queue.put(6);
      queue.print(); // [ 1, 2, 3, 4, 5, 6 ]

      console.log(queue.get()); // 1
      console.log(queue.get()); // 2
      console.log(queue.get()); // 3
      console.log(queue.get()); // 4
      queue.print(); // [ 5, 6 ]

      queue.put(4);
      queue.put(5);
      queue.put(6);
      queue.print(); // [ 5, 6, 4, 5, 6 ]

      console.log(queue.get()); // 5
      console.log(queue.get()); // 6
      console.log(queue.get()); // 4
      queue.print(); // [ 5, 6 ]
      ```

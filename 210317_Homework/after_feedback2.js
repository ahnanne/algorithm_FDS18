/* -------------------------------------------------------------------------- */
// DOUBLY LINKED LIST 상속하여 구현하기
// -> 성능보다는 OOP의 특성을 살려서 구현하는 것이 목표
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
}

isEmpty() {
    return this.head === null;
}

prepend(value) {
    if (this.head === null) {
        this.head = new Node(value, null, null);
        this.tail = this.head;
    } else {
        const node = new Node(value, this.head, null);
        this.head.prev = node;
        this.head = node;
    }
}

append(value) {
    if (this.head === null) {
        this.head = new Node(value, null, null);
        this.tail = this.head;
    } else {
        const node = new Node(value, null, this.tail);
        this.tail.next = node;
        this.tail = node;
    }
}

setHead(index) {
    let curr = this.head
    for (let i = 0; i < index; i++) {
        curr = curr.next;
        if (curr === null) {
            return false;
        }
    }
    curr.prev = null;
    this.head = curr;
    return true;
}

access(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
        if (curr === null) {
            return undefined;
        }
    }
    return curr.value;
}

insert(index, value) {
    if (this.head === null && index > 0) {
        return false;
    }

    if (index === 0) {
        this.prepend(value);
        return true;
    }

    let curr = this.head
    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      curr = curr.next;
    }

    if (curr === null) {
      this.append(value);
      return true;
    }

    const node = new Node(value, curr, curr.prev);
    curr.prev.next = node;
    curr.prev = node;
    curr = node;
    return true;
  }

  remove(index) {
    if (this.head === null) {
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
      return true;
    }

    let curr = this.head
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) {
        return false;
      }
    }
    curr.prev.next = curr.next;

    if (curr !== this.tail) {
      curr.next.prev = curr.prev;
    } else {
      this.tail = curr.prev;
    }
    return true;
}

  print() {
    let curr = this.head;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let s = '';
    while(curr !== null) {
      s += `${curr.value} `;
      curr = curr.next;
    }
    console.log(`[${s}]`);
}

  printInv() {
    let curr = this.tail;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let s = '';
    while (curr !== null) {
      s += `${curr.value} `
      curr = curr.prev;
    }
    console.log(`[${s}]`);
  }
}

/* -------------------------------------------------------------------------- */

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue extends DoublyLinkedList {
  constructor() {
    super();
  }

  isEmpty() {
    // 부모(DoublyLinkedList)로 올라가서 메서드를 가져와서 사용함.
    super.isEmpty();

    // super 대신 this를 사용해도 프로토타입 체이닝을 하므로
    // 부모 클래스의 메서드를 사용할 수 있지만,
    // 이 클래스 자신도 isEmpty라는 메서드를 가지고 있으므로
    // 만약 this를 쓰면 자기자신을 무한히 호출하게 됨.
  }

  put(value) {
    return this.append(value);
    // 프로토타입 체이닝을 하기 때문에
    // super 대신 this를 사용해도 append를 사용할 수 있음.
  }

  get() {
    const value = this.access(0);
    this.remove(0);

    return;
  }

  print() {
    // underflow 여부부터 확인
    if (this.size === 0) {
      console.error(new Error('조회할 노드가 없습니다.'));
      return;
    }

    // underflow가 아니라면 큐 출력
    const q = [];
    let idx = this.front;

    for (let i = 0; i < this.size; i++) {
      q.push(idx.value);
      idx = idx.next;
    }

    console.log(q);
  }
}

/* ---------------------------- TEST -------------------------------- */

const queue = new LinkedQueue();

queue.print(); // Error: 조회할 노드가 없습니다.
console.log(queue.isEmpty()); // true

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

console.log(queue.isEmpty()); // false

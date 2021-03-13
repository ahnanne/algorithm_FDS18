class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.head;
  }

  prepend(value) {
    const node = new Node(value, null, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  append(value) {
    const node = new Node(value, null, null);

    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  setHead(index) {
    let curr = this.head;
    if (!curr) return false;
    if (index <= 0) return false;
    // index === 0은 의미가 없으므로 false를 반환하도록 함.

    for (let i = 0; i < index; i++) {
      if (!curr.next) return false;
      // 해당 index로 접근하고자 하는 노드는
      // 최종적으로 curr.next가 가리키는 노드일 것이므로,
      // curr.next가 null일 경우 false를 반환하도록 함.
      curr = curr.next;
    }

    this.head = curr;
    this.head.prev = null;

    return true;
  }

  access(index) {
    let curr = this.head;
    if (!curr) return false;

    for (let i = 0; i < index; i++) {
      if (!curr.next) return false;
      curr = curr.next;
    }

    return curr;
  }

  insert(index, value) {
    const node = new Node(value, null, null);

    let curr = this.head;
    if (!curr) return false;

    // index === 0인 경우 아래 for문 실행하지 않고 바로 if문으로 넘어감.
    for (let i = 0; i < index; i++) {
      if (!curr.next) return false;
      curr = curr.next;
    }

    if (curr === this.tail) {
      // for문 실행 후 예외 처리
      // curr === this.tail일 경우 -> append와 동일
      curr.next = node;
      node.prev = curr;
      this.tail = node;
    } else {
      curr.next.prev = node;
      node.next = curr.next;

      curr.next = node;
      node.prev = curr;
    }

    return true;
  }

  remove(index) {
    let curr = this.head;
    if (!curr) return false;

    // 예외 처리 1 : index === 0이어서 head를 제거해야 하는 경우
    if (index === 0) {
      // list에 head 밖에 없을 경우
      if (!curr.next) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = curr.next;
        // 이전 head는 garbage collecting 되도록 하기
        this.head.prev = null;
      }

      return true;
    }

    for (let i = 0; i < index; i++) {
      if (!curr.next) return false;
      curr = curr.next;
    }

    // 예외 처리 2 : 제거해야 하는 노드가 tail일 경우
    if (curr === this.tail) {
      curr.prev.next = null;
      this.tail = curr.prev;
    } else {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }

    return true;
  }

  print() {
    let curr = this.head;

    if (!curr) {
      console.log('[]');
      return;
    }

    let elems = '';

    while (curr) {
      elems += ` ${curr.value},`;
      curr = curr.next;
    }
    console.log(`[${elems.trim().slice(0, -1)}]`);
  }

  printInv() { // print inverse ?
    let curr = this.tail;

    if (!curr) {
      console.log('[]');
      return;
    }

    let elems = '';

    while (curr) {
      elems += ` ${curr.value},`;
      curr = curr.prev;
    }
    console.log(`[${elems.trim().slice(0, -1)}]`);
  }
}

/** test */
const printTest = () => console.log(testList);

const testList = new DoublyLinkedList();

printTest(); // DoublyLinkedList { head: null, tail: null }
console.log(testList.isEmpty()); // true

testList.prepend('testData1');
printTest();
testList.prepend('testData2');
printTest();
testList.prepend('testData3');
printTest();

testList.append('testData4');
printTest();

console.log(testList.setHead(4)); // false
console.log(testList.setHead(2)); // true
printTest();

console.log(testList.access(0));
console.log(testList.access(1));
console.log(testList.access(2));

testList.insert(0, 'testData5');
printTest();
testList.insert(2, 'testData6');
printTest();

/*
testList.remove(1);
printTest();
testList.remove(0);
printTest();
testList.remove(1);
printTest();
testList.remove(0); // head만 남은 상태에서 head 노드 제거하기
printTest(); // DoublyLinkedList { head: null, tail: null }
*/

testList.print();
// [testData1, testData5, testData4, testData6]
testList.printInv();
// [testData6, testData4, testData5, testData1]

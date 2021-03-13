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
    if (index <= 0) return false;

    let curr = this.head;
    if (!curr) return false;

    for (let i = 0; i < index; i++) {
      if (!curr.next) return false;
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

  /*
  insert(index, value) {

  }

  remove(index) {

  }

  print() {

  }

  printInv() {

  }
  */
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

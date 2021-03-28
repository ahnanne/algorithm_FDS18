class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(array) {
    const nodeArray = array.map(el => new Node(el));

    for (let i = 0; i < nodeArray.length; i++) {
      const leftInd = i * 2 + 1;
      const rightInd = i * 2 + 2;

      if (leftInd < nodeArray.length) {
        nodeArray[i].left = nodeArray[leftInd];
      }

      if (rightInd < nodeArray.length) {
        nodeArray[i].right = nodeArray[rightInd];
      }
    }

    this.root = nodeArray[0];
  }

  preorder() {
    const res = [];

    function recursive(node) {
      if (!node) return;

      res.push(node.value);
      recursive(node.left);
      recursive(node.right);
    }

    recursive(this.root);

    return res;
  }

  inorder() {
    const res = [];

    function recursive(node) {
      if (!node) return;

      recursive(node.left);
      res.push(node.value);
      recursive(node.right);
    }

    recursive(this.root);

    return res;
  }

  postorder() {
    const res = [];

    function recursive(node) {
      if (!node) return;

      recursive(node.left);
      recursive(node.right);
      res.push(node.value);
    }

    recursive(this.root);

    return res;
  }

  bfs(value) {
    const queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.value === value) return true;

      /**
      let s = '';
      for (let i = 0; i < queue.length; i++) {
        s += queue[i].value;
      }
      console.log(s);
      */
      /** 🥞 s는 아래와 같이 출력됨.
      * c
        de
        efg
        fghi
        ghijk
        hijk
        ijk
        jk
        k
      */

      if (node.left !== undefined) queue.push(node.left);
      if (node.right !== undefined) queue.push(node.right);
    }

    return false;
  }

  dfs(value) { // preorder(부모 노드 먼저 처리)
    let isFound = false;

    function recursive(node) {
      if (!node) return;

      if (node.value === value) {
        isFound = true;
        return;
      }
      recursive(node.left);
      recursive(node.right);
    }

    recursive(this.root);

    return isFound;
  }
}

/* TEST --------------------------------------------------------------------- */

const binaryTree = new BinaryTree([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'
]);

console.log(binaryTree);
console.log(binaryTree.preorder());
console.log(binaryTree.inorder());
console.log(binaryTree.postorder());

console.log(binaryTree.bfs(100)); // false
console.log(binaryTree.bfs('j')); // true

console.log(binaryTree.dfs(100)); // false
console.log(binaryTree.dfs('j')); // true

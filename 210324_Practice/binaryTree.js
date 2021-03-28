class BinaryTree {
  constructor(array) {
    this.array = array;
  }

  preorder() {
    const arr = this.array;
    const result = [];
    let idx = 0;

    function movingLeft() {
      result.push(arr[idx]);
      idx = Math.floor((idx * 2) + 1); // 왼쪽 자식으로 이동
      console.log(arr[idx]);
      if (arr[idx] !== null) movingLeft();
      else {
        idx = Math.floor((idx - 1) / 2); // 다시 부모 노드로 올라옴
        idx = Math.floor((idx * 2) + 2); // 오른쪽 자식으로 이동
        if (arr[idx] !== null) movingLeft();
        else return;
      }
      return;
    }

    movingLeft();
    console.log(result);
    return result;

    /**
    result.push(this.array[idx]); // 루트 노드 push
    idx = Math.floor((idx * 2) + 1); // 왼쪽 자식으로 이동
    if (this.array[idx]) { // 왼쪽 자식 있으면!
      result.push(this.array[idx]); // 왼쪽 자식 노드 push
      idx = Math.floor((idx * 2) + 1); // 왼쪽 자식으로 이동
    } else { // 왼쪽 자식 없으면!
      idx = Math.floor((idx - 1) / 2); // 다시 부모 노드로 올라옴
      idx = Math.floor((idx * 2) + 2); // 오른쪽 자식으로 이동

      if (this.array[idx]) { // 오른쪽 자식 있으면!
        result.push(this.array[idx]); // 오른쪽 자식 노드 push
        Math.floor(idx = (idx * 2) + 1); // 왼쪽 자식 노드로 이동

        // 반복 ..
      } else return result; // 더 이상 순회할 값 없으면 결과 반환
    }
    */
  }

  inorder() {

  }

  postorder() {

  }

  bfs(value) {

      return false;
  }

  dfs(value) {

      return false;
  }

}

/* -------------------------------------------------------------------------- */

const tree = new BinaryTree(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);

/**
tree.preorder();
tree.inorder()
tree.postorder()

console.log(tree.dfs(15))
console.log(tree.dfs(11))

console.log(tree.bfs(6))
console.log(tree.bfs(17))
*/

console.log(tree.preorder());

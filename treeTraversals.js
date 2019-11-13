const BST = require('./bst');

function inOrder(BST) {
  if(BST.left) {
    inOrder(BST.left)
  }
  console.log(BST.key)
  if(BST.right) {
    inOrder(BST.right)
  }
}

function preOrder(BST) {
  console.log(BST.key)
  if(BST.left) {
    preOrder(BST.left)
  }
  if(BST.right) {
    preOrder(BST.right)
  }
}

function postOrder(BST) {
  if(BST.left) {
    postOrder(BST.left)
  }
  if(BST.right) {
    postOrder(BST.right)
  }
  console.log(BST.key)
}

function main() {
  let bst = new BST();
  let dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
  dataset.forEach(item => bst.insert(item))
  console.log(postOrder(bst))
}

main();
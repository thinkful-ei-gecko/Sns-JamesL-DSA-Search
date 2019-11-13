const BST = require('./bst');
const Queue = require('./queue');

function nextCommand(bst, result=[]) {
  const queue = new Queue()
  queue.enqueue(bst)

  while(queue.first !== null) {
    const node = queue.dequeue()
    result.push(node.value)

    if(node.left) {
      queue.enqueue(node.left)
    }
    if(node.right) {
      queue.enqueue(node.right)
    }
  }
  result.forEach(officer => console.log(officer))
}

//Picard, Riker, Data, Worf, LaForge, Crusher, security, Selar

function commanders() {
  let bst = new BST()
  bst.insert(10, 'Picard')
  bst.insert(5, 'Riker')
  bst.insert(15, 'Data')
  bst.insert(3, 'Worf')
  bst.insert(7, 'LaForge')
  bst.insert(17, 'Crusher')
  bst.insert(1, 'Security')
  bst.insert(16, 'Selar')
  console.log(nextCommand(bst))
}

commanders()

class _Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(data) {
		const newNode = new _Node(data);
		if (this.first === null) {
			this.first = newNode;
		}
		if (this.last) {
			this.last.next = newNode;
		}
		this.last = newNode;
	}

	dequeue() {
		if (this.first === null) {
			return;
		}
		const node = this.first.value;
		this.first = this.first.next;
		if (node === this.last) {
			this.last = null;
		}
		return node;
	}
}

function peek(queue) {
	if (queue.first !== null) {
		return queue.first.value;
	} else {
		return null;
	}
}

function isEmpty(queue) {
	if (queue.first === null) {
		return true;
	}
	return false;
}

function display(queue) {
	let curr = queue.first;
	while (curr !== null) {
		console.log(curr.value);
		curr = curr.next;
	}
}

function remove(data, queue) {
	const tempQ = new Queue();
	while (queue.first !== null) {
		if (queue.first.value === data) {
			queue.dequeue();
		}
		tempQ.enqueue(queue.dequeue());
	}
	while (tempQ.first !== null) {
		queue.enqueue(tempQ.dequeue());
	}
	display(queue);
}

module.exports = Queue
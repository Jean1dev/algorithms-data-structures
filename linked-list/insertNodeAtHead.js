'use strict';

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

};

function insertNodeAtHead(head, data) {
  if (head == null) {
    return new SinglyLinkedListNode(data);
  }

  var node = new SinglyLinkedListNode(data);
  node.next = head;
  return node;
}

function main() {

  const llistCount = [
    383,
    484,
    392,
    975,
    321,
  ]

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount.length; i++) {
    const llistItem = llistCount[i];
    const llist_head = insertNodeAtHead(llist.head, llistItem);
    llist.head = llist_head;
    console.table(llist)
  }
}

main();

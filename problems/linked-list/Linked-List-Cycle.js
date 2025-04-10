// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously
// following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
//  Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

class LinkedList {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  FindCycle(head) {
    if (!head && !head.next) {
      return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        return true;
      }
    }

    return false;
  }
}

let node1 = new LinkedList();
let node2 = new LinkedList();
let node3 = new LinkedList();
let node4 = new LinkedList();

node1.value = 10;
node1.next = node2;

node2.value = 20;
node2.next = node3;

node3.value = 30;
node3.next = node4;

node4.value = 30;
node4.next = node2;

let linklist = new LinkedList();
console.log(linklist.FindCycle(node1));

class LinkedList {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

function findLoop(head) {
  if (head == null || head.next == null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

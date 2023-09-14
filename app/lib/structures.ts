class Node<T> {
  private _data: T;
  private _prev: Node<T> | null
  private _next: Node<T> | null

  constructor(data: T) {
    this._data = data;
    this._prev = null;
    this._next = null;
  }

  get data(): T {
    return this._data
  }

  set data(data: T) {
    this._data = data;
  }

  get prev(): Node<T> | null {
    return this._prev
  }

  set prev(node: Node<T> | null) {
    this._prev = node
  }

  get next(): Node<T> | null {
    return this._next
  }

  set next(node: Node<T> | null) {
    this._next = node
  }
}

// This is an instance of a dummy node that has has itself
// both as previous and next node. This is useful in linked lists
// for iteration
const dummyNode = (() => {
  const n = new Node(undefined)
  n.next = n
  n.prev = n
  return n
})()

class Queue<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  length(): number {
    if (!this.head) {
      return 0
    }

    let c: Node<T> | null = this.head
    let length = 0;

    do {
      length += 1;
      c = c.next
    } while (c !== null);

    return length
  }

  enqueue(n: T) {
    const newNode = new Node(n);

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (this.tail) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      }
    }
  }

  dequeue(): T | null {
    if (!this.head) {
      return null
    } else {
      const data = this.head.data

      this.head = this.head.next
      if (this.head) {
        this.head.prev = null;
      } else {
        // empty queue after dequeue
        this.tail = null;
      }
      return data;
    }
  }

  peek(): T | null {
    if (!this.head) {
      return null;
    }

    return this.head.data
  }

  moveUp(index: number) {
    if (index <= 0 && index >= this.length()) {
      return
    }

    let c = this.head
    let ci = 0;

    while (c && ci < index) {
      c = c.next
      ci += 1;
    }

    if (c && c.prev) {
      const t = c.data
      // swap data of nodes without swapping the nodes
      c.data = c.prev.data;
      c.prev.data = t
    }
  }

  moveDown(index: number) {
    if (index <= 0 && index >= this.length() - 1) {
      return
    }

    let c = this.head
    let ci = 0;

    while (c && ci < index) {
      c = c.next
      ci += 1;
    }

    if (c && c.next) {
      const t = c.data
      // swap data of nodes without swapping the nodes
      c.data = c.next!.data;
      c.next!.data = t
    }
  }

  at(index: number): T | null {
    if (!this.head) {
      return null
    }
    let c: Node<T> | null = this.head
    let ci = 0;

    while (c && ci < index) {
      c = c.next
      ci += 1;
    }

    if (c && c.data) {
      return c.data
    }

    return null
  }

  flush() {
    // just use the garbage collector for disposing
    this.head = null;
    this.tail = null;
  }

  *[Symbol.iterator]() {
    if (!this.head) {
      return;
    }

    let c = this.head;

    do {
      yield c.data
      c = c.next!
    } while (c !== null)
  }

  elements(): T[] {
    if (!this.head) {
      return []
    }
    const r: T[] = []

    for (const el of this) {
      r.push(el)
    }

    return r
  }
}

class CircularList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  length(): number {
    if (!this.head) {
      return 0
    }

    let c: Node<T> | null = this.head
    let length = 0;

    do {
      length += 1;
      c = c!.next
    } while (c !== this.head);

    return length
  }

  append(n: T): void {
    const newNode = new Node(n);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;

      this.head.prev = newNode;
      // cannot be null when used accordingly, because initialization of head
      // and tail coincide
      this.tail!.next = newNode;
      this.tail = newNode
    }
  }

  insertAt(n: T, index: number): void {
    const length = this.length()
    const actualIndex = index % length;

    const newNode = new Node(n);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else if (index === 0) {
      newNode.next = this.head;
      newNode.prev = this.tail;

      this.head.prev = newNode;
      this.tail!.next = newNode;
      this.head = newNode;
    } else if (index === length) {
      newNode.next = this.head;
      newNode.prev = this.tail;

      this.head.prev = newNode;
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      let c: Node<T> | null = this.head;
      let ci = 0;

      while (ci < actualIndex) {
        c = c.next!;
        ci++;
      }

      newNode.prev = c.prev
      newNode.next = c
      c.prev!.next = newNode
      c.prev = newNode
    }
  }

  remove(data: T): T | null {
    if (!this.head) {
      return null
    }

    let c = this.head;

    do {
      if (c.data === data) {
        const t = c.data
        if (c === this.head) {
          this.head = this.head.next;
          this.head!.prev = this.tail;
          this.tail!.next = this.head;
        } else if (c === this.tail) {
          this.tail = this.tail.prev
          this.tail!.next = this.head;
          this.head!.prev = this.tail;
        } else {
          c.prev!.next = c.next
          c.next!.prev = c.prev
        }
        return t
      }
      c = c.next!
    } while (c !== this.head)
    return null;
  }

  removeAt(index: number): T | null {
    if (!this.head) {
      return null;
    }

    const length = this.length()
    const actualIndex = index % length

    if (actualIndex < 0) {
      return null;
    }

    let c: Node<T> = this.head

    for (let i = 0; i < actualIndex; i++) {
      c = c.next!;
    }

    return this.remove(c.data);
  }

  enqueue(data: T) {
    this.append(data)
  }

  dequeue(): T | null {
    return this.removeAt(0);
  }

  take(): T | null {
    if (!this.head) {
      return null
    }

    return this.head.data;
  }

  flush() {
    // just use the garbage collector for disposing the objects
    this.head = null;
    this.tail = null;
  }

  /**
   * next returns the current head and advances the head and tail pointers to their next nodes
   * @returns the data at the *head* pointer before the invocation
   */
  next(): T | null {
    if (!this.head) {
      return null
    }

    const t = this.head.data
    this.head = this.head.next;
    this.tail = this.tail!.next;
    return t
  }

  /**
   * next returns the current head and disadvances the head and tail pointers to their previous nodes
   * @returns the data at the *head* pointer before the invocation
   */
  prev(): T | null {
    if (!this.head) {
      return null
    }

    const t = this.head.data
    this.head = this.head.prev;
    this.tail = this.tail!.prev;
    return t
  }

  moveUp(index: number) {
    const length = this.length()
    if (!this.head || length <= 1 || index < 0 || index >= length) {
      return;
    }

    if (index == 0) {
      const t = this.head
      this.head = this.head.next;
      this.tail = t;
      return;
    }


    let c: Node<T> | null = this.head;
    let ci = 0;

    do {
      if (ci === index) {
        const prevNode: Node<T> | null = c.prev;

        if (prevNode !== c) {
          c.prev = prevNode!.prev;
          prevNode!.prev!.next = c;
          prevNode!.next = c.next;
          c.next!.prev = prevNode;
          c.next = prevNode;
          prevNode!.prev = c;

          if (this.head === prevNode) {
            this.head = c
          }
        }
        return
      }

      c = c.next!
      ci += 1;
    } while (c !== this.head);
  }

  moveUpBy(index: number, distance: number) {
    for (let i = 0; i < distance; i++) {
      // required because negative operands on javascripts % will cause negative results, which
      // generally is not the way we intend to use the mod function, i.e., 
      // moveUpBy(2, 3) on a list of 3 elements will cause index - distance % this.length to be -1, 
      // instead of 2 as we would expect with the "regular" modulus for negative numbers.
      this.moveUp(positiveDefiniteMod(index - i, this.length()))
    }
  }

  moveDown(index: number) {
    const length = this.length()
    if (!this.head || length <= 1 || index < 0) {
      return;
    }

    if (index >= length - 1) {
      const t = this.tail
      this.tail = this.tail!.prev
      this.head = t;
      return;
    }

    let c: Node<T> | null = this.head;
    let ci = 0;

    do {
      if (ci === index) {
        const nextNode: Node<T> | null = c.next;

        if (nextNode !== c) {
          c.next = nextNode!.next;
          nextNode!.next!.prev = c;
          nextNode!.prev = c.prev;
          c.prev!.next = nextNode;
          c.prev = nextNode;
          nextNode!.next = c;

          if (this.head === c) {
            this.head = nextNode
          }
        }
        return
      }

      c = c.next!
      ci += 1;
    } while (c !== this.head);
  }

  moveDownBy(index: number, distance: number) {
    for (let i = 0; i < distance; i++) {
      // required because negative operands on javascripts % will cause negative results, which
      // generally is not the way we intend to use the mod function, i.e., 
      // moveUpBy(2, 3) on a list of 3 elements will cause index - distance % this.length to be -1, 
      // instead of 2 as we would expect with the "regular" modulus for negative numbers.
      this.moveDown(positiveDefiniteMod(index + i, this.length()))
    }
  }

  *[Symbol.iterator]() {
    if (!this.head) {
      return;
    }

    let c = this.head;

    do {
      yield c.data
      c = c.next!
    } while (c !== this.head)
  }

  at(index: number): T | null {
    if (!this.head) {
      return null
    }

    const length = this.length()
    const actualIndex = index % length

    let c: Node<T> | null = this.head
    let ci = 0;

    while (c && ci < actualIndex) {
      c = c.next
      ci += 1;
    }

    if (c && c.data) {
      return c.data
    }

    return null
  }

  elements(): T[] {
    if (!this.head) {
      return []
    }
    const r: T[] = []

    for (const el of this) {
      r.push(el)
    }

    return r
  }
}

function positiveDefiniteMod(operand: number, modulus: number): number {
  return ((operand % modulus) + modulus) % modulus;
}

export { Queue, CircularList }
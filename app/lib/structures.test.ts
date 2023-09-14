import { describe, expect, test } from "@jest/globals"
import { CircularList, Queue } from "./structures";

type track = {
  title: string
}

const titleToTrack = (s: string) => ({
  title: s
})

function createQueue<T, S>(transformer: (s: S) => T, ...els: S[]): [Queue<T>, T[]] {
  const elements = els.map(transformer)

  const q = new Queue<T>()

  for (const el of elements) {
    q.enqueue(el)
  }

  return [q, elements]
}


function createCircularList<T, S>(transformer: (s: S) => T, ...els: S[]): [CircularList<T>, T[]] {
  const elements = els.map(transformer)

  const l = new CircularList<T>()

  for (const el of elements) {
    l.enqueue(el)
  }

  return [l, elements]
}

describe("queue class", () => {
  test("create queue", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C")

    for (const el of q.elements()) {
      expect(new Set(elements)).toContain(el);
    }
  });

  test("dequeue", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C")

    const el = q.dequeue()
    expect(el).toBeTruthy()
    expect(el).toBe(elements[0])

    for (const el of q.elements()) {
      expect(new Set(elements.filter((_, i) => i !== 0))).toContain(el);
    }
  });

  test("dequeue to empty", () => {
    const q = new Queue<track>()

    q.dequeue()

    expect(q.dequeue()).toBeNull()
  })

  test("peek", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C")

    const el = q.peek()

    expect(el).toBeTruthy()
    expect(el).toBe(elements[0])

    expect(q.length()).toBe(3)
  })

  test("moveDown", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C", "D", "E")
    const i = 2;

    q.moveDown(i)
    expect(q.at(i)).toBe(elements[i + 1])
    expect(q.at(i + 1)).toBe(elements[i])
  })

  test("moveUp", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C", "D", "E")

    const i = 4;
    q.moveUp(i)

    expect(q.at(i - 1)).toBe(elements[i])
    expect(q.at(i)).toBe(elements[i - 1])
  })

  test("moveUp 2x", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C", "D", "E")

    const i = 2;

    q.moveUp(i + 2)
    q.moveUp(i + 1)

    expect(elements[i]).toBe(q.at(i + 1))
    expect(elements[i + 1]).toBe(q.at(i + 2))
    expect(elements[i + 2]).toBe(q.at(i))
  })

  test("moveUp 2x beyond top", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C")
    const i = 1;

    q.moveUp(i)
    q.moveUp(i - 1)

    expect(elements[i]).toBe(q.at(i - 1)) // moveUp at 0th place does not change the queue
    expect(elements[i + 1]).toBe(q.at(i + 1))
    expect(elements[i]).toBe(q.at(i - 1))
  })

  test("moveDown 2x beyond bottom", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C")

    const i = 1;

    q.moveDown(i)
    q.moveDown(i + 1)

    expect(elements[i]).toBe(q.at(i + 1)) // moveDown at last place does not change the queue
    expect(elements[i - 1]).toBe(q.at(i - 1))
  })


  test("flush", () => {
    const [q] = createQueue(titleToTrack, "A", "B", "C", "D", "E")

    q.flush()

    expect(q.length()).toBe(0)
  });

  test("at", () => {
    const [q, elements] = createQueue(titleToTrack, "A", "B", "C", "D", "E")

    const i = 2;

    const el = q.at(i)
    expect(el).toBe(elements[i])
  })
})

describe("circular list class", () => {
  test("create circular list", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    for (const el of l.elements()) {
      expect(new Set(elements)).toContain(el);
    }
  });

  test("move counterclockwise", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    l.moveUp(0)

    expect(elements[0]).toBe(l.at(2))
    expect(elements[1]).toBe(l.at(0))
    expect(elements[2]).toBe(l.at(1))
  })

  test("move clockwise", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    l.moveDown(2)

    expect(elements[0]).toBe(l.at(1))
    expect(elements[1]).toBe(l.at(2))
    expect(elements[2]).toBe(l.at(0))
  })

  test("move clockwise 3x", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    l.moveDown(2)
    l.moveDown(0)
    l.moveDown(1)

    expect(l.at(0)).toBe(elements[0])
    expect(l.at(1)).toBe(elements[1])
    expect(l.at(2)).toBe(elements[2])
  })

  test("move counterclockwise 3x", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    l.moveUp(2)
    l.moveUp(1)
    l.moveUp(0)

    expect(l.at(0)).toBe(elements[0])
    expect(l.at(1)).toBe(elements[1])
    expect(l.at(2)).toBe(elements[2])
  })

  test("moveUpBy(3)", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    l.moveUpBy(2, 3)

    expect(l.at(0)).toBe(elements[0])
    expect(l.at(1)).toBe(elements[1])
    expect(l.at(2)).toBe(elements[2])
  })

  test("moveDownBy(3)", () => {
    const [l, elements] = createCircularList(titleToTrack, "A", "B", "C")

    l.moveDownBy(2, 3) // for a three-element list, should return the same order

    expect(l.at(0)).toBe(elements[0])
    expect(l.at(1)).toBe(elements[1])
    expect(l.at(2)).toBe(elements[2])
  })

})
const {LinkedList, Node} = require('../src/linked-list');

describe("Node", () => {
  test('should take a value argument in the constructor and define next and previous to be null by default', () => {
    const node = new Node('test')
    expect(node.value).toEqual('test')
    expect(node.next).toEqual(null)
    expect(node.previous).toEqual(null)
  })
})

describe("Linked List", () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test('should take no arguments in the constructor and define head and tail to be null', () => {
    expect(linkedList.head).toEqual(null)
    expect(linkedList.tail).toEqual(null)
  })

  test('has methods `addToTail`, `addToHead`, `removeHead`, `removeTail`, and `search`', () => {
    expect(typeof linkedList.addToTail).toEqual('function')
    expect(typeof linkedList.addToHead).toEqual('function')
    expect(typeof linkedList.removeHead).toEqual('function')
    expect(typeof linkedList.removeTail).toEqual('function')
    expect(typeof linkedList.search).toEqual('function')
  })

  test('`addToTail` method should take a value as a parameter', () => {
    // the length of a function returns how many parameters it has
    expect(linkedList.addToTail.length).toEqual(1)
  })

  test('`addToTail` method should use `Node` class to add nodes', () => {
    linkedList.addToTail('first')
    expect(linkedList.tail instanceof Node).toEqual(true)
  })

  test('`addToTail` method should be able to add to tail without removing or overwriting existing nodes', () => {
    linkedList.addToTail('first')
    expect(linkedList.tail.value).toEqual('first')

    linkedList.addToTail('second')
    expect(linkedList.tail.value).toEqual('second')
    expect(linkedList.tail.previous.value).toEqual('first')
  })

  test('if the linked list consists of a single node after adding to tail, that node should be both the head and the tail', () => {
    linkedList.addToTail('only')
    expect(linkedList.head.value).toEqual('only')
    expect(linkedList.head).toEqual(linkedList.tail)
    expect(linkedList.head.next).toEqual(null)
    expect(linkedList.head.previous).toEqual(null)
  })

  test('`addToHead` method should take a value as a parameter', () => {
    // the length of a function returns how many parameters it has
    expect(linkedList.addToHead.length).toEqual(1)
  })

  test('`addToHead` method should use `Node` class to add nodes', () => {
    linkedList.addToHead('first')
    expect(linkedList.head instanceof Node).toEqual(true)
  })

  test('`addToHead` method should be able to add to head without removing or overwriting existing nodes', () => {
    linkedList.addToHead('first')
    expect(linkedList.head.value).toEqual('first')

    linkedList.addToHead('zeroth')
    expect(linkedList.head.value).toEqual('zeroth')
    expect(linkedList.head.next.value).toEqual('first')
  })

  test('if the linked list consists of a single node after adding to head, that node should be both the head and the tail', () => {
    linkedList.addToHead('only')
    expect(linkedList.head.value).toEqual('only')
    expect(linkedList.head).toEqual(linkedList.tail)
    expect(linkedList.head.next).toEqual(null)
    expect(linkedList.head.previous).toEqual(null)
  })

  test('`removeHead` method should return the `value` of the removed head node', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toEqual('first')
    expect(linkedList.removeHead()).toEqual('second')
    expect(linkedList.removeHead()).toEqual('third')
  })

  test('`removeHead` method should reassign the `head` after the current head node is removed', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeHead() // remove 'first'
    expect(linkedList.head.value).toEqual('second')

    linkedList.removeHead() // remove 'second'
    expect(linkedList.head.value).toEqual('third')
  })

  test('`removeHead` method should make sure the `previous` of any newly appointed head is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeHead()
    expect(linkedList.head.value).toEqual('second')
    expect(linkedList.head.previous).toEqual(null)

    linkedList.removeHead()
    expect(linkedList.head.value).toEqual('third')
    expect(linkedList.head.previous).toEqual(null)
  })

  test('`removeHead` method returns null if there is no head to remove (ie: the list is empty, or all nodes have been removed)', () => {
    expect(linkedList.removeHead()).toEqual(null)

    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    linkedList.removeHead()
    linkedList.removeHead()
    linkedList.removeHead()
    expect(linkedList.removeHead()).toEqual(null)
  })

  test('`removeHead` method should reset head and tail to null when last node is removed', () => {
    linkedList.addToTail('first')
    linkedList.removeHead()
    expect(linkedList.head).toEqual(null)
    expect(linkedList.tail).toEqual(null)
  })

  test('`removeTail` method should return the `value` of the removed tail node', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeTail()).toEqual('third')
    expect(linkedList.removeTail()).toEqual('second')
    expect(linkedList.removeTail()).toEqual('first')
  })

  test('`removeTail` method should reassign the `tail` after the current tail node is removed', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeTail() // remove 'third'
    expect(linkedList.tail.value).toEqual('second')

    linkedList.removeTail() // remove 'second'
    expect(linkedList.tail.value).toEqual('first')
  })

  test('`removeTail` method should make sure the `next` of any newly appointed tail is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeTail()
    expect(linkedList.tail.value).toEqual('second')
    expect(linkedList.tail.next).toEqual(null)

    linkedList.removeTail()
    expect(linkedList.tail.value).toEqual('first')
    expect(linkedList.tail.next).toEqual(null)
  })

  test('`removeTail` method returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)', () => {
    expect(linkedList.removeTail()).toEqual(null)

    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    linkedList.removeTail()
    linkedList.removeTail()
    linkedList.removeTail()
    expect(linkedList.removeTail()).toEqual(null)
  })

  test('should return the correct values when searching for a string or number', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    linkedList.addToTail('three')
    expect(linkedList.search('one')).toEqual('one')
    expect(linkedList.search('sdd')).toEqual(null)
    expect(linkedList.search('three')).toEqual('three')
  })

  test('should be able to take functions as search inputs', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    const foundNode = linkedList.search((nodeValue) => {
      return nodeValue === 'two'
    })
    expect(foundNode).toEqual('two')
  })

  // This spec demonstrates the utility of the previous spec.
  // If you are passing the last one correctly, this one should already pass!
  test('should therefore be able to store and search for objects, not just strings', () => {
    function UserNode (name, email, city) {
      this.name = name
      this.email = email
      this.city = city
    }

    linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'))

    const foundNode1 = linkedList.search((userNode) => {
      return userNode.name === 'Nimit'
    })
    expect(foundNode1.email).toEqual('nimit@fs.com')

    const foundNode2 = linkedList.search((userNode) => {
      return userNode.email === 'david@fs.com'
    })
    expect(foundNode2.city).toEqual('New York')

    const foundNode3 = linkedList.search((userNode) => {
      return userNode.city === 'Mountain View'
    })
    expect(foundNode3.name).toEqual('Paul')
  })
})

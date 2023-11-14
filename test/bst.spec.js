
const BinarySearchTree = require('../src/bst');

describe.only('BinarySearchTree', () => {
  let tree
  let testArr
  const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]

  // Before each spec, create a new BST with 20 at the root
  beforeEach(() => {
    tree = new BinarySearchTree(20)
    testArr = []
  })

  test('should take a value argument in the constructor, define `left` and `right to be null`, and include a `magnitude` to represent the tree size', () => {
    expect(tree.value).toEqual(20)
    expect(tree.left).toEqual(null)
    expect(tree.right).toEqual(null)
    expect(tree.magnitude).toEqual(1);
  })

  test('has methods named `insert`, `size`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`', () => {
    expect(typeof tree.insert).toEqual('function')
    expect(typeof tree.size).toEqual('function')
    expect(typeof tree.contains).toEqual('function')
    expect(typeof tree.depthFirstForEach).toEqual('function')
    expect(typeof tree.breadthFirstForEach).toEqual('function')
  })

  describe('`insert` method', () => {
    test('makes nodes on the correct branches, without overwriting existing nodes', () => {
      tree.insert(12)
      tree.insert(22)
      expect(tree.value).toEqual(20)
      expect(tree.left.value).toEqual(12)
      expect(tree.right.value).toEqual(22)
    })

    test('sorts values when adding', () => {
      // see the `beforeEach` above to see what is in `valuesToInsert`
      valuesToInsert.forEach(val => tree.insert(val))
      expect(tree.value).toEqual(20)
      expect(tree.left.value).toEqual(15)
      expect(tree.right.value).toEqual(25)
      expect(tree.left.left.value).toEqual(5)
      expect(tree.left.left.right.left.left.left.value).toEqual(11)
      expect(tree.right.right.right.left.left.right.left.right.value).toEqual(34)
    })
  })

  describe('`size` method', () => {
    test('reports the current size of the tree', () => {
      expect(tree.size()).toEqual(1)
      tree.insert(12)
      expect(tree.size()).toEqual(2)
      valuesToInsert.forEach(val => tree.insert(val))
      expect(tree.size()).toEqual(21)
    })
  })

  describe('`contains` method', () => {
    test('returns true if passed a value that exists in the tree', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      valuesToInsert.forEach((value) => {
        expect(tree.contains(value)).toEqual(true)
      })
    })

    test('returns false if passed a value that exists in the tree', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })

      const valuesNotInserted = [6, 23, 37, 51]
      valuesNotInserted.forEach((value) => {
        expect(tree.contains(value)).toEqual(false)
      })
    })
  })

  describe('`depthFirstForEach` method', () => {
    test('runs a depth-first "in-order" traversal when run with no option or "in-order" option', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      // Note: no argument is passed in for the second parameter. This means that "in-order" should be our default.
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      })
      expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ])
      testArr = []
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      }, 'in-order')
      expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ])
    })

    test('runs a depth-first "pre-order" traversal when run with "pre-order" option', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      }, 'pre-order')
      expect(testArr).toEqual([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34])
    })
    test('runs a depth-first "post-order" traversal when run with "post-order" option', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      }, 'post-order')
      expect(testArr).toEqual([1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20])
    })
  })

  describe('`breadthFirstForEach` method', () => {

    test('runs a breadth-first traversal', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      const depth = []
      tree.breadthFirstForEach((val) => {
        depth.push(val)
      })
      expect(depth).toEqual([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34])
    })
  })
})

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }
  insert(value){
    if (value === this.value){
      return;
    }
    const direction = value < this.value ? 'left' : 'right'
    if (this[direction]){
      this[direction].insert(value)
    } else {
      this[direction] = new BinarySearchTree(value)
    }
    this.magnitude++
  }
  contains(value){
    if(this.value=== value){
      return true
    }
    const direction = value < this.value ? 'left' : 'right'
    if (this[direction]) {
      return this[direction].contains(value)
    } else {
      return false;
    }
  }
  depthFirstForEach(func, order = 'in-order'){
    if (order === 'pre-order'){
      func(this.value)
    }
    if(this.left){
      this.left.depthFirstForEach(func, order)
    }
    if (order === 'in-order'){
      func(this.value)
    }
    if (this.right){
      this.right.depthFirstForEach(func,order)
    }
    if (order === 'post-order'){
      func(this.value)
    }
  }
  breadthFirstForEach(func){
    const queue = [this]
    while(queue.length){
      const current = queue.shift()
      if (current.left){
        queue.push(current.left)
      }
      if (current.right){
        queue.push(current.right)
      }
      func(current.value)
    }
  }
  size(){
    return this.magnitude;
  }
  
}

module.exports = BinarySearchTree

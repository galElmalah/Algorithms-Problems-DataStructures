const LinkedList = require("./linkedList")

class Queue {
  constructor(){
    this.linkedList = new LinkedList();
    this.length = 0;
  }

  enqueue(...items){
    this.linkedList.push(...items);
    this.length += items.length ;
  }

  dequeue(){
    if(this.linkedList.isEmpty()){
      this.length -- ;
      return this.linkedList.shift();
    } else {
      throw "The queue is empty!"
    }
  }

  peek(){
    // reg ex to eliminiate the braces
    if(this.isEmpty()){
      return "Empty Queue"
    }
    return this.linkedList
                .toString()
                .split("-")[0]
                .replace(/\(|\)/g,"")
                .trim();
  }

  isEmpty(){
    return this.length === 0;
  }
}
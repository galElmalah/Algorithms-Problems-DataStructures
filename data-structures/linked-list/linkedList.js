class Node{
  constructor(data=null){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = this.head;
  };

  push(...items){

    if(!this.head){
      this.head = new Node(items[0]);
      this.tail = this.head;
      items.splice(0,1);
    }
    items.forEach((item) =>{
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    });
    return this;
  }

  find(value, compareFunction = (a,b) => a === b ){
    let tmp = this.head;
    while(tmp !== null){
      if(compareFunction(tmp.data, value)){
        return tmp;
      }
      tmp = tmp.next;
    }
    return null;
  }
    
  deleteByValue(val){
    let tmp = this.head;
    let prev;
    // if its the head
    if (tmp.data === val){
      this.head = tmp.next;
      return true;
    }
    while(tmp.next){
      prev = tmp;
      if(tmp.next.data == val){
        tmp.next = tmp.next.next;
        return true;
      }
      
      tmp = tmp.next;
    }
    //if its the tail
    if(tmp.data === val){
      prev.next = tmp.next;
      return true;
    }
    return false;
  }

  toString(){
    let tmp = this.head;
    let str = "";
    while(tmp){
      str += "( "+String(tmp.data) + " )->" ;
      tmp = tmp.next;
    }
    return str;
  }

  reverse(){
    this.tail = this.head;
    let current = this.head;
    let prev = null;
    let next;
    while(current){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head =prev;
  }

  shift(){
    // shift method to be used in the Queue class
    let tmp =null;
    if (this.head){
      tmp = this.head
      this.head = this.head.next;
      return tmp.data;
    }
    return tmp;
  }

  isEmpty(){
    return this.head !== null;
  }
}

module.exports = LinkedList

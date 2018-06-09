const LinkedList = require("../linked-list/linkedList");

class HashTable {
  constructor(tableSize = 32){
    this.table = Array(tableSize).fill(null).map( cell => new LinkedList());
    this.tableSize = tableSize;
  }

  hash(key) {
    const hash = Array.from(key.toString())
                      .reduce((accumulator, restOfChars) => accumulator + restOfChars.charCodeAt(0), 0, );
    return hash % this.tableSize;
  }

  set(key, value) {
    const index = this.hash(key);
    const node = this.table[index].find(value);
    if(!node){
      this.table[index].push(value);
    } 
    return value;
  }

  get(key){
    const index = this.hash(key);
    const data = [];
    let tmp = this.table[index].head
    while(tmp){
      data.push(tmp.data)
      tmp = tmp.next
    }
    return data
  }

  has(key){
    const index = this.hash(key);
    return this.table[index].isEmpty();
  }

}


const hash = (key, size) => {
  let hashed = 0;
  for (let i = 0; i < key.length; i++) {
    hashed += key.charCodeAt(i);
  }
  return hashed % size;
}

class HashTable {
  constructor () {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
     this.buckets[i] = new Map();
    }
  }

insert(key, value) {
  let idx = hash(key, this.size);
  this.buckets[idx].set(key, value);
};

remove(key) {
  let idx = hash(key, this.size);
  let deleted = this.buckets[idx].get(key, value)
  this.buckets[idx].delete(key);
  return deleted;
};

search(key) {
  let idx = hash(key, this.size);
  return this.buckets[idx].get(key);
 }
}

const hashTable = new HashTable();

hashTable.insert('name', 'Daniel');
hashTable.insert("C", 30);
hashTable.insert("Python", 40);
hashTable.insert("Linux", 70);
hashTable.insert("shell", 60);
hashTable.insert("Raect", 40);

console.log(hashTable)

//implementation of HashTable

class HashTable{
    constructor(size) {
        this.values = {};
        this.length = 0;
        this.size = size;
    }

    calculateHashKey(key){
        return key.toString().length % this.size;
    }

    add(key,value){
        //get the hash key
        const hash = this.calculateHashKey(key);
        // if we dont have the hash value in the values, create an empty set
        if (!this.values.hasOwnProperty(hash)){
            this.values[hash] = {};
        }
        //if we dont have the key in the specific hash value here, we need to increase the length of the hashtable
        if (!this.values[hash].hasOwnProperty(key)){
            this.length ++;
        }
        this.values[hash][key] = value;
    }

    search(key){
        const hash = this.calculateHashKey(key);
        //find the hash value after the hash function and see whether the values has the hash value and the key value
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
            return this.values[hash][key];
        }else {
            return null;
        }
    }
}

function operation1() {
    let h1 = new HashTable(10);
    h1.add(1,"Hello");
    h1.add(10,"Olleh");
    h1.add(9,"Okk");
    console.log(h1.length);
    console.log(h1.values);
    console.log(h1.search(1))
}

operation1();

//usually for the hashTable, the complexity for search,add is O(1), but in the worst case like the conflicts are too many,
//we may get O(n) complexity;

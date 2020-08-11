//implemention of HashTable
class HashTable{
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }

    calculateHashKey(key){
        return key.toString().length % this.size;
    }

    add(key,value){
        const hash = this.calculateHashKey(key);
        if (!this.values.hasOwnProperty(hash)){
            this.values[hash] = {};
        }
        if (!this.values.hasOwnProperty(key)){
            this.length ++;
        }
        this.values[hash][key] = value;
    }
}
//implemention of HashTable

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
        const hash = this.calculateHashKey(key);
        if (!this.values.hasOwnProperty(hash)){
            this.values[hash] = {};
        }
        if (!this.values.hasOwnProperty(key)){
            this.length ++;
        }
        this.values[hash][key] = value;
    }

    search(key){
        const hash = this.calculateHashKey(key);
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
    console.log(h1.values);
}

operation1();
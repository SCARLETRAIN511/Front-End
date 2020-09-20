'use strict'
//hashTable

class HashTable{
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i<key.length;i++){
            //use charCodeAt to do the hash
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }//o[1]

    set(key,value){
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
            this.data[address].push([key,value]);
        }else{
            this.data[address].push([key,value]);
            return this.data;
        }
    }//o[1]

    get(key){
        let address = this._hash(key);
        const currBucket = this.data[address];
        if (currBucket){
            for (let i = 0;i<currBucket.length;i++){
                //0 is the pos of the key
                if(currBucket[i][0] === key){
                    return currBucket[i][0];
                }
            }
        }
        return undefined
    }//O[1] or O[n]

    //iterate through all the keys in the hashTable
    keys(){
        const keysArray = [];
        for (let i = 0;i<this.data.length;i++){
            if (this.data[i]){
                for (let j = 0;j<this.data[i].length;j++) {
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }
}

const MyHash = new HashTable(50);



//solution for first recurring character
function recurringChar1(arr){
    for (let i = 0;i<arr.length;i++){
        for (let j = i+1;j<arr.length;j++){
            if (arr[i] === arr[j]){
                return arr[i];
            }
        }
    }
    return undefined;
}//O[n^2]

function recurringChar2(arr) {
    let map = {};
    for (let i = 0;i<arr.length;i++){
        if (map[arr[i]] !== undefined){
            return arr[i];
        }
        else{
            //value in the array is the key in the set
            //value in the set turns to be the index
            map[arr[i]] = i;
        }
    }
    return undefined;
}//O[n]

console.log(recurringChar2([1,2,2,3,4,53,53]));



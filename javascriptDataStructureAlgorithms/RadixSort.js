//implementation of radix sort(基数排序）

function radixSort(array){
    const max = Math.max(...array).toString().length;
    let digitBuckets = [];
    let index = 0;

    for (let i = 0;i<max + 1;i++){
        digitBuckets = [];
        for (let j = 0; j<array.length;j++){
            const digit = getDigit(array[j],i+1);
            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(array[j]);
        }
        index = 0;
        for (let t = 0;t < digitBuckets.length;t++){
            if (digitBuckets[t] && digitBuckets[t].length > 0){
                for (let m = 0;m < digitBuckets[t].length;m++){
                    array[index ++ ] = digitBuckets[t][m];
                }
            }
        }
    }
    return array;
}


function getDigit(num, nth) {
    let value = 0;
    while (nth--) {
        value = num % 10;
        num = Math.floor((num - value) / 10);
    }
    return value;
}

arr1 = [1,2,4,15,1,33,3,1];
console.log(radixSort(arr1))
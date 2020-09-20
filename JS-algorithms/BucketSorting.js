function bucketSort(array) {
    const n = array.length;
    const allBuckets = new Array(n);
    const sortedArray = [];

    if (n < 2) return array;

    for (let i = 0; i < n; i++) {
        allBuckets[i] = [];
    }

    for (let i = 0; i < n; i++) {
        const index = Math.floor(n * array[i] / 10);
        allBuckets[index].push(array[i]);
    };

    allBuckets.forEach(bucket => {
        insertionSort(bucket);
        bucket.forEach(element => sortedArray.push(element))
    });

    return sortedArray;
}


function insertionSort(array) {
    for (let i = 0;i < array.length;i++){
        let temp = array[i];
        let j = i-1;
        while (j >= 0 && array[j] > temp){
            array[j+1] = array[j];
            j--;
            //until quit this loop;
        }
        array[j+1] = temp;
    }
    return array;
}

arr = [5,32,1,3,45,62,1];
console.log(bucketSort(arr));
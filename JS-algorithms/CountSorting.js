//implementation of count sort

function countingSort(arr,max) {
    let min = 0;
    let count = [];
    let z = 0;
    for (let i = min; i <= max; i++){
        count[i] = 0;
    }
    for (let i = 0;i < arr.length; i++){
        count[arr[i]]++ ;
    }

    console.log(count);
    for (let i = min; i <= max; i++){
        while (count[i]-- > 0){
            arr[z++] = i;
        }
    }
    return arr;
}

arr1 = [5,2,1,4,6,13,5,1];
console.log(countingSort(arr1,13));
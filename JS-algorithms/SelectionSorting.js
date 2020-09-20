//selection sorting

function selectionSort(array) {
    for (let i = 0;i<array.length;i++){
        let min = i;
        for (let j = i+1;j<array.length;j++){
            if (array[j] < array[min]){
                min = j;
            }
        }
        if (i !== min){
            [array[i],array[min]] = [array[min],array[i]];
        }
    }
    return array;
}

arr = [3,5,2,1,85,24];
console.log(selectionSort(arr));
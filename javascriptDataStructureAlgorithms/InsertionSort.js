//implementation of insertion sorting

function insertSorting(array) {
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

arr1 = [1,2,3,4,5,64,32,3,3,2];
console.log(insertSorting(arr1));
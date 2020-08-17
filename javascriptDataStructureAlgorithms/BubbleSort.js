//implementation of bubble sort

function bubbleSort(array){
    let swapped;
    do{
        swapped = false;
        for (let i = 0; i < array.length;i++){
            if (array[i] && array[i + 1] && array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
    return array
}

//second way of implementation
function bubbleSort2(array){
    for (let i = 0;i < array.length;i++){
        for (let j = i;j<array.length;j++){
            if (array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array
}

console.log(bubbleSort2([5,3,25,7,2,3]));
function quickSort(alist){
    quickSortHelper(alist,0,alist.length - 1);
    return alist;
}

function quickSortHelper(alist,first,last){
    if (first < last) {
        let splitPoint = partition(alist,first,last);
        quickSortHelper(alist,first,splitPoint - 1);
        quickSortHelper(alist, splitPoint + 1,last);
    }
}

function partition(alist, first,last){
    let pivotValue = alist[first];
    let leftMark = first + 1;
    let rightMark = last
    let done = false;

    while (done === false) {
        while (leftMark <= rightMark && alist[leftMark] <= pivotValue) {
            leftMark++;
        }
        while (alist[rightMark] >= pivotValue && rightMark >= leftMark) {
            rightMark--;
        }
        if (rightMark < leftMark) {
            done = true;
        } else {
            let temp = alist[leftMark];
            alist[leftMark] = alist[rightMark]
            alist[rightMark] = temp;
        }
    }
    let temp = alist[first];
    alist[first] = alist[rightMark];
    alist[rightMark] = temp;
    return rightMark;
}


arr1 = [1,34,52,5,1,3,4,43];
console.log(quickSort(arr1));
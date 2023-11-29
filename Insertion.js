function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowestNumberIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }

        if(lowestNumberIndex !== i) {
            let temp = arr[lowestNumberIndex];
            arr[lowestNumberIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(insertionSort([4,2,1,7,3,45,0,36,5]));
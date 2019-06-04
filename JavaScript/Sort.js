//A swap function using structuring
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

//Write merge function
//This implementation uses array's shift() build-in method
const merge = (arr1, arr2) => {
    //Set the return array
    let arrReturn = [];
    //The total merge size should be the sum of two arrays lengths.
    let mergeSize = arr1.length + arr2.length - 1;
    //A loop using flag to put each element into array
    for (let flag = 0; flag <= mergeSize; flag++) {
        if (arr1.length === 0) {
            arrReturn[flag] = arr2.shift();
        } else if (arr2.length === 0) {
            arrReturn[flag] = arr1.shift();
        } else if (arr1[0] < arr2[0]) {
            arrReturn[flag] = arr1.shift();
        } else {
            arrReturn[flag] = arr2.shift();
        }
    }
    //Return merged array
    return arrReturn;
};

function BubbleSort(arr) {
    //In Bubble Sort, we are going to bubble
    //the max or min one to the end of array by swapping

    //Third variable for swapping
    let swapTemp;

    //Swapping flag
    let isSwapped;
    //For outer loop, it is used to narrow down the total size of each iteration of array
    for (let outer = arr.length - 1; outer > 0; outer--) {
        //Set the swapping flag to be false initially since there is no need to swap
        isSwapped = false;
        //For inner loop, it is used to loop from beginning, index 0, to the end of current iteration
        for (let inner = 0; inner < outer; inner++) {
            //Output visualisation
            console.log("Current array:", arr, "Bubbling:", arr[inner], arr[inner + 1])
            //Check if there needs a swap
            if (arr[inner] > arr[inner + 1]) {
                //Here comes a swap processing, set the flag to be true
                isSwapped = true;

                //Output the swap
                console.log("--->Swap!", arr[inner], "and", arr[inner + 1]);

                //Do the swap by third variable
                // swapTemp = arr[inner];
                // arr[inner]=arr[inner+1];
                // arr[inner+1]=swapTemp;

                //Or by structuring
                swap(arr, inner, inner + 1);
            }
        }
        //To test if after this iteration, is there any needs for further iterations?
        //Using the isSwapped variable
        if (!isSwapped) break;
    }
    return arr;
}

function SelectionSort(arr) {
    //The salient is a variable to record the lowest/highest value index
    let salient;
    //The outer loop will begin at 0 and go on
    for (let outer = 0; outer < arr.length; outer++) {
        salient = outer;
        //The inner loop will check through the rest of elements to pick up the salient
        for (let inner = outer + 1; inner < arr.length; inner++) {
            //For visualization
            console.log("Current array:", arr);

            //use a if statement to find the salient
            if (arr[salient] > arr[inner]) {
                console.log("--->Find a new salient:", arr[inner]);
                salient = inner;
            }
        }
        //If the salient index has changed, swap these two value
        if (outer !== salient) {
            console.log("--->Swap:", arr[outer], arr[salient]);
            swap(arr, outer, salient);
        }
    }
    return arr;
}

function InsertionSort(arr) {
    //Insertion sort is to insert value to a smaller ordered array and grow bigger
    let insertValue, insertIndex;
    //The outer loop will narrow down the size of current small array
    for (let outer = 1; outer < arr.length; outer++) {
        //Initialise the insert value to be the last element in the array
        //And the insert index is the outer index
        insertValue = arr[outer];
        insertIndex = outer;
        //The inner loop will loop back from the end of array to insert proper value
        for (let inner = outer - 1; inner >= 0; inner--) {
            //If the current element is larger than insert value
            if (arr[inner] > insertValue) {
                //Change the order by moving backwards
                arr[inner + 1] = arr[inner];

                //You can change the inner index to insert value
                // arr[inner] = insertValue;

                //Or you can modify the insertIndex variable to record
                insertIndex = inner;
            }
        }
        //If you use the insert index, we need to check if the insertIndex is the outer
        if (insertIndex !== outer) arr[insertIndex] = insertValue;
    }
    return arr;
}

function MergeSort(arr) {
    //Check if the array's length is 1, then just return
    if (arr.length <= 1) return arr;
    //Get the middle point of array length
    let mid = Math.floor(arr.length / 2);
    //sliced into two parts, left part and right part
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    //merge them together
    return merge(left, right);
}


const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
};

function QuickSort(arr, left = 0, right = arr.length - 1) {
    if(left<right) {
        let pivotIdx = pivot(arr, left, right);
        QuickSort(arr, left, pivotIdx - 1);
        QuickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

function RadixSort() {

}

let arr = [2, 5, 3, 6, 1, 4,10,8,9,7];
console.log(QuickSort(arr));
function BubbleSort(arr) {
    //In Bubble Sort, we are going to bubble
    //the max or min one to the end of array by swapping

    //Third variable for swapping
    let swapTemp;

    //A swap function using structuring
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    //Swapping flag
    let isSwapped;

    //For outer loop, it is used to narrow down the total size of each iteration of array
    for(let outer = arr.length-1;outer>0;outer--){
        //Set the swapping flag to be false initially since there is no need to swap
        isSwapped = false;
        //For inner loop, it is used to loop from beginning, index 0, to the end of current iteration
        for(let inner = 0;inner<outer;inner++){
            //Output visualisation
            console.log("Current array:", arr, "Bubbling:",arr[inner],arr[inner+1])
            //Check if there needs a swap
            if(arr[inner]>arr[inner+1]){
                //Here comes a swap processing, set the flag to be true
                isSwapped = true;

                //Output the swap
                console.log("--->Swap!",arr[inner],"and",arr[inner+1]);

                //Do the swap by third variable
                // swapTemp = arr[inner];
                // arr[inner]=arr[inner+1];
                // arr[inner+1]=swapTemp;

                //Or by structuring
                swap(arr, inner, inner+1);
            }
        }
        //To test if after this iteration, is there any needs for further iterations?
        //Using the isSwapped variable
        if(!isSwapped) break;
    }
    return arr;
}

function SelectionSort() {

}

function InsertionSort() {

}

function MergeSort() {

}

function QuickSort() {

}

function RadixSort() {

}

let arr = [2,5,3,6,1,4];
console.log(BubbleSort(arr));
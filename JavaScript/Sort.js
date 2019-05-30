//A swap function using structuring
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function BubbleSort(arr) {
    //In Bubble Sort, we are going to bubble
    //the max or min one to the end of array by swapping

    //Third variable for swapping
    let swapTemp;

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

function SelectionSort(arr) {
    //The salient is a variable to record the lowest/highest value index
    let salient;
    //The outer loop will begin at 0 and go on
    for(let outer = 0; outer<arr.length;outer++){
        salient = outer;
        //The inner loop will check through the rest of elements to pick up the salient
        for(let inner = outer+1;inner<arr.length;inner++){
            //For visualization
            console.log("Current array:", arr);

            //use a if statement to find the salient
            if(arr[salient]>arr[inner]){
                console.log("--->Find a new salient:", arr[inner]);
                salient = inner;
            }
        }
        //If the salient index has changed, swap these two value
        if(outer !== salient) {
            console.log("--->Swap:", arr[outer],arr[salient]);
            swap(arr, outer, salient);
        }
    }
    return arr;
}

function InsertionSort(arr) {

}

function MergeSort() {

}

function QuickSort() {

}

function RadixSort() {

}

let arr = [2,5,3,6,1,4];
console.log(SelectionSort(arr));
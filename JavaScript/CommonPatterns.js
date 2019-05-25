function isSame(arr1, arr2) {
    //Firstly, check the length of each array
    //if the length is different, return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    //As using frequency count, we need to create an object to store the values
    let counter = {};
    //Secondly, we need to put value into counter
    for (let val of arr1) {
        counter[val] = (counter[val] || 0) + 1;
    }
    //Thirdly, check through the array 2 with counter
    for (let val of arr2) {
        if (!counter[val] || counter[val] < 0) {
            return false;
        }
        counter[val] -= 1;
    }
    //Finally, return true
    return true;
}

console.log(isSame([1, 2, 3], [3, 2, 1])); //True
console.log(isSame('', 'a')); //False
console.log(isSame([1, 1, 2], 1, 1, 1)); //False

function isAnagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let counter = {};
    for (let val of arr1) {
        counter[val] = (counter[val] || 0) + 1;
    }
    for (let val of arr2) {
        if (!counter[val] || counter[val] < 0) {
            return false;
        }
        counter[val] -= 1;
    }
    return true;
}

console.log(isAnagram('abc', 'bca')); //True
console.log(isAnagram('ab', 'cd')); //False
console.log(isAnagram('', 'ab')); //False

function pickZeroSum(arr) {
    //First of all, set a left and right pointer
    let left = 0;
    let right = arr.length - 1;
    //Use a loop to check the sum
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            //Move positions
            left++;
            right--;
            console.log([arr[left], arr[right]]);
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

pickZeroSum([-3, -2, -1, 0, 1, 2, 3]);
pickZeroSum([-3, 0, 1]);

function countUniqueValue(arr) {
    //We set a left variable to replace unique value
    let left = 0;
    //Using a loop to go through the array
    //Set the next variable from 1, that is, the next element
    for(let next = 1;next<arr.length;next++){
        //If the element is not unique
        if(arr[left]!==arr[next]){
            //Increase the left index
            left++;
            //replace the unique element to this place
            arr[left]=arr[next]
        }
    }
    return left+1;
}

console.log(countUniqueValue([1,2,3,4,5]));
console.log(countUniqueValue([1,2,2,2,5]));

function maxSubarraySum(arr, num) {
    //If the number of size is greater than the array's length
    if(arr.length<num){
        //Just return null
        return null;
    }
    //Set up two local variables
    let max = 0;
    let temp = 0;
    //Calculate the first num numbers to max
    for(let i=0;i<num;i++){
        max += arr[i];
    }
    //Assign temp to the max value
    temp=max;
    //Loop through the array
    for(let i=num;i<arr.length;i++){
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(temp,max);
    }
    return max;
}

console.log(maxSubarraySum([1,3,4,5,6,9],2));
console.log(maxSubarraySum([1,3,4,5,7,8,9],4));

function binarySearch(arr, val) {
    //Set min and max variable
    let min = 0;
    let max = arr.length - 1;
    //A while for binary search
    while(min<=max){
        //Calculate the middle value
        let middle = Math.floor((min+max)/2);
        //Get the current value of the middle
        let cur = arr[middle];
        //Check the current value with the target value
        if(cur<val){
            min = middle+1;
        }else if(cur>val){
            max = middle-1;
        }else{
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],1));
console.log(binarySearch([1,2,3,4,5,7,9],7));
console.log(binarySearch([1,2,3,4,6],5));
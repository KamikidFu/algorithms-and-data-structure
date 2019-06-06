let arr = [1, 3, 1, 2, 1];

function find(arr) {
    //Boundary cases
    //Empty case
    if (arr.length === 0)
        return [];

    //Brute force
    /**
     * The brute force would be a O(n^2) solution
     * Method is to have two loop,
     * the outer loop will loop through the array
     * the inner loop will loop again from the beginning to find the first spot the current value appears
     *
     */

    //Hash map solution
    /**
     * This would be a O(n) solution
     * Method is to set up a hash map, or dictionary, first
     * Record the new value as key and the first index as value
     * Loop through the array once while updating the hash map
     * Also construct a new array
     */

    let map = {};
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = i;
            output.push(-1);
        } else {
            output.push(map[arr[i]]);
        }
    }

    return output;
}

console.log(find(arr));
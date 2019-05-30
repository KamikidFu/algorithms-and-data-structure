function search(item, arr){
    //empty array case
    if(arr.length===0){
        return -1;
    }
    //Linear search
    for(let i=0;i<arr.length;i++){
        if(item === arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(search(1,[]));
console.log(search(2,[1,2,3]));
console.log(search("",[1,2,3]));
console.log(search("1",["1","2","3"]));
console.log(search(1,1));


function binarySearch(item,arr){
    //empty array case
    if(arr.length===0){
        return -1;
    }
    //Set variables, min, max and mid
    let min = 0;
    let max = arr.length-1;
    let mid = Math.floor((min+max)/2);
    //While checking the arr's element and min with max
    while(arr[mid]!==item && min<=max){
        if(item<arr[mid]){
            max = mid - 1;
        }else{
            min = max + 1;
        }
        mid = Math.floor((max+min)/2);
    }
    return arr[mid]===item?mid:-1;
}

console.log(binarySearch(1,[1,2,3]));
console.log(binarySearch("2",["a","b","c"]));
console.log(binarySearch(3,[]));
console.log(binarySearch(10,[5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99]))


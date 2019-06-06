let arr = [1,2,3,4];

function solution(arr) {
    //We can have two arrays to record left and right production results
    let left = [];
    let right = [];

    //Prepare the left array
    let pre = 1;
    for(let i = arr.length-1;i>=0;i--){
        left.unshift(pre*arr[i]);
        pre = arr[i]*pre;
    }

    //Prepare the right array
    pre = 1;
    for(let v of arr){
        right.push(v*pre);
        pre = v*pre;
    }

    //Set up the output array
    let output = [];
    for(let i=0;i<arr.length;i++){
        if(i===0){
            output.push(left[1]);
        }else if(i===arr.length-1){
            output.push(right[i-1]);
        }else {
            output.push(left[i + 1] * right[i - 1]);
        }
    }

    return output;
}

console.log(solution(arr));
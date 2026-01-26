//leetcode 344: Reverse string
function reverseArray(arr){
    let p=arr.length-1;
    let i = 0;
    while(p>=i){
        temp = arr[p];
        arr[p] = arr[i];
        arr[i] = temp;
        p--;
        i++;
    }
    console.log(arr)
}


reverseArray( ["H","a","n","n","a","h"])
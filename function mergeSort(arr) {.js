function mergeSort(arr) {
 if(arr.length <= 1) return arr

 let mid = arr.length / 2
 let left = mergeSort(arr.slice(0, mid))
 let right = mergeSort(arr.slice(mid))

 return merge(left, right)

}

function merge(left, right) {
    let result = [];
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
// binary search 
function binarySearch(array, item) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}
// test
let myArray = [1, 3, 5, 7, 9];
console.log(binarySearch(myArray, 3));
console.log(binarySearch(myArray, -1));

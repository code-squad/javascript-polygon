function binarySearch(n, arr, start, end) {
    let mid = Math.round((start + end) / 2);

    return start > end ? undefined : n === arr[mid] ?
        arr[mid] : n < arr[mid] ?
            binarySearch(n, arr, start, mid - 1) : binarySearch(n, arr, mid + 1, end)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20]
console.log(binarySearch(3, arr, 0, arr.length - 1))
console.log(binarySearch(10, arr, 0, arr.length - 1))
console.log(binarySearch(9, arr, 0, arr.length - 1))
console.log(binarySearch(11, arr, 0, arr.length - 1))
console.log(binarySearch(17, arr, 0, arr.length - 1))
console.log(binarySearch(19, arr, 0, arr.length - 1))


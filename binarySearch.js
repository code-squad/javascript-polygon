function binarySearch(needle, haystack, start, end){
    if(start === end){
        return start;
    }
    let mid = ~~((start+end)/2);

    if(haystack[mid] === needle){
        return mid;
    }

    if(haystack[mid] > needle){
        end = mid -1;
        return binarySearch(needle, haystack, start, end);
    }
    if(haystack[mid] < needle){
        start = mid + 1;
        return binarySearch(needle, haystack, start, end);
    }

}

arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(4,arr,0,9)); /// 3
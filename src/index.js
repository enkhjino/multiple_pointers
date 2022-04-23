//write a function that accepts a sorted array and counts the unique values in the array
//input=arr of int
//output=num of unique val

function countUniqueValues(arr) {
  return new Set(arr).size;
}

console.log(countUniqueValues1([1, 2, 2, 2, 2, 3, 3, 4]));

function countUniqueValues1(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var p1 = 0;
  for (var p2 = 1; p2 < arr.length; p2++) {
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
  }
  return p1 + 1;
}

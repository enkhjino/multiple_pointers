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

//1 time=O(N) space=O(1)
//input=2 params, 1 arr of nums-> sorted?, 1 is num
//output=true/false
//multiple pointers one=0, two=arr.length-1

function averagePair(arr, num) {
  if (arr.length === 0) {
    return [];
  }
  var first = 0;
  var second = arr.length - 1;
  while (first < second) {
    if ((arr[first] + arr[second]) / 2 === num) {
      return true;
    } else if ((arr[first] + arr[second]) / 2 < num) {
      first++;
    } else {
      second--;
    }
  }
  return false;
}

/*
Problem Statement #
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

---

Example 1: 
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

// Brute force solution:
const BF_max_sub_array_of_size_k = function (k, arr) {
  // initialize two variables, one to track the max encountered sum, and another to track the current sum of the window (size 'k')
  let maxSum = 0,
    windowSum = 0;

  // iterate over the array, where the max length is the array length minus the window size (plus one, because arrays are zero-indexed)
  for (let i = 0; i < arr.length - k + 1; i++) {
    // reset the window counter
    windowSum = 0;
    // iterate again to create a sliding window
    for (let j = i; j < i + k; j++) {
      // accumulate all values in this window
      windowSum += arr[j];
    }

    // return the max value, comparing the max encountered sum for previous iterations, and the current window sum
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

// console.log(
//   `Maximum sum of a subarray of size K: ${BF_max_sub_array_of_size_k(
//     3,
//     [2, 1, 5, 1, 3, 2]
//   )}`
// );
// console.log(
//   `Maximum sum of a subarray of size K: ${BF_max_sub_array_of_size_k(
//     2,
//     [2, 3, 4, 1, 5]
//   )}`
// );

// Sliding window solution:
const SW_max_sub_array_of_size_k = function (k, arr) {
  // initialize a start index, a max sum counter, and a window sum counter
  let start = 0,
    windowSum = 0,
    maxSum = 0;

  // loop over the input array, tracking the end index (the end will be used to efficiently slide the window)
  for (let end = 0; end < arr.length; end++) {
    // accumulate the value at the end index to the sum
    windowSum += arr[end];
    // slide the window
    // we don't need to slide if we've not hit the required arr size of 'k'
    if (end >= k - 1) {
      // compute the max sum, comparing the max encountered sum with the current window's sum
      maxSum = Math.max(maxSum, windowSum);
      // subtract the element going out
      windowSum -= arr[start];
      // slide the window ahead
      start++;
    }
  }
  return maxSum;
};

console.log(
  `Maximum sum of a subarray of size K: ${SW_max_sub_array_of_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${SW_max_sub_array_of_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

/* 
Time Complexity #
The time complexity of the above algorithm will be O(N).

Space Complexity #
The algorithm runs in constant space O(1).
*/

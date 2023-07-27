"use strict";

// 1.Given an array of integers, rearrange the elements in a way that all the even numbers come before the odd numbers.
function rearrangeEvenOdd(arr) {
  const rearrangeEven = arr.filter((num) => num % 2 === 0);
  const rearrangeOdd = arr.filter((num) => num % 2 !== 0);
  return rearrangeEven.concat(rearrangeOdd);
}

console.log(rearrangeEvenOdd([5, 3, 9, 2, 7])); // Output: [2, 5, 3, 9, 7]
console.log(rearrangeEvenOdd([10, -5, 0, 15, 20])); // Output: [10, 0, -5, 15, 20]

// 2. Write a function to find the missing number in an array of integers from 1 to N.

function findMissingNumber(arr, n) {
  let findMissingNumber = [];
  for (let i = 1; i <= n; i++) if (!arr.includes(i)) findMissingNumber.push(i);
  return findMissingNumber;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3
console.log(findMissingNumber([10, 7, 3, 5, 8, 1, 4, 6, 2], 10)); // Output: 9

// 3. Given a string with parentheses, check if it is balanced (each opening parenthesis
// has a corresponding closing parenthesis).
// Test case:
// console.log(isBalancedParentheses(&quot;(()(()))&quot;)); // Output: true
// console.log(isBalancedParentheses(&quot;(()(())))&quot;)); // Output: false

// 4. Implement a function to convert a decimal number to its binary representation.
// Test case:
// console.log(decimalToBinary(10)); // Output: &quot;1010&quot;
// console.log(decimalToBinary(25)); // Output: &quot;11001&quot;
function decimalToBinary(number) {
  let binaryArr = [];
  for (; number; number >>= 1) {
    binaryArr.push(number & 1);
  }
  return binaryArr.reverse().join("");
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(25));

// 5. Implement a function that returns the longest word in a sentence.
// Test case:
// console.log(longestWord(&quot;I love programming&quot;)); // Output: &quot;programming&quot;
// console.log(longestWord(&quot;JavaScript is awesome&quot;)); // Output: &quot;JavaScript&quot;
function longestWord(str) {
  str = str.split(" ");
  return str.sort((a, b) => b.length - a.length)[0];
}
console.log(longestWord("I love programming"));
console.log(longestWord("JavaScript is awesome"));

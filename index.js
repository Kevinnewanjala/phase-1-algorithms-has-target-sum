
  function hasTargetSum(array, target) {
    const numSet = new Set();

    for (let num of array) {
        const complement = target - num;
        if (numSet.has(complement)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Should return true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // Should return true
console.log(hasTargetSum([1, 2, 5], 4)); // Should return false
console.log(hasTargetSum([-7, 10, 4, 8], 3)); // Should return true
console.log(hasTargetSum([1, 2, 3, 4], 5)); // Should return true
console.log(hasTargetSum([2, 2, 3, 3], 4)); // Should return true
console.log(hasTargetSum([4], 4)); // Should return false



/* 
  The time complexity of the hasTargetSum function is O(n), where n is the length of the input array. 
*/

/* 
  FUNCTION hasTargetSum(array, target):
    numSet = new Set()
    FOR EACH num IN array:
        complement = target - num
        IF numSet contains complement:
            RETURN true
        numSet.add(num)
    RETURN false

*/

/*
  The function efficiently uses a Set data structure to store seen numbers and check for the existence of complements in constant time. It iterates through the array only once, resulting in a time complexity of O(n), where n is the length of the input array. This approach provides an efficient solution for finding a pair of numbers with a target sum in an array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

const twoSum = (nums, target) => {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

/**
 * /usr/bin/node ./competitive-coding/array-easy/twoSum.js
(2) [0, 1]
 */

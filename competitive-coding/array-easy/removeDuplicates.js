let newArray = [];
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        newArray.push(nums[i]);
        continue;
      }
      newArray.push(nums[j]);
    }
    return newArray;
  }
};

console.log(removeDuplicates([1,1,2])); 

/**
 * /usr/bin/node ./competitive-coding/array-easy/removeDuplicates.js
(2) [1, 2]
 */

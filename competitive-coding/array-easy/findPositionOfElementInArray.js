const findPositionOfElementInArray = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      return i;
    }

    if (nums[i] != val) {
      nums.push(val);
      nums.sort();
    }
  }
};

console.log(findPositionOfElementInArray([1, 3, 5, 6], 5));
console.log(findPositionOfElementInArray([1, 3, 5, 6], 2));
console.log(findPositionOfElementInArray([1, 3, 5, 6], 7));

/**
 * 
 *   for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      return i;
    } else if (nums[i] != val) {
      nums.push(val);
      nums.sort();  
    }
  }
 */

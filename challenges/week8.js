

const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.indexOf(parseInt(n));
  let next = index + 1;
  if ( (index !== -1) && (nums[next] !== undefined)  ) {
    return nums[next]
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
 
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

}
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
}
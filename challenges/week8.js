

const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.indexOf(parseInt(n));
  let next = index + 1;
  if ((index !== -1) && (nums[next] !== undefined)) {
    return nums[next]
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var countOne = 0;
  var countZero = 0;

  [...str].forEach(num => {
    if (num === '1') {
      countOne++;
    }
    if (num === '0') {
      countZero++;
    }
  })

  return ({ 1: countOne, 0: countZero })
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  n = String(n);

  return parseInt(n.split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  var mergedArr = [].concat.apply([], arrs);

  return mergedArr.reduce((a, b) => a + b)

}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;

  } else if (arr.length < 2) {
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  let found = false;
  
  Object.keys(haystack).forEach(function (item, key) {

    let thisText = haystack[item].toString().toLowerCase();
    searchTerm = searchTerm.toString().toLowerCase();
    
    if (thisText.includes(searchTerm)) {
      return found = true;
    }
  });

  return found;
}


const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  let word = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ');
  
  let freq = {}

  word.forEach(function(w) {
    if (!freq[w]) {
        freq[w] = 0;
    }
    freq[w] += 1;
});

return freq;
}


module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
}
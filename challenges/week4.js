function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfSmallNums = []

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    
    if (item < 1) {
    listOfSmallNums.push(item)
    }
  }
  return listOfSmallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  const listOfNamesBeginningWith = [];

  for (let i = 0; i < names.length; i++) {
    const item = names[i];
  
    const firstCharOfName = item[0];

    if (firstCharOfName === char) {
    listOfNamesBeginningWith.push(item);
    }
  }
  return listOfNamesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const listOfVerbs = [];

  for (let i = 0; i < words.length; i++) {
    const item = words[i];

    const firstThreeChars = item.slice(0,3);
    
    if (firstThreeChars === "to ") {
    listOfVerbs.push(item);
    }
  }
  return listOfVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfIntegers = [];

  for (let i = 0; i < nums.length; i++) {
    
    const item = nums[i];
    
    if (Number.isInteger(item)) {
      listOfIntegers.push(item);
    }
  } 
  return listOfIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
   const listOfCities = []

  for (let i = 0; i < users.length; i++) {
    const item = users[i];

    const city = item.data.city.displayName

    listOfCities.push(city);
  } 
    return listOfCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfSqRoots = []

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]

    const sqRoot = Math.sqrt(number);
    if (sqRoot % 1 === 0) {
      parseFloat(listOfSqRoots.push(sqRoot))
    } else {
      listOfSqRoots.push(parseFloat(sqRoot.toFixed(2)))
    }
  }
  return listOfSqRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

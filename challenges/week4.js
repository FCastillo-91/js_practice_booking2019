function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const listOfSmallNums = []

  nums.forEach(function(item) {
    if (item < 1) {
    listOfSmallNums.push(item)
    }
  })
  return listOfSmallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  const listOfNamesBeginningWith = [];

  names.forEach(function(item) {
  
    const firstCharOfName = item[0];

    if (firstCharOfName === char) {
    listOfNamesBeginningWith.push(item);
    }
  })
  return listOfNamesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  const listOfVerbs = [];

  words.forEach(function(item) {
  const firstThreeChars = item.slice(0,3);
    
    if (firstThreeChars === "to ") {
    listOfVerbs.push(item);
    }
  })
  return listOfVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfIntegers = [];

  nums.forEach(function(item) {
    
    if (Number.isInteger(item)) {
    listOfIntegers.push(item);
    }
  })
  return listOfIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
   
  const listOfCities = []

  users.forEach(function(item) {
  
  const city = item.data.city.displayName
  listOfCities.push(city);
  })
  return listOfCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfSqRoots = []

  nums.forEach(function(number) {
  
    const sqRoot = Math.sqrt(number);
    
    if (sqRoot % 1 === 0) {
    parseFloat(listOfSqRoots.push(sqRoot))
    
    } else {
    listOfSqRoots.push(parseFloat(sqRoot.toFixed(2)))
    }
  })
  return listOfSqRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  const list = []

  sentences.forEach(function(eachSentence) {
    
  const word = eachSentence.toLowerCase().indexOf(str)
    
    if (word !== -1) {
    list.push(eachSentence)
    }
  })
  return list
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  const allLongestSides = []

  triangles.forEach(function(eachTriangle) {
    const longestSide = eachTriangle.sort(function(a, b){return a-b}).slice(2,3)
    allLongestSides.push(parseInt(longestSide))
  })
  return allLongestSides  
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

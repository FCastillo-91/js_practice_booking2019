function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const listOfSmallNums = nums.filter(function(number) {
    if (number < 1) {
  return true
    }
  })
  return listOfSmallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  const listOfNamesBeginningWith = names.filter(function(item) {
    const firstCharOfName = item[0];
    if (firstCharOfName === char) {
      return true
    }
  })
  return listOfNamesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  const listOfVerbs = words.filter(function(item) {
    const firstThreeChars = item.slice(0,3);
    
    if (firstThreeChars === "to ") {
      return true
    }
  })
  return listOfVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfIntegers = nums.filter(function(item) {
    if (Number.isInteger(item)) {
    return true
    }
  })
  return listOfIntegers
}

function getCities(users) {
  if (!users) throw new Error("users is required");
   
  const listOfCities = users.map(function (item) {
    return item.data.city.displayName
  })
  return listOfCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  const listOfSqRoots = nums.map(function (number) {
    return parseFloat(Math.sqrt(number).toFixed(2))
  })
  return listOfSqRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  const list = sentences.filter(function (eachSentence){
    if (eachSentence.toLowerCase().indexOf(str) !== -1) {
      return true
    }
  })    
  return list
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  const allLongestSides = triangles.map(function(eachTriangle) {
    return parseInt(eachTriangle.sort(function(a, b){return a-b}).slice(2,3))
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

function getSquares(nums = []) {

  if (nums === undefined) throw new Error("nums is required");
  // map transform numbers in array to the squares
  const listOfNums = [];

  nums.map(function (n) {
    listOfNums.push(n * n)
  });
  return listOfNums;
}

function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  const firstCharCap = word[0].toUpperCase() + word.slice(1)

  return firstCharCap
}

function lowercase(word) {
  return word.toLowerCase()
}
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  var wordsArray = words.slice(" ")

  var camelize = "";

  wordsArray.map(function (word, index) {

    if (index === 0) {
      camelize = lowercase(word);
    } else {
      camelize = camelize + capitalize(lowercase(word));
    }
  });
  return camelize;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  var numOfSubjects = 0;

  people.forEach(function(person) {
    
  numOfSubjects += person.subjects.length;
  });
  return numOfSubjects
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

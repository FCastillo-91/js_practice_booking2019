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

  people.forEach(function (person) {

    numOfSubjects += person.subjects.length;
  });

  return numOfSubjects
}



function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  //a final counter
  let count = 0
  //loop each recipe
  menu.map(function (item) {
    //for each recipe we loop/filter through ingredients and try to match the item to the ingredient
    const result = item.ingredients.filter(item => ingredient === item);
    //if result found the ingredient we count +1
    if (result.length > 0) {
      count++
    }
  });

  //if the count is > 0 it is because the ingredient exists once or more in any recipe
  if (count > 0) {
    return true
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  var temp = [];

  arr1.map(function (num) {

    arr2.map(function (num2) {

      if (num === num2) {

        temp.push(num)
      }
    })
  })

  return noCopies(temp.sort(function (a, b) { return a - b }));
}

function noCopies(arrArg) {
  return arrArg.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) == pos;
  });
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

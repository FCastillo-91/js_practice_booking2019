function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  const firstCharCap = word [0].toUpperCase() + word.slice(1)

  return firstCharCap 
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  const firstNameInitial = firstName [0];
  const lastNameInitial = lastName [0];

  const Initials = firstNameInitial + "." + lastNameInitial

  return Initials
}

function priceFormat (num) {
  if (num % 1 === 0) {
    return num;
  } else {
    return parseFloat(num.toFixed(2));
  }
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  const totalPrice = originalPrice + (originalPrice/ 100 * vatRate) 
  return priceFormat (totalPrice);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  const salePrice = (originalPrice - (originalPrice/100 * reduction))
  return priceFormat (salePrice);
}

function isNumEven(num){
  if(num%2 === 0){
    return true;
  }
    return false;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  
  const stringEven = isNumEven(str.length) 
  
  if (stringEven){
    return str[(str.length/2) - 1] + str[(str.length/2)]; 
  }else{
    return str[Math.floor(str.length/2)] 
  }
} 

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  
  const reversing = word.split("").reverse().join("");
    return reversing
}

function reverseAllWords(words) {
  
  if (words === undefined) throw new Error("words is required");

    let phrases = [];

    for (let i = 0; i < words.length; i++) {
      const listOfWords = words[i]
      const reverseWords = listOfWords.split("").reverse().join("");
      phrases.push(reverseWords)
    }
    return phrases  
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  let numOfLinuxUsers = 0;
 
  users.forEach(function (person) {
    if (person.type === "Linux") {
      numOfLinuxUsers++
    }  
  }
  )
  return numOfLinuxUsers ++
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  var sum = 0;
  var count = scores.length;
  for (var i = 0; i < count; i++) {
    sum = sum + scores[i];
  }
  const mean = sum / count
  if (sum % count === 0) {
    return mean
  } else {
    return Number(mean.toFixed(2))
  }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  //returns 'fizz' if the number is divisible by 3"
  //returns 'buzz' if the number is divisible by 5"
  //returns the number if the number is divisible by neither 3 nor 5
  //returns 'fizzbuzz' if the number is divisible by 3 and 5"
  
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz"
  }
  if (n % 3 === 0) {
    return "fizz"
  }  
  if (n % 5 === 0) {
    return "buzz"
  }  
  if (n % 3 !== 0 && n % 5 !== 0) {
    return n
  } 
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

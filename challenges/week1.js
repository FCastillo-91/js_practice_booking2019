function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  console.log({word:word[0]})

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
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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

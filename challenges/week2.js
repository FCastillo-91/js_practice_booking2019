function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
 
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true
  }
    return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const n = people / 40
  return Math.ceil(n)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
  let count = 0
  for (let i=0; i < arr.length; i++) {
    
    if (arr[i] === "sheep") {
      count++
    }
  }
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode[0] === "M" && person.address.city === "Manchester")
  {return true 
  }return false
} 


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

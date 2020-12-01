const { input } = require("./input.json");

const sumTo2020 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for(let k = j ; k < arr.length; k++){
      if(arr[i]+ arr[j] + arr[k] === 2020) return  arr[i] * arr[j] * arr[k]
      }
    }
  }

  return "not found"
};

let answer = sumTo2020(input)

console.log(answer)
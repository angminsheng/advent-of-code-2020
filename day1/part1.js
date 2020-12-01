const { input } = require("./input.json");

const sumTo2020 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if(arr[i]+ arr[j] === 2020) return  arr[i] * arr[j]
    }
  }

  return "not found"
};

//0.464ms

console.time("performance measurement")
let answer = sumTo2020(input)
console.timeEnd("performance measurement")

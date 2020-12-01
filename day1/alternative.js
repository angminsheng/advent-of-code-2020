const {input} = require("./input.json")

const sumTo2020 = arr =>{
  const numSet = new Set(input)

  arr.forEach(num=>{
    numSet.add(num)
  })

  for(let i=0;i<arr.length;i++){
    const requiredNum = 2020 - arr[i]
    if(numSet.has(requiredNum)) return requiredNum * arr[i]
  }
}

// 0.262ms
console.time("performance measurement")
let answer = sumTo2020(input)
console.timeEnd("performance measurement")

console.log(answer)
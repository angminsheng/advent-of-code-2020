const fs = require('fs')

const seatInput = fs.readFileSync('input.txt').toString().split('\n')

const getRow = (str)=>{
  let inputArray = Array(128).fill(null).map((_,i)=>i)

  str.split('').forEach((dir)=>{
    if(dir === "B") inputArray.splice(0, inputArray.length/2)
    else inputArray.splice(inputArray.length/2, inputArray.length/2)

  })

  return inputArray[0]
}

const getColumn = (str) =>{
  let inputArray = Array(8).fill(null).map((_,i)=>i)

  str.split('').forEach((dir)=>{
    if(dir === "R") inputArray.splice(0, inputArray.length/2)
    else inputArray.splice(inputArray.length/2, inputArray.length/2)

  })

  return inputArray[0]
}

const getMaxId = (inputs) =>{
  let idArrays = []
  let missingNum = 0

  inputs.forEach(input=>{
    let rowInputs = input.substring(0,7)
    let columnInputs = input.substring(7)

    let row = getRow(rowInputs)
    let column = getColumn(columnInputs)

    idArrays.push(row*8+column)
  })

  let sorted = idArrays.sort((a,b)=>a-b)

  for(let i = sorted.length; i > 0 ; i--){
    let diff = sorted[i] - sorted[i-1]

    if(diff !==1){
      missingNum = sorted[i]-1
    }
  }

  console.log(missingNum)

  return Math.max(...idArrays)
}

console.log(getMaxId(seatInput))

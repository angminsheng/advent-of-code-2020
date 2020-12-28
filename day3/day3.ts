const fs = require('fs')

const lines = fs.readFileSync('input.txt').toString().split('\n')

let treeCount = 0

lines.reduce((currIndex,line,i)=>{
  if(line[currIndex] === '#') treeCount+=1

  currIndex = (currIndex + 3) % line.length

  return currIndex
},0)

const getTreeCount = (horizontal, vertical) => {
  let nbOfTree = 0

  lines.reduce((currIndex, line, i)=>{
    if(i%vertical === 0 && line[currIndex] === `#`) nbOfTree +=1

    if(i%vertical === 0){
  currIndex = (currIndex + horizontal) % line.length
    }

  return currIndex
  }, 0)

  return nbOfTree
}

const input = [[1,1], [3,1], [5,1], [7,1], [1,2]]

const result = input.reduce((acc,[hortizontal, vertical], i)=>{
  acc *= getTreeCount(hortizontal, vertical)
  return acc
},1)

console.log("!", result)

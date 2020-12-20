const fs = require('fs')

const lines = fs.readFileSync('input.txt', {encoding:'utf-8'}).split('\n')

const matchingLines = lines.reduce((acc,line)=>{
  const [,min,max,char,input] = /^(?<min>\d+)-(?<max>\d+) (?<char>.): (?<input>.+)$/.exec(line)

  const charNum = input.split('').filter(e=>e === char).length

  if(charNum >= Number(min) && charNum <= Number(max)) acc+=1

  return acc
},0)

console.log(matchingLines)

const secondMatchingLines = lines.reduce((acc,line)=>{
  const [,pos1,pos2,char,input] = /^(?<min>\d+)-(?<max>\d+) (?<char>.): (?<input>.+)$/.exec(line)

  const bool1 = input[Number(pos1)-1] === char
  const bool2 = input[Number(pos2)-1] === char

  if (bool1 != bool2) acc+=1

  return acc
},0)

console.log(secondMatchingLines)

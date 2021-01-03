const fs = require('fs')

//If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

const input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split(/\n\n/)

let totalNumber = input.reduce((acc,val)=>{
  const uniq = val.replace(/\n/g,"").split("").filter((val,i,arr)=>arr.indexOf(val)===i)

  const secondNumber = uniq.filter((uni,i)=> val.split("\n").filter(x=>x).every(el=>el.includes(uni))).length

  return {
    first: acc.first += uniq.length,
    second: acc.second += secondNumber
  }

},{first:0, second:0})

console.log(totalNumber)

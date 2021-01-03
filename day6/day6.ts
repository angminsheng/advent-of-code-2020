const fs = require('fs')

const input = fs.readFileSync('input.txt').toString().split(/^\s*[\r\n]/gm)

let totalNumber = input.reduce((acc,val)=>{
  return acc += val.split("").filter((val,i,arr)=>arr.indexOf(val)===i && val !== "\n").length
},0)


let secondNumber = input.reduce((acc,val)=>{
  let answers = val.split('\n').filter(a=>a)

  let combined = answers.join("").split("").sort().filter((val,i,arr)=> {
    return (arr.lastIndexOf(val)-i) === answers.length-1})

  return acc += combined.length


},0)

console.log(secondNumber)
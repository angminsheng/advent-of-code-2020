const fs = require('fs')

const passports = fs.readFileSync('input.txt').toString().split(/^\s*[\r\n]/gm)

const passArray = passports.map(passport=>{
const fields = passport.split(/\s/)

return  fields.reduce((acc,field,i)=>{
    if(!field) return acc
    const [key, value] = field.split(':')
    acc[key] = value
    return acc
  }, {})
})

const validPasses = passArray.reduce((acc,pass)=>{
const keys = Object.keys(pass)

if(keys.length === 8 || (keys.length === 7 && !pass.hasOwnProperty('cid')))acc+=1

return acc
},0)

const secondPartValidPasses = passArray.reduce((acc, pass)=>{
  const keys = Object.keys(pass)

  if(keys.length === 8 || (keys.length === 7 && !pass.hasOwnProperty('cid'))){
    const isByrValid = /^(19[2-9][0-9]|200[0-2])$/.test(pass["byr"])
    const isIyrValid = /^(201[0-9]|2020)$/.test(pass["iyr"])
    const isEyrValid = /^(202[0-9]|2030)$/.test(pass["eyr"])
    const isHgtValid = /^(1[5-8][0-9]|19[0-3])cm$|^([5-6][0-9]|7[0-6])in$/.test(pass["hgt"])
    const isHclValid = /^#[0-9a-f]{6}$/.test(pass["hcl"])
    const isEclValid = /^amb|blu|brn|gry|grn|hzl|oth$/.test(pass["ecl"])
    const isPidValid = /^[0-9]{9}$/.test(pass["pid"])

    if(isByrValid && isIyrValid && isEyrValid && isHgtValid && isHclValid && isEclValid && isPidValid) acc+=1
  }
  return acc
},0)

console.log(secondPartValidPasses)
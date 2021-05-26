const names = require('marvel-comics-characters')
const supervillains = require('supervillains')
const dcNames = require('dc-names')


var threeRandomNames = names.random(3)

console.log(randomName)
console.log(threeRandomNames)

console.log(`Villian : ${supervillains.random()}`)

console.log(dcNames.random())

const names = () =>{
    return [names.random(), supervillains.random(), dcNames.random()]
}
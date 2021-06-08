const names = require('marvel-comics-characters')
const supervillains = require('supervillains')
const dcNames = require('dc-names')


function characterNames(){
    return [names.random(), supervillains.random(), dcNames.random()]
}

exports.names = characterNames
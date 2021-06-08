const assert = require("assert")
const index = require('../index.js')

describe('Test Suite', () => {

    it("Should be a str", ()  =>{
        let names = index.names()
        assert(typeof names[0], "string")
    })

    it("Should be a str", ()  =>{
        let names = index.names()
        assert(typeof names[1], "string")
    })

    it("Should be a str", ()  =>{
        let names = index.names()
        assert(typeof names[2], "string")
    })

})
const Anagrams = require("../lib/Anagrams")
describe("Anagrams", ()=> {
    //断言
    it("should return [] when input empt", ()=> {
        expect(Anagrams()).toEqual([])
    })
    it("should return ['ab','ba'] when input empt", ()=> {
        expect(Anagrams("ab")).toEqual(["ab","ba"])
    })
    it("should return ['abc','acb','bac','bca','cab','cba'] when input empt", ()=> {
        expect(Anagrams("abc")).toEqual(['abc','acb','bac','bca','cab','cba'])
    })
})
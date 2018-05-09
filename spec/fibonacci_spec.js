const fibonacci = require("../lib/fibonacci")
describe("fibonacci", ()=> {
    //断言
    it("should return 1 when input 1", ()=> {
        expect(fibonacci(1)).toBe(1)
    })
})
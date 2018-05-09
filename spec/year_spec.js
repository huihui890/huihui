const isLeapYear=require("../main")
describe("isLeapYear", ()=> {
    //断言
    it("should return true when input 2000", ()=> {
        expect(isLeapYear(2000)).toBe(true)
    })
})
const calculator = require("./src/mapper/calculator")

// UT testing 1st Task
describe("Check whether operations is giving right answer or not",()=>{
    it("checking the addition",()=>{
        expect(calculator('addition',1,2,3)).toBe(6);
    })

    it("checking the subtraction",()=>{
        expect(calculator('subtraction',1,2,3)).toBe(-4);
    })

    it("checking the multiply",()=>{
        expect(calculator('multiplication',1,2,3)).toBe(6);
    })

    it("checking the division",()=>{
        expect(calculator('division',1,2)).toBe(2);
    })


    it("checking the invalid operations",()=>{
        expect(calculator('divimmmsion',1,2)).toBe(undefined);
    })

})
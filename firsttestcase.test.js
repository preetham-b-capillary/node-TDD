it.todo("jest setup");
const request=require("supertest");
const app=require('./index');
const axios=require('axios');
jest.mock('axios');
const calculator = require("./src/mapper/calculator");

describe('calculator testing',()=>{
    it("addition check",()=>{
        expect(calculator('addition',1,2,3)).toBe(6);
    })
    it("subtraction check",()=>{
        expect(calculator('subtraction',2,3)).toBe(-1);
    })
    it("multiplication check",()=>{
        expect(calculator('multiplication',1,2,3)).toBe(6);
    })
    it("division check",()=>{
        expect(calculator('division',1,2)).toBe(2);
    })
   it("checking the division",()=>{
        expect(calculator('division',0,2)).toBe(Infinity);
    })
})

describe('jokes API testing',()=>{
    it("sucessfull API request", async()=>{
        const res= await request(app).get("/test/getRandomJoke");
        expect(res.statusCode).toBe(200);
    })
    it("getRandomJoke API check", async() => {
        axios.mockImplementation(() => 
            Promise.resolve({data:{ joke: "Hello World!", error: false}})
        );
        const res = await request(app).get("/test/getRandomJoke");
        expect(res.text).toBe("Hello World!");
    });
    it("securedRandomJoke API check", async() => {
        axios.mockImplementation(() => 
            Promise.resolve({data:{ joke: "Hello World!", error: false}})
        );
        const res = await request(app).get("/test/securedRandomJoke").query({ isSuperUser: 1 });
        expect(res.text).toBe("Hello World!");
    });
    it("sucessfull API request secured", async()=>{
        const res= await request(app).get("/test/securedRandomJoke");
        expect(res.statusCode).toBe(200);
    })
})

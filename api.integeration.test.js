const request = require("supertest");
const server = require("./index");
const mockAxios  = require("axios");
const userMid = require('./src/routes/middlewares/user.middleware');

 jest.mock("axios");
//  //for middleware
//  jest.mock("./src/routes/middlewares/user.middleware",()=> 
//             jest.fn((req,res,next)=> next()));

describe("GET jokes",() => {

    it("should give 200 as reponse code",async () =>{
        const response = await request(server).get('/test/calculator');
        //console.log("###",response);
        expect(response.statusCode).toBe(200);
    })


    it("check for api",async () =>{
        //mock Implementation always return a Promise.
        mockAxios.mockImplementation(() => Promise.resolve({ data: {"joke" : "Milind","error":false} }));
        const response = await request(server).get('/test/getRandomJoke');
        //console.log("###",response);
        expect(response.text).toBe("Milind");
    })

    it("check for random secured jokes",async() =>{
        mockAxios.mockImplementation(() => Promise.resolve({ data: {"joke" : "Milind","error":false} }));
        const reponse = await request(server).get('/test/securedRandomJoke').query({isSuperUser : 1});
        expect(reponse.statusCode).toBe(200);


        //for unauthorized user.
        const result = await request(server).get('/test/securedRandomJoke').query({isSuperUser : 2});
        expect(result.text).toBe('Access Denied');
    }) 


})
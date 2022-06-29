const request = require("supertest");
const server = require("./index");
const mockAxios  = require("axios");

 jest.mock("axios");
 jest.mock("./src/routes/middlewares/user.middleware",()=> jest.fn((req,res,next)=> next()));

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

    it("check for middleware function",async() =>{
        const reponse = await request(server).get('/test/securedRandomJoke');
        expect(reponse.statusCode).toBe(200);
    }) 


})
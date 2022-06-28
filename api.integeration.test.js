const request = require("supertest");
const server = require("./index");
const mockAxios  = require("axios");

 jest.mock("axios");

describe("GET jokes",() => {

    it("should give 200 as reponse code",async () =>{
        const response = await request(server).get('/test/getRandomJoke');
        //console.log("###",response);
        expect(response.statusCode).toBe(200);
    })


    it("check for api",async () =>{
        mockAxios.mockImplementation(() => Promise.resolve({ data: {"joke" : "Milind","error":false} }));
        const response = await request(server).get('/test/getRandomJoke');
        //console.log("###",response);
        expect(response.text).toBe("Milind");
    })


})
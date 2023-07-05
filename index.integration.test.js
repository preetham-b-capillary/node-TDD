const app = require('./index');
const helper=require('./src/helpers/myHelper');
const request = require("supertest");

jest.mock('./src/helpers/myHelper',()=>
({getRandomJoke: ()=>"Hello"}));

jest.mock('./src/mapper/calculator',()=>()=> 3); 

jest.mock('./src/routes/middlewares/user.middleware.js',()=>({
    checkIfUserHasAccess: (_,__,next)=>next()
}))

test('getRandomJoke mocking', async() => {

    const response = await request(app).get("/test/getRandomJoke")
    console.log(response.text)
    expect(response.text).toBe('Hello');

    })

test('getSecuredRandomJoke mocking', async() => {

    const response = await request(app).get("/test/securedRandomJoke")
    console.log(response.text)
    expect(response.text).toBe('Hello');

    })

test('calculator IT',async ()=>{
    const {body} = await request(app).get("/test/calculator/?valueOne=1&valueTwo=2&operation=addition")
    console.log(body)
    expect(body.result).toBe(3)
})
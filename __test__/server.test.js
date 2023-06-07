const server =require('../src/sever');
const supertest = require('supertest');
const request = supertest(server.app);
describe("server",()=>{
    test('404 error on bad route', async()=>{
        const response = await request.get('/home');
        expect(response.status).toEqual(404);
    });
    test('404 error on bad method',async()=>{
        const response =await request.put('/person');
        expect(response.status).toEqual(404);
    });
    test('500 error', async()=>{
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
    });
    test('200 if name in the query',async()=>{
        const response = await request.get('/person?name=ahmad');
        expect(response.status).toEqual(200);
    });
    test('name in the object equal the query', async()=>{
        const response = await request.get('/person?name=ahmad');
        expect(response.body.name).toEqual('ahmad');
    });
});


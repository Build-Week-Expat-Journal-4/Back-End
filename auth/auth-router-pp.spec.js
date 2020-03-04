require("dotenv").config();
const request = require('supertest');
const server = require("../api/server.js");
const db = require("../database/dbConfig")




let username;
let token;
let userId;
let counter = 0;






describe('Authorization', function() {
    
   
  const user = {
    
    first_name:"Jane",
    last_name:"Doe",
    email:"test@test.com",
    username:"janedoe"+counter,
    password: "pass"
  }
   
    describe('POST /register', () => {
        beforeEach(async ()=> {
            await db('users').truncate()
        })
      it('should return 201 created', () => {
       
           return request(server)
                    .post('/api/auth/register')
                    // .set('Accept', 'application/json')
                    .send(user)
                    .then(response => {
                        username = response.body.username;
                        counter=counter + 1;
                        expect(response.status).toBe(201);
                    })
                    
         })
    })

    describe('POST /login', () => {
      beforeEach(async ()=> {
        await db('stories').truncate()
    })
      it('should return 200 created', () => {
       
           return request(server)
                    .post('/api/auth/login')
                    // .set('Accept', 'application/json')
                    .send({username: username, password:"pass"})
                    .then(response => {
                        token = response.body.token;
                        
                        userId = response.body.id;
                        console.log(response.body.token)
                        expect(response.status).toBe(200);
                    })
                    
         }) 
    })


    

          
 
 })
    






require("dotenv").config();
const request = require('supertest');
const server = require("../api/server.js");
const db = require("../database/dbConfig")




let username;
let token;
let userId;






describe('Authorization', function() {
    
   
  const user = {
    
    first_name:"Jane2",
    last_name:"Doe2",
    email:"test2@test.com2",
    username:"janedoe2",
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
    

describe(" users", ()=> {
    describe("get all users", () => {
        it("should should return status 200", () => {
          
          return request(server)
            .get(`/api/users`)
            .set('Authorization', token)
           
            .then( response => {
              console.log("user body", response.body)
              expect(response.status).toBe(200)
            })
        } )
      })

      describe("Update a user", () => {

        const userChanges = {
            username:"changedjane"
        
        }
        it("should should return status 200", () => {
          
          return request(server)
            .put(`/api/users/${userId}`)
            .set('Authorization', token)
            .send(userChanges)
            .then( response => {
              expect(response.body.username).toMatch(/changedjane/i)
              
            })
        } )
      })

      describe("Delete a user", () => {

       
        it("should should return status 200", () => {
         
          return request(server)
            .delete(`/api/users/${userId}`)
            .set('Authorization', token)
            
            .then( response => {
              expect(response.status).toBe(200);
              
            })
        } )
      })
})






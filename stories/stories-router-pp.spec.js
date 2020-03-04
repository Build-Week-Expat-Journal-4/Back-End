require("dotenv").config();
const request = require('supertest');
const server = require("../api/server.js");
const db = require("../database/dbConfig")




let username;
let token;
let userId;
let storyId;






describe('Authorization', function() {
    
   
  const user = {
    
    first_name:"John",
    last_name:"Doe",
    email:"test@test.com",
    username:"jdoe",
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
    

describe("Stories", () => {

  const story = {
    
    title: "Paris",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
    img_link: "https://unsplash.com/photos/Sw57gA_fojQ",
    date_pic_taken:"11-11-2011",
    location: "Paris,France",
    user_id: userId
  
  
  }

  describe("post a story", () => {
    it("should return status 200", () => {
      
      return request(server)
        .post(`/api/users/${userId}/stories`)
        .set('Authorization', token)
        .send(story)
       
        .then( response => {
          storyId = response.body.id;
          expect(response.status).toBe(201)
        })
    } )
  })

  describe("get all stories", () => {
    it("should should return status 200", () => {
      
      return request(server)
        .get(`/api/stories`)
        .set('Authorization', token)
       
        .then( response => {
          console.log("story body", response.body)
          expect(response.status).toBe(200)
        })
    } )
  })

  describe("get stories for a specific user", () => {
    it("should should return status 200", () => {
      
      return request(server)
        .get(`/api/users/${userId}/stories`)
        .set('Authorization', token)
       
        .then( response => {
          
          expect(response.status).toBe(200)
        })
    } )
  })

  describe("Update a story", () => {

    const storyChanges = {
    
      title: "Paris-updated",
      story: "will be written soon",
      img_link: "https://unsplash.com/photos/Sw57gA_fojQ",
      date_pic_taken:"02-20-2020",
      location: "to be updated",
      user_id: userId
    
    
    }
    it("should should return status 200", () => {
      
      return request(server)
        .put(`/api/stories/${storyId}`)
        .set('Authorization', token)
        .send(storyChanges)
        .then( response => {
          
          expect(response.status).toBe(200)
        })
    } )
  })
  describe("Delete a story", () => {

    it("should should return status 200", () => {
      
      return request(server)
        .delete(`/api/stories/${storyId}`)
        .set('Authorization', token)
       
        .then( response => {
          
          expect(response.status).toBe(200)
        })
    } )
  })
  



    
})




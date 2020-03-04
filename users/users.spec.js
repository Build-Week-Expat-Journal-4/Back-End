const request = require("supertest");

const server = require("../api/server.js");

const db = require("../database/dbConfig.js");

let token;
let userId;
let password;
let username;

// let randomNum = Math.round() * 8000;

const testRegister = {
  first_name: "Jest2",
  last_name: "Testing2",
  email: "test@test.com",
  username: "testUser2",
  password: "test2"
};

// const testLogin = {
//   username: `testUser2${randomNum}`,
//   password: "test2"
// };

describe("register, login, and GET users", () => {
  it("should return status code 200", () => {
    return request(server)
      .post("/api/auth/register")
      .send(testRegister)
      .then(response => {
        return request(server)
          .post("/api/auth/login")
          .send({
            username: testRegister.username,
            password: testRegister.password
          })
          .then(response => {
            token = response.body.token;
            userId = response.body.id;

            return request(server)
              .get("/api/users")
              .set("Authorization", token)
              .then(res => {
                expect(res.status).toBe(200);
              });
          });
      });
  });

  describe("PUT /api/users/:id", () => {
    it("Should update a user's email", () => {
      return request(server)
        .put(`/api/users/${userId}`)
        .set("Authorization", token)
        .send({ email: "test@testTesting.com" })
        .then(res => {
          expect(res.body.email).toMatch(/test@testTesting.com/);
        });
    });
  });

  describe("stories", () => {
    const story = {
      title: "Paris",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link: "https://unsplash.com/photos/Sw57gA_fojQ",
      date_pic_taken: "11-11-2011",
      location: "Paris,France",
      user_id: userId
    };
    it("GET/ should get list of stories", () => {
      return request(server)
        .get(`/api/users/${userId}/stories`)
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("POST/ Should post a new story", () => {
      beforeEach(async () => {
        await db("stories").truncate();
        //this leaves 1 user in the database
      });
      return request(server)
        .post(`/api/users/${userId}/stories`)
        .set("Authorization", token)
        .send(story)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});

// describe("Authorization", function() {
//   const user = {
//     first_name: "Jane2",
//     last_name: "Doe2",
//     email: "test2@test.com2",
//     username: "janedoe2",
//     password: "pass"
//   };
//   describe("POST /register", () => {
//     beforeEach(async () => {
//       await db("users").truncate();
//     });
//     it("should return 201 created", () => {
//       return (
//         request(server)
//           .post("/api/auth/register")
//           // .set('Accept', 'application/json')
//           .send(user)
//           .then(response => {
//             username = response.body.username;
//             expect(response.status).toBe(201);
//           })
//       );
//     });
//   });
//   describe("POST /login", () => {
//     beforeEach(async () => {
//       await db("stories").truncate();
//     });
//     it("should return 200 created", () => {
//       return (
//         request(server)
//           .post("/api/auth/login")
//           // .set('Accept', 'application/json')
//           .send({ username: username, password: "pass" })
//           .then(response => {
//             token = response.body.token;
//             userId = response.body.id;
//             console.log(response.body.token);
//             expect(response.status).toBe(200);
//           })
//       );
//     });
//   });
// });
// describe(" users", () => {
//   describe("get all users", () => {
//     it("should should return status 200", () => {
//       return request(server)
//         .get(`/api/users`)
//         .set("Authorization", token)
//         .then(response => {
//           console.log("user body", response.body);
//           expect(response.status).toBe(200);
//         });
//     });
//   });
//   describe("Update a user", () => {
//     const userChanges = {
//       username: "changedjane"
//     };
//     it("should should return status 200", () => {
//       return request(server)
//         .put(`/api/users/${userId}`)
//         .set("Authorization", token)
//         .send(userChanges)
//         .then(response => {
//           expect(response.body.username).toMatch(/changedjane/i);
//         });
//     });
//   });
//   describe("Delete a user", () => {
//     it("should should return status 200", () => {
//       return request(server)
//         .delete(`/api/users/${userId}`)
//         .set("Authorization", token)
//         .then(response => {
//           expect(response.status).toBe(200);
//         });
//     });
//   });
// });

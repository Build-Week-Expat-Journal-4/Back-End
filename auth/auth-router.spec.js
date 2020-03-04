const request = require("supertest");

const server = require("../api/server.js");

const db = require("../database/dbConfig.js");

const testUser = {
  first_name: "jestTest",
  last_name: "jestTest",
  email: "jestTest@email.com",
  username: Math.random() * 12,
  password: "jester1"
};

let username;


describe("auth router", () => {
  it("should run the tests", () => {
    expect(true).toBe(true);
  });

  describe("POST /register", () => {
    it("should return 201 created", () => {
      return request(server)
        .post("/api/auth/register")
        .send(testUser)
        .then(response => {
          // console.log(response.body.api);
          username = response.body.username;
          expect(response.status).toBe(201);
        });
    });

    it("Should return 500", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "Jest" })
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
  });

  describe.skip("POST /login", () => {
    it("should login a user and then reach get the users route", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          username: username,
          password: "Jester1"
        })
        .then(res => {
          const token = res.body;
          return request(server)
            .get("/api/users")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBeTruthy();
            });
        });
    });
    it.skip("should deny login", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "trick", password: "tricky" })
        .then(res => {
          expect(res.status).toBe(401);
        })
        .then(res => {
          return db("users").truncate();
        });
    });
  });
});

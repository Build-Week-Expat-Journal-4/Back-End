const request = require("supertest");
const server = require("../api/server.js");

describe("Register", function() {
  const user = {
    first_name: "John1",
    last_name: "Doe1",
    email: "test@test.com1",
    username: "jdoe1",
    password: "pass1"
  };

  describe.skip("POST /register", () => {
    it("should return 201 created", () => {
      return (
        request(server)
          .post("/api/auth/register")
          // .set('Accept', 'application/json')
          .send(user)
          .then(response => {
            console.log(response.body.api);
            expect(response.status).toBe(201);
          })
      );
    });
  });
});

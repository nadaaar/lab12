const request = require("supertest");
const app = require("./routes/user");
const mongoose = require("mongoose");
const { connect } = require("superagent");
const { config } = require("dotenv");

describe("Test Add User", () => {
  test("should create a new post", () => {
    const res = request(app).post("http://localhost:8000/user/add").send({
      Name: "umar",
      Email: "byumar",
      Age: "22",
      Contact: 33263,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("post");
  });
});

describe("Test the delete path", () => {
  test("It should response the Delete method", () => {
    const response = request(app).delete("http://localhost:8000/user/:id");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the user added", () => {
  test("It should response the UserAdded method", () => {
    const response = request(app)
      .get("http://localhost:8000/user/:id")
      .send({ Name: "umar" });
    expect(response.body.toEqual("umar").statusCode).toBe(200);
  });
});
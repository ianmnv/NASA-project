const request = require("supertest");

const app = require("../../app");

describe("Test GET /launches", () => {
  test("Should return 200 status code", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-type", /json/);
    // const response = await request(app).get("/launches").expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launch", () => {
  test("Should return 200 status code", () => {});
  test("Should catch for missing require properties", () => {});
  test("Should catch invalid dates", () => {});
});

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
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1791",
    target: "Kepler 1293-a",
    launchDate: "January 1, 2025",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1791",
    target: "Kepler 1293-a",
  };

  test("Should return 201 created status code", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(requestDate).toBe(responseDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("Should catch for missing require properties", () => {});
  test("Should catch invalid dates", () => {});
});

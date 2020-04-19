const request = require("supertest");
var app = require("../app");
describe("Post Endpoints", () => {
  it("should get a hello world message", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });
});

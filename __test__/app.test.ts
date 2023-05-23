import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  test("Hello world route", async () => {
    const res = await request(app).get("/hello");
    expect(res.body).toEqual({ message: "Hello world" });
  });
});
const { expect } = require("chai");
const { getHotels } = require("./utils");

describe("Get Hotels Function: Will also filter results based off selected facilities", () => {
  it("returns an array", () => {
    expect(getHotels()).to.be.an("array");
  });
});

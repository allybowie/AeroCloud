const { expect } = require("chai");
const { getHotels } = require("./utils");

describe("Get Hotels Function: Will filter results based off selected facilities, or return all hotels if no filters are selected", () => {
  it("returns an array", () => {
    expect(getHotels()).to.be.an("array");
  });
  it("returns the complete array of hotels when no arguments are passed", () => {
    expect(getHotels()).to.have.length(7);
  });
  it("returns an array of the correct length when gym is passed in the filter", () => {
    expect(getHotels(["gym"])).to.have.length(2);
  });
  it("returns an array of the correct length when car park is passed in the filter", () => {
    expect(getHotels(["car park"])).to.have.length(5);
  });
  it("returns an array of the correct length when 2 filters are passed", () => {
    expect(getHotels(["gym", "car park"])).to.have.length(1);
  });
  it("returns an array of the correct length when 2 filters are passed", () => {
    expect(getHotels(["pool", "car park"])).to.have.length(3);
  });
});

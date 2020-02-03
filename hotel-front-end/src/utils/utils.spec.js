const { expect } = require("chai");
const { getHotels, sortHotels } = require("./utils");

describe.only("Get Hotels Function: Will filter results based off selected facilities, or return all hotels if no filters are selected", () => {
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
  it("returns a correctly ordered array of correct length when passed filters and a sort order", () => {
    expect(getHotels(["pool", "car park"], "desc")).to.eql([
      {
        name: "hotelone",
        starRating: 5,
        facilities: ["car park", "pool"]
      },
      {
        name: "hotelfour",
        starRating: 5,
        facilities: ["car park", "pool"]
      },
      {
        name: "hotelnine",
        starRating: 2,
        facilities: ["car park", "pool"]
      }
    ]);
  });
});

describe("Sort Hotels Function: Will sort currently displayed hotels by star rating", () => {
  it("returns an array", () => {
    const hotels = getHotels();
    expect(sortHotels(hotels)).to.be.an("array");
  });
  it("returns an array of length 6 when no arguments are passed", () => {
    const hotels = getHotels();
    expect(sortHotels(hotels)).to.have.length(7);
  });
  it("returns an array of unfiltered hotels sorted by descending ratings", () => {
    const hotels = getHotels();
    expect(sortHotels(hotels, "desc")).to.have.length(7);
    expect(sortHotels(hotels, "desc")[6]).to.eql({
      name: "hotelthree",
      starRating: 1,
      facilities: []
    });
  });
  it("returns an array of unfiltered hotels sorted by ascending ratings", () => {
    const hotels = getHotels();
    expect(sortHotels(hotels, "asc")).to.have.length(7);
    expect(sortHotels(hotels, "asc")[0]).to.eql({
      name: "hotelthree",
      starRating: 1,
      facilities: []
    });
  });
  it("returns an array of filtered hotels sorted in ascending order", () => {
    const hotelsCarPark = getHotels(["car park"]);
    const hotelsPoolCarPark = getHotels(["car park", "pool"]);
    expect(sortHotels(hotelsCarPark, "asc")).to.have.length(5);
    expect(sortHotels(hotelsCarPark, "asc")[0]).to.eql({
      name: "hotelnine",
      starRating: 2,
      facilities: ["car park", "pool"]
    });
    expect(sortHotels(hotelsPoolCarPark, "asc")).to.have.length(3);
    expect(sortHotels(hotelsPoolCarPark, "asc")[0]).to.eql({
      name: "hotelnine",
      starRating: 2,
      facilities: ["car park", "pool"]
    });
  });
  it("returns an array of filtered hotels in descending order", () => {
    const hotelsCarPark = getHotels(["car park"]);
    const hotelsPoolCarPark = getHotels(["car park", "pool"]);
    expect(sortHotels(hotelsCarPark, "desc")).to.have.length(5);
    expect(sortHotels(hotelsCarPark, "desc")[0]).to.eql({
      name: "hotelone",
      starRating: 5,
      facilities: ["car park", "pool"]
    });
    expect(sortHotels(hotelsPoolCarPark, "desc")).to.have.length(3);
    expect(sortHotels(hotelsPoolCarPark, "desc")[0]).to.eql({
      name: "hotelone",
      starRating: 5,
      facilities: ["car park", "pool"]
    });
  });
});

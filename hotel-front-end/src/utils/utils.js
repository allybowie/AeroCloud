const { testData } = require("./testdata");

const getHotels = (filters = []) => {
  let hotels = [];

  filters !== []
    ? testData.forEach(element => {
        if (filters.every(i => element.facilities.includes(i))) {
          hotels.push(element);
        }
      })
    : (hotels = testData);

  return hotels;
};

const sortHotels = (inputHotels, sort) => {
  let hotels = inputHotels;
  sort === "desc"
    ? (hotels = inputHotels.sort((a, b) => {
        return b.starRating - a.starRating;
      }))
    : (hotels = inputHotels.sort((a, b) => {
        return a.starRating - b.starRating;
      }));
  return hotels;
};

module.exports = { getHotels, sortHotels };

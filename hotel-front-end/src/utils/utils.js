const { testData } = require("./testdata");

const getHotels = (filters = [], order = null) => {
  let hotels = [];

  filters !== []
    ? testData.forEach(element => {
        if (filters.every(i => element.facilities.includes(i))) {
          hotels.push(element);
        }
      })
    : (hotels = testData);

  if (order) {
    hotels = sortHotels([...hotels], order);
  }

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

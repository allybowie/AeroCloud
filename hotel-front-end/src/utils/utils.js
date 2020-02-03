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

module.exports = { getHotels };

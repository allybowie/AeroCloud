const { testData } = require("../utils/testdata");
const { getHotels, sortHotels } = require("../utils/utils");

const initialState = {
  hotels: testData
};

function reducer(state = initialState, action) {
  return state;
}

export default reducer;

const { testData } = require("../utils/testdata");
const { getHotels, sortHotels } = require("../utils/utils");

const initialState = {
  hotels: testData
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER":
      const filteredHotels = getHotels(action.filters);
      return { hotels: [...filteredHotels] };
    case "SORT":
      const sortedHotels = sortHotels(action.hotels, action.sort);
      return { hotels: [...sortedHotels] };
    default:
      return state;
  }
}

export default reducer;

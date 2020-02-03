const { testData } = require("../utils/testdata");
const { getHotels, sortHotels } = require("../utils/utils");

const initialState = {
  hotels: testData
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SORT":
      const sortedHotels = sortHotels(action.hotels, action.sort);
      return { hotels: [...sortedHotels] };
    default:
      return state;
  }
}

export default reducer;

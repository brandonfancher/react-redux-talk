import moment from 'moment';

// Initial state
const initialState = {
  count: 0,
  countEntries: [],
};

// State reducer
export const countDashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: state.count + 1,
        countEntries: [...state.countEntries, { timeStamp: moment(), count: state.count + 1 }],
      };
    default:
      return state;
  }
};

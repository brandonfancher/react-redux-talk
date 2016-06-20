import moment from 'moment';

// Initial state
const initialState = {
  color: '#000',
  colorEntries: [],
  count: 0,
  countEntries: [],
};

// State reducer
export const dashboards = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color.hex,
        colorEntries: [...state.colorEntries, { timeStamp: moment(), color: action.color.hex }],
      };
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

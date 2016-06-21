import moment from 'moment';

// Initial state
const initialState = {
  color: '#000',
  colorEntries: [],
};

// State reducer
export const colorDashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color.hex,
        colorEntries: [...state.colorEntries, { timeStamp: moment(), color: action.color.hex }],
      };
    default:
      return state;
  }
};

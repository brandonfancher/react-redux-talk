import { combineReducers, createStore } from 'redux';
import { colorDashboard } from '../redux/colorReducer';
import { countDashboard } from '../redux/countReducer';
import { loadState, saveState } from '../redux/localStorage';
import throttle from 'lodash/throttle';

// Set up redux store, and with redux dev tools extension support
const configureStore = () => {
  const persistedState = loadState(); // from localStorage
  const reducer = combineReducers({ colorDashboard, countDashboard });

  let store = createStore(reducer, persistedState);
  if (window.devToolsExtension) {
    store = window.devToolsExtension()(createStore)(reducer, persistedState);
  }

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000)); // save to localStorage, once every second to avoid too many expensive JSON.stringify operations

  return store;
};

export default configureStore;

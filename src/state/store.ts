import { createStore, combineReducers } from "@/myRedux";
import counterReducer from "@/state/feature/counterReducer";

const reducers = combineReducers({
  counter: counterReducer,
});
const store = createStore(reducers);

export default store;

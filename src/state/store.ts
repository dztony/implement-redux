import { createStore } from "@/myRedux";
import counterReducer from "@/state/feature/counterReducer";

const store = createStore(counterReducer);

export default store;

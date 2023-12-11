import createStoreLocalRedux from "@/localRedux/index";
import { counterReducer } from "@/feature/counter";

export const localStore = createStoreLocalRedux(counterReducer as any);

import { createStore } from "redux";
// import { reducerCounter } from "./reducers/ReducerCounter";
// import { reducerStudent } from "./reducers/ReducerStudent";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer);


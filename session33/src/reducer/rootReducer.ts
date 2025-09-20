import { combineReducers } from "redux";
import { reducerCarts } from "./reducerCart";

export const rootReducer = combineReducers({   
    cart: reducerCarts
})
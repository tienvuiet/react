import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudent } from "./ReducerStudent";
import { reducerUser1 } from "./Ex1";
import { reducerUsers } from "./Ex2";
import { reducerRandom } from "./Ex4";
import { reducerChangeName } from "./Ex5";
import { reducerChangeBG } from "./Ex6";
import { reducerAuth } from "./Ex7+8";

export const rootReducer = combineReducers({   
    counter : reducerCounter,
    students : reducerStudent,
    user1: reducerUser1 ,
    user2: reducerUsers,
    random: reducerRandom,
    change : reducerChangeName,
    changebr: reducerChangeBG,
    auth: reducerAuth
})
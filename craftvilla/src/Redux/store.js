import { legacy_createStore,compose,applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {reducer as home_decor} from "./product/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const rootReducer = combineReducers({home_decor, AuthReducer})

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk));

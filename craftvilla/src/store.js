import { legacy_createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {reducer} from "./Redux/reducer"


export const store =legacy_createStore(reducer,applyMiddleware(thunk));

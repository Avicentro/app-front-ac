import { combineReducers } from "redux";
import loginData from "./loginData/reducers";

const rootReducer = combineReducers({ loginData });

export default rootReducer;

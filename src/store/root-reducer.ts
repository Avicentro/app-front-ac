import { combineReducers } from "redux";
import loginData from "./loginData/reducers";
import toastData from "./toast/reducers";

const rootReducer = combineReducers({ loginData, toastData });

export default rootReducer;

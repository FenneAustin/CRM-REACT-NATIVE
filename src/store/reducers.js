import { combineReducers } from "@reduxjs/toolkit";
import person from "../features/customer/reducers";


const rootReducer = combineReducers({
    person,
});



export default rootReducer;

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import UserReducer from "./UserReducer";

const store = createStore(UserReducer, applyMiddleware(thunk));

export default store;

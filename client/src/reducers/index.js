import reducer from './posts';
import { combineReducers } from "redux";

const reducers = combineReducers({
    posts:reducer,
})

export { reducers };
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import userReducer from "./user-reducer";
import usersReducer from "./users-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
    user: userReducer,
    users: usersReducer,
    messages: messagesReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
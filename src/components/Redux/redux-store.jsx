import {combineReducers, createStore} from "redux";
import siteBarReducer from "./sitebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: siteBarReducer
});

let store = createStore(reducers);


export default store;

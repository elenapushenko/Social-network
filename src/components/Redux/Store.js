import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteBarReducer from "./sitebar-reducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 5},
                {id: 2, message: 'How are you?', likesCount: 15},
            ],
            newPostText: "meow"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Vika'},
                {id: 4, name: 'Andrew'},
            ],
            messages: [
                {id: 1, message: 'hello'},
                {id: 2, message: 'hi'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'how are you?'}
            ],
            newMessageText: "meow"
        },
        siteBar: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Vika'}
        ]

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = siteBarReducer(this._state.siteBar, action);
        this._callSubscriber(this._state);
    }
};


export default store;
window.state = store;
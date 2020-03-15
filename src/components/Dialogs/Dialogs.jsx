import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let onSendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let textMessage = e.currentTarget.value;
        props.updateNewMessageText(textMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                              value={state.newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
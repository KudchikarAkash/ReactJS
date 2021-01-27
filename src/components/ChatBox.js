//import liraries
import React from 'react';
import {FaPhone, FaRegWindowClose, FaVideo} from 'react-icons/fa';
// create a component
const ChatBox = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header-img">
                    <img src="/Images/Kasalkar.jpg" alt="user" />
                </div>
                <div className="chat__header-name">
                    Akash Kasalkr
                </div>
                <div className="chat__second">
                    <FaVideo className="chat__header-icons" />
                    <FaPhone className="chat__header-icons" />
                    <FaRegWindowClose className="chat__header-icons" />
                </div>
            </div>
            <div className="chat__body">
                <div className="chat__left">
                    <p className="msg">Hi </p>
                </div>
                <div className="chat__right">
                    <p className="msg">Hello </p>
                </div>
                <div className="chat__left">
                    <p className="msg">How Are you? </p>
                </div>
                <div className="chat__right">
                    <p className="msg">I'm fine</p>
                </div>
            </div>
            <div className="chat__footer">
                <input type="text" className="chat__input" placeholder="Aa" />
            </div>
        </div>
    );
};



//make this component available to the app
export default ChatBox;

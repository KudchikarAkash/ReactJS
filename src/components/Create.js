//import liraries
import React from 'react';
import {FaVideo, FaRegFileImage, FaRegGrinAlt} from 'react-icons/fa';

// create a component
const Create = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__first-img">
                    <span>
                        <img src="/Images/Akash.jpg" alt="User" />
                    </span>
                    
                </div>
                <div className="create__first-input">
                    <input type="text" className="create__first-inputs" placeholder="What's on your mind, Akash?"/>
                </div>
            </div>
            <div className="create__second">
                <span className="create__second-icon">
                    <FaVideo className="redColor" /><span className="text">Live Video</span>
                </span>
                <span className="create__second-icon">
                    <FaRegFileImage className="greenColor" /><span className="text">Photo / Video</span>
                </span>
                <span className="create__second-icon">
                    <FaRegGrinAlt className="orangeColor" /><span className="text">Feeling</span>
                </span>
                
            </div>
        </div>
    );
};

//make this component available to the app
export default Create;

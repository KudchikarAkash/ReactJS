//import liraries
import React, { useState } from 'react';

// create a component
const ChatBar = () => {
    const [state] = useState([
        { id: 1, image: "Images/Kasalkar.jpg", name: "Akash Kasalkar" },
        { id: 2, image: "Images/Sidd.jpg", name: "Sidharth Kawale" },
        { id: 3, image: "Images/Baban.jpg", name: "Baban Argu" },
        { id: 4, image: "Images/Akash.jpg", name: "Akash Kudchikar" },
        { id: 5, image: "Images/NarendraModi.jpg", name: "Narendra Modi" },
        { id: 6, image: "Images/Kasalkar.jpg", name: "James Bond" },
        { id: 7, image: "Images/Group.jpg", name: "Akshay Kumar" },
        { id: 8, image: "Images/Sidd.jpg", name: "Virat Kohli" },
        { id: 9, image: "Images/Akash.jpg", name: "Sachin Tendulkar" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
        { id: 10, image: "Images/Baban.jpg", name: "Lavadu Lalit" },
    ])
    return (
        <div className="chatBar">
            {state.map(user => (
                <div className="chatBar__list">
                    <div className="chatBar__list-img">
                        <img src={user.image} alt="user" />
                        <span className="status"></span>
                    </div>
                    <div className="chatBar__list-name">{user.name}</div>
                </div>
            ))}
        </div>
    );
};

//make this component available to the app
export default ChatBar;

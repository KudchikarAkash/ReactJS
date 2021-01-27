//import liraries
import React, { useState } from 'react';


// create a component
const SideBar = () => {
    const [state] = useState([
        {
            id: 1,
            image: '/Images/Akash.jpg', name: 'Flutter Development'
        },
        {
            id: 2,
            image: '/Images/Baban.jpg', name: 'Android Development'
        },
        {
            id: 3,
            image: '/Images/Kasalkar.jpg', name: 'PHP Development'
        },
        {
            id: 4,
            image: '/Images/Sidd.jpg', name: 'ReactNative Development'
        },
        {
            id: 5,
            image: '/Images/Group.jpg', name: 'NodeJs Development'
        },
        {
            id: 6,
            image: '/Images/Akash.jpg', name: 'Ionics Development'
        },
    ])
    return (
        <div className="sidebar">
            {state.map((info) => (

                <div className="sidebar__list" key={info.id}>
                    <div className="sidebar__list-img">
                        <img src={info.image} alt="Akash1" />
                    </div>
                    <div className=""> {info.name}</div>
                </div>

            ))
            }
        </div>
    );
};


//make this component available to the app
export default SideBar;

//import liraries
import React, { useState } from 'react';
import 'tachyons';
// create a component
const Stories = () => {
    const [state] = useState([
        {
            id:1, image:"/Images/Akash.jpg", name:"Akash kudchikar"
        },
        {
            id:1, image:"/Images/kasalkar.jpg", name:"Akash kasalkar"
        },
        {
            id:1, image:"/Images/Sidd.jpg", name:"Sidharth Kawale"
        },
        {
            id:1, image:"/Images/Baban.jpg", name:"Baban Argu"
        },
    ]);
    return (
        <div className="stories">
            {
                state.map(story=>(
                    <div className="stories__col grow">
                        <div className="stories__body">
                            <img src={story.image} alt="Stories" />
                            <div className="stories__body-overlay">
                                <div className="stories__body-overlay-img">
                                    <img src={story.image} alt="Akki" />
                                </div>
                                <div className="stories__body-name">{story.name}</div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};



//make this component available to the app
export default Stories;

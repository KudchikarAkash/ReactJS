//import liraries
import React from 'react';
import Stories from './Stories';
import Create from './Create';
import ShowPost from './ShowPost';
// create a component
const Posts = () => {
    return (
        <div className="posts">
            <Stories/>
            <Create/>
            <ShowPost/>
        </div>
    );
};



//make this component available to the app
export default Posts;

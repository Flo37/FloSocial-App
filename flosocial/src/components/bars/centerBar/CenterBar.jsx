import React from 'react';
import Post from './post/Post';

const CenterBar = () => {
    return (
        <div className='centerBar'>
            <div className="container">
            <img src="./Assets/profile.jpg" alt="" />
            <input placeholder="What's do you think?"/>
            <hr />
            <div className="icons">
            <span className='media' ><i class="fa-solid fa-photo-film"></i> photo or video</span>
            <span className='tag'><i class="fa-solid fa-tag"></i> tag</span>
            <span className='location'><i class="fa-solid fa-location-dot"></i> location</span>
            <span className='feelings'><i class="fa-solid fa-face-smile"></i> feelings</span>
            <button  className='share'>Share</button>
            </div>
            </div>
            <Post/>
        </div>
    );
};

export default CenterBar;
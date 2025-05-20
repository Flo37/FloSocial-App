import React from 'react';

const Post = () => {
    return (
        <div className='post'>
            <div className="post_container">
                <div className="top">
                    <div className="left">
                    <img className='first_post' src="./assets/profile.jpg" alt="" />
                    </div>
                     <div className="center">
                    <h3>flo</h3>
                    </div>
                    <div className="right">
                    <span>2 days a go</span>
                    </div>
                 </div>
                 <div className="post_center">
                    <div className='like'>
                        <span>👩‍❤️‍👩</span> 
                        <p>10</p>
                    </div>
                    <div className='comment'><i class="fa-solid fa-message"></i>
                    <span>60</span></div>
                 </div>
            </div>
            
        </div>
    );
};

export default Post;
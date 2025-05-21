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
                 <div className="center_post">
                    <span className='hello'>Hello guys!! here my first post:)</span>
                    <img  className='firstPost' src="./assets/3.jpg" alt="" />
                 </div>
                 <div className="bottom">
                    <div className='like'>
                        <span><i class="fa-regular fa-thumbs-up liked"></i></span> 
                        <p>10</p>
                    </div>
                    <div className='comment'><i class="fa-solid fa-message"></i>
                    <span>60</span></div>

                 </div>
                    <hr />
                    <div className="buttons">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
            </div>
            
        </div>
    );
};

export default Post;
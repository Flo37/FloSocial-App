import React from 'react';

const Leftbar = () => {
    return (
        <div className='leftBar'>
           <div className="feed">
           <i class="fa-solid fa-rss"></i>
           <span>Feed</span>
           </div>

           <div className="chats">
           <i class="fa-solid fa-message"></i>
            <span>Chats</span>

            <div className="video">
            <i class="fa-solid fa-video"></i>
            <span>video</span>
            </div>

            <div className="groups">
            <i class="fa-solid fa-people-group"></i>
            <span>Groups</span>
            </div>

            <div className="Bookmarks">
            <i class="fa-solid fa-bookmark"></i>
            <span>Bookmarks</span>
            </div>

            <div className="Questions">
            <i class="fa-solid fa-circle-question"></i>
            <span>Questions?</span>
            </div>
            
            <div className="Jobs">
            <i class="fa-solid fa-briefcase"></i>
            <span>Jobs</span>
            </div>
            
            <div className="Events">
            <i class="fa-solid fa-calendar-days"></i>
            <span>Events</span>
            </div>
            
            <div className="Courses">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Courses</span>
            </div>

           </div>
        </div>
    );
};

export default Leftbar;
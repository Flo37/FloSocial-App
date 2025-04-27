import React from 'react';

const Leftbar = () => {
    return (
        <div className='leftBr'>
            <ul className="boxBar">

           <li className="feed">
           <i class="fa-solid fa-rss"></i>
           <span>Feed</span>
           </li>

           <li className="chats">
           <i class="fa-solid fa-message"></i>
            <span>Chats</span>
           </li>

            <li className="video">
            <i class="fa-solid fa-video"></i>
            <span>video</span>
            </li>

            <li className="groups">
            <i class="fa-solid fa-people-group"></i>
            <span>Groups</span>
            </li>

            <li className="bookmarks">
            <i class="fa-solid fa-bookmark"></i>
            <span>Bookmarks</span>
            </li>

            <li className="Questions">
            <i class="fa-solid fa-circle-question"></i>
            <span>Questions?</span>
            </li>
            
            <li className="Jobs">
            <i class="fa-solid fa-briefcase"></i>
            <span>Jobs</span>
            </li>
            
            <li className="Events">
            <i class="fa-solid fa-calendar-days"></i>
            <span>Events</span>
            </li>
            
            <li className="Courses">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Courses</span>
            </li>

            </ul>
            <div className="buttonfooter">
                <button>Comments</button>
            <hr className='footerhr' />
            </div>
            <div className="comments">
                <div className="cont1">
                <img src="./Assets/1.jpg" alt="" />
                <span>Floris</span>
                </div>
                <div className="cont2">
                <img src="./Assets/2.jpg" alt="" />
                <span>Marcel</span>
                </div>
                <div className="cont3">
                <img src="./Assets/3.jpg" alt="" />
                <span>John</span>
                </div>
                <div className="cont1">
                <img src="./Assets/1.jpg" alt="" />
                <span>Floris</span>
                </div>
                <div className="cont2">
                <img src="./Assets/2.jpg" alt="" />
                <span>Marcel</span>
                </div>
                <div className="cont3">
                <img src="./Assets/3.jpg" alt="" />
                <span>John</span>
                </div>
                <div className="cont1">
                <img src="./Assets/1.jpg" alt="" />
                <span>Floris</span>
                </div>
                <div className="cont2">
                <img src="./Assets/2.jpg" alt="" />
                <span>Marcel</span>
                </div>
                <div className="cont3">
                <img src="./Assets/3.jpg" alt="" />
                <span>John</span>
                </div>
                <div className="cont1">
                <img src="./Assets/1.jpg" alt="" />
                <span>Floris</span>
                </div>
                <div className="cont2">
                <img src="./Assets/2.jpg" alt="" />
                <span>Marcel</span>
                </div>
                <div className="cont3">
                <img src="./Assets/3.jpg" alt="" />
                <span>John</span>
                </div>
            </div>

        </div>
    );
};

export default Leftbar;
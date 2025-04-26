import React from 'react';


const Bars = () => {
    return (
        
            <div className="header_bar">
                <div className="logo">
                    <h1>FloSocail <i class="fa-solid fa-people-arrows connect"></i></h1>
                </div>
                <div className="search">
                <i class="fa-solid fa-magnifying-glass user_search"></i>
                    <input placeholder='search for freinds_video_content' className="inputSearch" />
                </div>

                <div className="chat">
                    <div className="navBar">
                        <h3>Parameter</h3>
                        <h3>Profile</h3>
                    </div>
                    <div className="user">
                    <i class="fa-solid fa-user"></i>
                    <span className="user_span">
                        1
                    </span>
                    </div>

                    <div className="notification">
                    <i class="fa-solid fa-square-envelope"></i>
                    <span className="notification_span">
                        1
                    </span>
                    </div>

                    <div className="message">
                    <i class="fa-solid fa-message"></i>
                    <span className="sms">
                        2
                    </span>
                    </div>

                    <div className="profile">
                        <img src="./assets/profile.jpg" alt="" />
                    </div>

                </div>
            </div>
            
        
    );
};

export default Bars;
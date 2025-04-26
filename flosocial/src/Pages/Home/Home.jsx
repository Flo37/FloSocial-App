import React from 'react';
import Bars from '../../components/bars/topBar/Bars';
import Leftbar from '../../components/bars/leftBar/Leftbar';
import CenterBar from '../../components/bars/centerBar/CenterBar';
import RightBar from '../../components/bars/rightBar/RightBar';

const Home = () => {
    return (
        <div className='home'>
           <Bars/> 
           <div className="bars">
           <Leftbar/>
           <CenterBar/>
           <RightBar/>
           </div> 
        </div>
    );
};

export default Home;
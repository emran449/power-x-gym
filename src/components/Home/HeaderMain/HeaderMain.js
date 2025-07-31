import React from 'react';
import Video from '../../../Image-Icon/video.mp4'

const HeaderMain = () => {
    return (
        <main style={{height: '600px',
            
        }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 text-white">
                <h1>THE BEST FITNESS <br />STUDIO IN TOWN</h1>
                <p className='text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit ex eius animi. Perspiciatis facere labore repellat adipisci nostrum aspernatur?</p>
                <button className="btn btn-primary">JOIN US</button>
            </div>
            <div className="col-md-4 offset-md-2 ">
                <video id="bannerVideo" height='300px' width='400px'  muted loop controls ='controls'>
          <source src={Video} type="video/mp4" />
        </video>
            </div>
        </main>
    );
};

export default HeaderMain;
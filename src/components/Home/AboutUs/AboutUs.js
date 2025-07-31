import React from 'react';
import './AboutUs.css'
import AboutPic from '../../../Image-Icon/about-pic.jpg'

const AboutUs = () => {
    return (
        <section className='about-us'>
            <div className='container'>
                <div className='row '>
            <div className="col-md-6">
                <div>
                    <img className='img-fluid' height='auto' width='400px' src={AboutPic} alt="" />
                </div>
            </div>
            <div className="col-md-6 ">
                <div className=''>
                    <h1 className='text-secondary mb-3'>ABOUT US</h1>
                    <h2 style={{color: 'orange'}}>WE ARE HERE TO DREAM!</h2>
                    <h1 >OUR TEAM IS HERE SURVE YOU.</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos veniam soluta error voluptas impedit quisquam distinctio molestias cumque optio?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ad?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem.
                    </p>
                </div>
            </div>
        </div>
            </div>
        </section>
    );
};

export default AboutUs;
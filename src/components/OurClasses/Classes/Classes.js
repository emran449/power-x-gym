import React from 'react';
import './Classes.css';
import Img1 from '../../../Image-Icon/phycho1.png';
import Img2 from '../../../Image-Icon/self.jpg';
import Img3 from '../../../Image-Icon/advance.jpg';
import Img4 from '../../../Image-Icon/cardio.jpg';
import Img5 from '../../../Image-Icon/strength.jpg';
import Img6 from '../../../Image-Icon/phycho2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const classesData = [
    {name: 'Psycho Training', img: Img1},
    {name: 'Self Defense', img: Img2},
    {name: 'Advanced Gym', img: Img3},
    {name: 'Cardio Training', img: Img4},
    {name: 'Strength Training', img: Img5},
    {name: 'Psycho Training', img: Img6}
]

const Classes = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                {classesData.map((item, index) => (
                    console.log(index, item), // Debugging line to check the index and item
                    // Ensure that the console log is for debugging purposes
                    <div className='col-md-4' key={index}>
                        <div className='mt-3'>
                            <div className="position-relative class-card">
                            <img height={300} width='300px' src={item.img} alt={item.name} className='d-flex justify-content-center' />
                                <h2 className='text-bg-warning p-3 me-2 position-absolute bottom-0'>
                                    {item.name} <FontAwesomeIcon icon={faArrowRight} />
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
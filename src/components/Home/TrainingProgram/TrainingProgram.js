import React from 'react';
import './TrainingProgram.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrainingProgram = () => {
    return (
        <div className='container my-5'>
            <div className='text-center py-5'>
                <h1>TRAINING <span style={{color:'orange'}}>PROGRAM</span></h1>
            </div>
            <div className='row gx'>
                <div className="col-md-6">
                    <div className="yoga position-relative">
                        <h2 className='text-bg-warning p-3 me-5 position-absolute bottom-0 mb-5'>
                            YOGA TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} />
                             </h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="cardio ">
                        <h2 className='text-bg-warning p-3  me-3 position-absolute bottom-0 mb-5'>CARDIO TRAINING SESSION 
                            <FontAwesomeIcon icon={faArrowRight} /> </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingProgram;
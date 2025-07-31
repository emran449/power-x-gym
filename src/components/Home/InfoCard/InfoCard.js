import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4  text-white'>
            <div className={`info-${info.background}`}>
                <div className=' content'>
                    <div>
                        <img width='30px' src={info.icon} alt="" />
                        
                    </div>
                    <div className='mt-4'>
                        <h3 className={`title-${info.background}`}>{info.title}</h3>
                        <small className='text-white-50'>{info.description}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
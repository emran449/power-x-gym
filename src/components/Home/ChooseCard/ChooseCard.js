import React from 'react';

const ChooseCard = (props) => {
    const {title, description, icon} = props.data;
    return (
        <div className="col-md-4">
            <div style={{height: '100%', width: '100%'}} className='card shadow-sm'>
            <div className='card-body my-5 text-center'>
                <div className='my-5'>
                    <img width='100px' src={icon} alt="" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <small>{description}</small>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ChooseCard;
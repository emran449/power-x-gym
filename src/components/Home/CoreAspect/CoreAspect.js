import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faDumbbell, faStopwatch, faBottleWater } from '@fortawesome/free-solid-svg-icons';
import Icon1 from '../../../Image-Icon/Group 80.png';
import Icon2 from '../../../Image-Icon/Group 81.png';
import Icon3 from '../../../Image-Icon/Group 82.png';

const infoData = [
    {
        title: 'PROGRESSION',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquam.',
        icon: Icon1,
        background: 'card-1'
    },
    {
        title: 'WORKOUT',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquam.',
        icon: Icon2,
        background: 'card-2'
    },
    {
        title: 'NUTRITION',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquam.',
        icon: Icon3,
        background: 'card-3'
    },
]

const CoreAspect = () => {
    return (
        <div className='container mb-5'>
            <div className='d-flex justify-content-center'>
            <div className='my-5  row'>
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default CoreAspect;
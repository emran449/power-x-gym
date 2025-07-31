import React from 'react';
import Icon1 from '../../../Image-Icon/Group 87.png';
import Icon2 from '../../../Image-Icon/Group 88.png';
import Icon3 from '../../../Image-Icon/gift-2.png';
import ChooseCard from '../ChooseCard/ChooseCard';

const cardData = [
    {
        title: 'FREE FITNESS TRAINING',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquam.',
        icon: Icon1
    },
    {
        title: 'TONS OF CARDIO & STRENGTH',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquam.',
        icon: Icon2
    },
    {
        title: 'NO COMMITMENT MEMBERSHIPS',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquam.',
        icon: Icon3
    },
]

const WhyChooseUs = () => {
    return (
        <section className='why-choose-us'>
            <div className=' m-5 mb-5'>
            <div className='text-center m-5 p-5'>
                <h1><span className='text-warning'>WHY</span> CHOOSE US</h1>
            </div>
            <div className="row ">
                {
                    cardData.map(data => <ChooseCard data= {data}></ChooseCard>)
                }
            </div>
        </div>
        </section>
    );
};

export default WhyChooseUs;
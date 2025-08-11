import React from 'react';
import Header from '../../OurClasses/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import MembershipFlow from '../MembershipFlow/MembershipFlow';

const Membership = () => {
    return (
        <div>
            <Header />
            <MembershipFlow />
            <Footer />
        </div>
    );
};

export default Membership;
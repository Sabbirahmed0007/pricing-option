import React, { use } from 'react';
import PricingOption from './PricingOption';

const PricingOptions = ({ membershipPromise }) => {


    const memberships = use(membershipPromise);

    return (
        <div className='mt-10'>
            <div>

                <h1 className='text-2xl font-bold'>Get Our Membership</h1>
                <h1 className='text-2xl font-bold mb-5'>Our Plans</h1>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8'>
                {memberships.map(membership=><PricingOption key={membership.id} membership={membership}></PricingOption>)}
            </div>
        </div>
    );
};

export default PricingOptions;
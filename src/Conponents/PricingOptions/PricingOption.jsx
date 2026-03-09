import { Feather } from 'lucide-react';
import React, { useState } from 'react';
import Feature from './Feature';

const PricingOption = ({ membership }) => {


   

    console.log(membership);

    const { id, plan, price, duration, description, features, popularity } = membership

   
    

    return (
        <div>
            <div className="card w-96 bg-gray-200 text-black shadow-sm mx-auto flex ">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning font-semibold">{ popularity}</span>
                    <div className="flex justify-between items-center flex-1">
                        <h2 className="text-3xl font-bold">{plan}</h2>
                        <span className="text-xl capitalize">${ price}/{duration.slice(4)}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs h-60 overflow-auto ">
                        {
                            features.map(feature=><Feature feature={feature}></Feature>)
                        }
                        
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingOption;
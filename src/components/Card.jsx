import React from 'react';

const Card = ({image, desc}) => {
    return (
        <div className="">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-72">
                <img
                    src={image}
                    alt="unsplash images" className="rounded-t-lg"/>
                <div className="p-6">
                    <p className="text-gray-700 mb-2">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;


/*
        <div key={id} className="bg-gray-100 rounded max-w-96">
            <img
                className="rounded"
                src={image}
                alt="val.alt_description"
            />
            <p className="text-center mt-2 text-gray-700 font-bold p-2">{desc}</p>
        </div>*/

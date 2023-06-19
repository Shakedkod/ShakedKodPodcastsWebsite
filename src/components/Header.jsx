import React from 'react';

import { AppWrap } from '../wrapper';

const Header = () => {
    return (
        <>
            {/*
            <img 
                src="https://via..com/" 
                alt="logo" 
                className="h-100 w-full object-cover"
            />
            */}

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-secColor">
                    In Construction...<br/>
                    Hold Please :)
                </h1>
            </div>
            
        </>
    )
}

export default AppWrap(Header, 'header');
import React from 'react';

import { AppWrap } from '../wrapper';

const ErrorHeader = () => {
    return (
        <>
            <p className="font-ozard text-9xl text-secColor">404</p>
            <button 
                type="button"
                class="bg-yellow-500 hover:bg-orange-600 m-5 p-4 text-xl text-white font-bold rounded-md"
                onClick={() => window.history.back()}
            >
                Go Back
            </button>
        </>
    )
}

export default AppWrap(ErrorHeader, 'header');
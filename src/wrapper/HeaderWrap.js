import React from 'react';

const HeaderWrap = (Component, idName, className) => function HOC() 
{
    return (
        <div id={idName} className={`app__container ${className}`}>
            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">©2023 ShakedKod</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderWrap;
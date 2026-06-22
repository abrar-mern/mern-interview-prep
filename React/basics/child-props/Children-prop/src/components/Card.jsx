import React from 'react';

export const Card = ({children}) => {
    return (
        <div className='card-wrapper' style={{border : '2px solid black', padding : '20px'}}>
            {children}
        </div>
    )
}
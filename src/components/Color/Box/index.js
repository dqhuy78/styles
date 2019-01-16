import React from 'react';

import './style.scss';

const Box = ({ color }) => (
    <div className='Box'>
        <div className='Box__color' style={{ backgroundColor: color.color }}>
            {color.color}
        </div>
        <p className='Box__title'>{color.title}</p>
    </div>
)

export default Box;

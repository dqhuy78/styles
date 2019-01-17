import React from 'react';

import './style.scss';

const Box = ({ color }) => (
    <div className='Box'>
        <div className='Box__color' style={{ backgroundColor: color }}>
            {color}
        </div>
    </div>
)

export default Box;

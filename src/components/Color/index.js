import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Box from './Box/';

const colors = [
    { title: 'Red', color: '#e8384f' },
    { title: 'Orange', color: '#fd612c' },
    { title: 'Yellow Orange', color: '#fd9a00' },
    { title: 'Yellow', color: '#eec300' },
    { title: 'Yellow Green', color: '#a4cf30' },
    { title: 'Green', color: '#62d26f' },
    { title: 'Blue Green', color: '#37c5ab' },
    { title: 'Aqua', color: '#20aaea' },
    { title: 'Blue', color: '#4186e0' },
    { title: 'Indigo', color: '#7a6ff0' },
    { title: 'Purple', color: '#aa62e3' },
    { title: 'Magenta', color: '#e362e3' },
    { title: 'Hot Pink', color: '#ea4e9d' },
    { title: 'Pink', color: '#fc91ad' },
    { title: 'Cool Gray', color: '#8da3a6' },
];

const Color = () => (
    <div className='Color'>
        <h2 className='Color__title'>
            Main Color
        </h2>
        <div className='Color__container'>
            {
                colors.map(color => (
                    <div key={color.color} className='Color__item'>
                        <Link to='/' className='Color__link'>
                            <Box color={color} />
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Color;

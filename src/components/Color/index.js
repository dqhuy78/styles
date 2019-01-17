import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Box from './Box/';

const colors = [
    {
        title: 'Red', content: [
            '#e8384f', '#ff6565', '#ff2f2f', '#fa5e5b'
        ]
    },
    {
        title: 'Green', content: [
            '#16c98d', '#0fdebd', '#37c5ab', '#25c58c', '#62d26f', '#a4cf30'
        ]
    },
    {
        title: 'Blue', content: [
            '#142b44', '#1d508d', '#297cbb', '#288ad6', '#4186e0', '#427eff', '#20aaea'
        ]
    },
    {
        title: 'Orange', content: [
            '#fd612c', '#ff8104', '#fd9a00', '#ffc83f'
        ]
    },
    {
        title: 'Yellow', content: [
            '#ffba0f', '#eec300', '#feef6d'
        ]
    },
    {
        title: 'Pink', content: [
            '#ea4e9d', '#e362e3', '#ff33ed', '#fc91ad', '#bf538d'
        ]
    },
    {
        title: 'Purple', content: [
            '#7a6ff0', '#aa62e3',
        ]
    },
    {
        title: 'Gray', content: [
            '#666666', '#9a9a9a', '#8da3a6', '#4b515d', '#3e4551', '#263238', '#37474f'
        ]
    },
    {
        title: 'Black', content: [
            '#212121', '#2e2e2e',
        ]
    }
];

const Color = () => (
    <div className='Color'>
        <h2 className='Color__title'>
            Main Color
        </h2>
        {
            colors.map(color => (
                <div key={color.title} className='Color__group'>
                    <div className='Color__group-title'>
                        {color.title}
                    </div>
                    <div className='Color__container'>
                        {
                            color.content.map(color => (
                                <div key={color} className='Color__item'>
                                    <Link to='/' className='Color__link'>
                                        <Box color={color} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
)

export default Color;

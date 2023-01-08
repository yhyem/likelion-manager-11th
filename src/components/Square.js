import React from 'react';
import '../styles/Square.css'
import { useState } from 'react';

const Square = () => {
    //기능 구현전 간단하게 값 세팅
    const [value, setValue] = useState('');
    return (
        <button className="square" onClick={() => setValue('X')}>
            {value}
        </button>
    );
};

export default Square;
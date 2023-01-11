import React from 'react';
import '../styles/Square.css'
import { useState } from 'react';

const Square = ({ data, index, result, user }) => {
    //기능 구현전 간단하게 값 세팅
    const [value, setValue] = useState('');
    return (
        <button className="square" onClick={() => {
            data == null && setValue(user ? 'O' : 'X');
            data == null && result(user ? 'O' : 'X', index);
        }}>
            {value}
        </button>
    );
};

export default Square;
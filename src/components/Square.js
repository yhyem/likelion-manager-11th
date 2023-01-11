import React from 'react';
import '../styles/Square.css'
import { useState } from 'react';

const Square = ({ data, index, result, user }) => {
    //기능 구현전 간단하게 값 세팅
    return (
        <button className="square" onClick={() => {
            result(user ? 'O' : 'X', index);
        }}>
            {data}
        </button>
    );
};

export default Square;
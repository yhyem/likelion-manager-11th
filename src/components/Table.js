import React, { useState } from 'react';
import '../styles/Table.css'
import Square from './Square';

const Table = () => {
    const [array, setArray] = useState([null, null, null, null, null, null, null, null, null]);
    const [isNext, setIsNext] = useState(true);

    const handleClick = (value, index) => {
        array[index] = value;
        setArray(...[array]);
        setIsNext(!isNext);
        console.log(array);
    }

    return (
        <div className="table">
            <div>현재 player : {isNext ? 'O' : 'X'}</div>
            {array.map((value, index) => (
                <div className={(index + 1) % 3 === 0 ? "board" : ''} key={index}>
                    <Square data={value} index={index} result={handleClick} user={isNext} />
                </div>
            )
            )}


        </div>
    );
};

export default Table;
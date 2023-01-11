import React, { useState } from 'react';
import '../styles/Table.css'
import Square from './Square';

const Table = () => {
    const [array, setArray] = useState([null, null, null, null, null, null, null, null, null]);
    const [isNext, setIsNext] = useState(true);

    const handleClick = (value, index) => {
        if (calculateWinner(array) || array[index]) {
            setArray([null, null, null, null, null, null, null, null, null]);
            return;
        }
        array[index] = value;
        setArray(...[array]);
        setIsNext(!isNext);
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(array);

    return (
        <div className="table">
            <div>현재 player : {isNext ? 'O' : 'X'}</div>
            {array.map((value, index) => (
                <div className={(index + 1) % 3 === 0 ? "board" : ''} key={index}>
                    <Square data={value} index={index} result={handleClick} user={isNext} />
                </div>
            )
            )}
            <div>{winner ? 'Winner : ' + winner : null}</div>
        </div>
    );
};

export default Table;
import React from 'react';
import '../styles/Table.css'
import Square from './Square';

const Table = () => {
    return (
        <div className="table">
            <div className="board">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};

export default Table;
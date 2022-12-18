import React, {useState} from "react";
import {Square} from "./square";

import boardStyles from './board.module.css'

export function Board(props: any) {
    const [state, setState] = useState({
        squares: Array(9).fill(null),
        xIsNext: false,
    })

    const markXOnSquares = (i: number) => {
        const newSquares = state.squares.slice();
        newSquares[i] = state.xIsNext ? 'X' : 'O';
        return newSquares;
    }

    const handleClick = (i: number) => {
        if (calculateWinner(state.squares) || state.squares[i]) {
            return;
        }
        setState({
            xIsNext: !state.xIsNext,
            squares: markXOnSquares(i)
        });
    }

    const renderSquare = (i: number) => {
        return <Square
            value={state.squares[i]}
            onClick={() => {
                handleClick(i)
            }}
        />
    };

    const winner = calculateWinner(state.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
    }

    return <div>
        <div className={boardStyles.status}>{status}</div>
        <div className={boardStyles['board-row']}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className={boardStyles['board-row']}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className={boardStyles['board-row']}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>;
}

function calculateWinner(squares: any[]) {
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
import React from "react";
import {Square} from "./square";

import boardStyles from './board.module.css'

export function Board(props: any) {
    const renderSquare = (i: number) => {
        return <Square
            value={props.squares[i]}
            onClick={() => {
                props.onClick(i)
            }}
        />
    };

    return <div>
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
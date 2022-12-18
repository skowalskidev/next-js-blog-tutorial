import React from "react";
import {Square} from "./square";

import boardStyles from './board.module.css'

export class Board extends React.Component {
    renderSquare(i: any) {
        return <Square/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className={boardStyles.status}>{status}</div>
                <div className={boardStyles['board-row']}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={boardStyles['board-row']}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={boardStyles['board-row']}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
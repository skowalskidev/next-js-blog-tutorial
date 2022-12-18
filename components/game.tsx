import React from "react";
import {Board} from "./board";

import gameStyles from './game.module.css';

export function Game() {
    return <div className={gameStyles.game}>
        <div className={gameStyles['game-board']}>
            <Board/>
        </div>
        <div className={gameStyles['game-info']}>
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>
}
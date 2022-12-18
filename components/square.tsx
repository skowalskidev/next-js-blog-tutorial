import React from "react";

import squareStyles from './square.module.css'

export function Square(props: any) {
    return <button className={squareStyles.square} onClick={props.onClick}>
        {props.value}
    </button>;
}
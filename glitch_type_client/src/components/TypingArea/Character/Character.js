import React from 'react'

import classes from './Character.module.css'

const character = (props) => {
    let style = classes.Character
    if (props.touched) {
        if (props.correct) {
            style = [style, classes.correct].join(' ')
        } else {
            style = [style, classes.incorrect].join(' ')
        }
    }

    return (
        <span className={style}>{props.value}</span>
    )
}

export default character
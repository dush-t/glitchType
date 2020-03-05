import React from 'react'

import classes from './Key.module.css'

const getKeyClassName = (keyType, pressed) => {
    let keyStyleClass = pressed ? classes.pressedKey : classes.unpressedKey

    switch (keyType) {
        case "letter": return [keyStyleClass, classes.letter].join(' ')
        case "leftShift": return [keyStyleClass, classes.leftShift].join(' ')
        case "rightShift": return [keyStyleClass, classes.rightShift].join(' ')
        case "space": return [keyStyleClass, classes.space].join(' ')
        case "enter": return [keyStyleClass, classes.enter].join(' ')
        case "capsLock": return [keyStyleClass, classes.capsLock].join(' ')
        case "backSpace": return [keyStyleClass, classes.backSpace].join(' ')
        case "tab": return [keyStyleClass, classes.tab].join(' ')
        default:
            console.log('Unknown key type!')
            break
    }
}

const key = (props) => {
    
    let keyStyleClass = getKeyClassName(props.keyType, props.pressed)

    if (props.disabled) {
        keyStyleClass = [keyStyleClass, classes.disabled].join(' ')
    }

    return (
        <div className={keyStyleClass}>
            {props.disabled ? "" : props.keyName}
        </div>
    )
}

export default key
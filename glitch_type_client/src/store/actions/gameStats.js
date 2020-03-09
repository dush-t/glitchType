import * as actionTypes from './actionTypes'

export const handleIncorrectKeystroke = (keyStroke) => {
    return {
        type: actionTypes.INCORRECT_KEYSTROKE,
        keyStroke: keyStroke
    }
}

export const handleCorrectKeystroke = (keyStroke) => {
    return {
        type: actionTypes.CORRECT_KEYSTROKE,
        keyStroke: keyStroke
    }
}
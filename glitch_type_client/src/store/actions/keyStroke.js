import * as actionTypes from './actionTypes'

export const handleIncorrectKeyStroke = (keyStroke) => {
    return {
        type: actionTypes.INCORRECT_KEYSTROKE,
        keyStroke: keyStroke
    }
}

export const handleCorrectKeyStroke = (keyStroke) => {
    return {
        type: actionTypes.CORRECT_KEYSTROKE,
        keyStroke: keyStroke
    }
}

export const handleBackspace = () => {
    return {
        type: actionTypes.BACKSPACE_PRESSED
    }
}
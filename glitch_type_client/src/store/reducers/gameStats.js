import * as actionTypes from '../actions/actionTypes'

const initialState = {
    currentWord: '',
    keyStrokes: 0,
    accuracy: 100,
    position: 1
}

const updateStatsCorrectKeystroke = (state, keyStroke) => {
    let newWord = ''
    if (keyStroke !== ' ') {
        newWord = state.currentWord + keyStroke
    }

    const newKeyStrokes = state.keyStrokes + 1
    const newAccuracy = (state.accuracy * state.keyStrokes + 1) / newKeyStrokes
    return {
        ...state,
        currentWord: newWord,
        keyStrokes: newKeyStrokes,
        accuracy: newAccuracy
    }
}

// Creating a separate function because I might wanna customize what
// happens on incorrect keystrokes in the future.
const updateStatsIncorrectKeystroke = (state, keyStroke) => {
    const newWord = state.currentWord + keyStroke
    const newKeyStrokes = state.keyStrokes + 1
    const newAccuracy = (state.accuracy * state.keyStrokes - 1) / newKeyStrokes
    return {
        ...state,
        currentWord: newWord,
        keyStrokes: newKeyStrokes,
        accuracy: newAccuracy
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_KEYSTROKE: return updateStatsCorrectKeystroke(state, action.keyStroke)
        case actionTypes.INCORRECT_KEYSTROKE: return updateStatsIncorrectKeystroke(state, action.keyStroke)
        default: return state
    }
}

export default reducer
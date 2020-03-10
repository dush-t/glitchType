import * as actionTypes from '../actions/actionTypes'

const initialState = {
    textArray: 'Hello world test'.split(''),
    correctPosition: 0,
    incorrectOffset: 0,
    trailPosition: 0
}

const registerCorrectKeystroke = (state) => {
    const newCorrectPosition = state.correctPosition + 1
    return {...state, correctPosition: newCorrectPosition}
}

const registerIncorrectKeystroke = (state) => {
    const newIncorrectOffset = state.incorrectOffset + 1
    return {...state, incorrectOffset: newIncorrectOffset}
}

const doBackspace = (state) => {
    let incorrectOffset = state.incorrectOffset
    let correctPosition = state.correctPosition
    const trailPosition = state.trailPosition
    if (correctPosition === trailPosition) {
        return
    }
    if (incorrectOffset > 0) {
        const newIncorrectOffset = incorrectOffset - 1
        return {...state, incorrectOffset: newIncorrectOffset}
    } else {
        const newCorrectPosition = correctPosition - 1
        return {...state, correctPosition: newCorrectPosition}
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_KEYSTROKE: return registerCorrectKeystroke(state)
        case actionTypes.INCORRECT_KEYSTROKE: return registerIncorrectKeystroke(state)
        case actionTypes.BACKSPACE_PRESSED: return doBackspace(state)
        default: return state
    }
}

export default reducer
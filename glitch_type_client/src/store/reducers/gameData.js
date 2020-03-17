import * as actionTypes from '../actions/actionTypes'

const initialState = {
    gameStarted: false
}

const startGame = (state) => {
    return {...state, gameStarted: true}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GAME_START: return startGame(state)
        default: return state
    }
}

export default reducer
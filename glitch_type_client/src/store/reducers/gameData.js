import * as actionTypes from '../actions/actionTypes'

const initialState = {
    gameStarted: false,
    username: '',
    roomId: '',
    playerList: [],

    loading: false,
    error: null
}

const startGame = (state) => {
    return {...state, gameStarted: true}
}

const enterRoomStart = (state) => {
    return {...state, loading: true}
}

const enterRoomSuccess = (state, username, roomId, playerList) => {
    return {
        ...state,
        loading: false,
        gameStarted: true,
        username: username,
        roomId: roomId,
        playerList: playerList
    }
}

const enterRoomFail = (state, error) => {
    return {
        ...state,
        loading: false,
        error: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GAME_START: return startGame(state)
        case actionTypes.ENTER_ROOM_START: return enterRoomStart(state)
        case actionTypes.ENTER_ROOM_SUCCESS: return enterRoomSuccess(state, action.username, action.roomId, action.playerList)
        case actionTypes.ENTER_ROOM_FAIL: return enterRoomFail(state, action.error)
        default: return state
    }
}

export default reducer
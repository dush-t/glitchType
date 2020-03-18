import * as actionTypes from './actionTypes'

export const gameStart = () => {
    return {
        type: actionTypes.GAME_START
    }
}

export const enterRoomStart = () => {
    return {
        type: actionTypes.ENTER_ROOM_START
    }
}

export const enterRoomSuccess = (roomId, playerList) => {
    return {
        type: actionTypes.ENTER_ROOM_SUCCESS,
        roomId: roomId,
        playerList: playerList
    }
}

export const enterRoomFail = (error) => {
    return {
        type: actionTypes.ENTER_ROOM_FAIL,
        error: error
    }
}
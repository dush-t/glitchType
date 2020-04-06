const socket = io()

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

let timestamp = 0
const timeBetweenRefresh = 4

socket.emit("join", { username, room }, (error) => {
    if (error) {
        return console.log(error)
        //redirect to Auth form
    }

    return console.log(`User ${username} has entered ${room}.`)
})

socket.emit("start", id, timestamp = (new Date()).getTime(), (error) => {
    if (error) {
        return console.log(error)
    }
    return console.log(`UserId ${id} found!`)
})

socket.on("startGameMessage", (info) => {
    RoomTimestamp = info.timestamp
    room = info.room
    for (let i = 0; ; i++) {
        while (true) {
            if ((new Date()).getTime() >= info.timestamp + (timeBetweenRefresh * 1000) * i) {
                //Send Scores for user
                score = 0
                //"score" should be the present score of the client.
                socket.emit("recentScore", score.info)
                break;
            }
        }
    }
})

socket.on("leaderboard", (leaderboard) => {

})
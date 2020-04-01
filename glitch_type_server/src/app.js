const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const { addUser, getUser, removeUser, getAllUsersInRoom } = require("./utils/users")

const publicDirectory = path.join(__dirname, "../../glitch_type_client/public")
app.use(express.static(publicDirectory))

let roomTimestamp = {}


io.on("connection", (socket) => {
    console.log("Connection Established!")

    socket.on("join", (credentials, callback) => {
        const { info, error } = addUser({ id: socket.id, ...credentials })

        if (error) {
            return callback(error)
        }
        callback()
    })

    socket.on("start", (id, timestamp, callback) => {
        const user = getUser(id)
        user.timeStart = timestamp

        if (user === undefined) {
            return callback(`UserId ${id} not found!`)
        }

        roomTimestamp[user.room] = timestamp

        socket.join(user.room)
        socket.emit("message", { username: user.username, text: `Hello ${user.username}!` })
        socket.broadcast().to(user.room).emit("startGameMessage", { roomTimestamp: roomTimestamp[user.room], text: `${user.username} has started playing.`, room: user.room })
    })

    socket.on("recentScore", (updatedScore) => {
        getUser(socket.id).score = updatedScore
        room = getUser(socket.id).room
        let scoreCard = getAllUsersInRoom(room)
        //Sorting
        //Though sorting could have also been done at client side.

        io.to(room).emit("leaderboard", getAllUsersInRoom(room))
    })

})




module.exports = server
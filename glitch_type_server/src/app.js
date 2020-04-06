const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const { addUser, getUser, removeUser, getAllUsersInRoom } = require("./utils/users")
const quickSort = require("./utils/quicksort")

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

    socket.on("start", (timestamp, callback) => {
        const user = getUser(socket.id)
        user.timeStart = timestamp

        if (user === undefined) {
            return callback(`UserId ${id} not found!`)
        }

        roomTimestamp[user.room] = timestamp

        socket.join(user.room)
        socket.emit("message", { username: user.username, text: `Hello ${user.username}!` })
        socket.broadcast().to(user.room).emit("gameMessage", { roomTimestamp: roomTimestamp[user.room], text: `${user.username} has started playing.`, room: user.room })
    })

    socket.on("recentScore", (updatedScore) => {
        getUser(socket.id).score = updatedScore
        room = getUser(socket.id).room
        let scoreCard = getAllUsersInRoom(room).info
        leaderboard = quickSort(scoreCard).reverse()

        io.to(room).emit("leaderboard", leaderboard)
    })


    socket.on("disconnect", () => {
        const user = removeUser(socket.id).info
        roomTimestamp[user.room] = (new Date()).getTime()
        socket.to(user.room).emit("gameMessage", { roomTimestamp: roomTimestamp[user.room], text: `${user.username} has left.`, room: user.room })
    })

})




module.exports = server
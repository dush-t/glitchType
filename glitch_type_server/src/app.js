const http = require('http')
const express = require('express')
const socketio = require('socketio')

const app = express()
const server = http.createServer(app)
const io = socketio(server)


module.exports = server
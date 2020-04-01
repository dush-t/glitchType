const users = []


const addUser = ({ id, username, room, timeStart = 0, score = 0, }) => {
    if (!username || !room) {
        return { error: "Username and room is required." }
    }

    username = username.trim()
    room = room.trim().toUpperCase()

    const status = users.find(user => user.room === room && user.username.toLowerCase() === username.toLowerCase())

    if (status !== undefined) {
        return { error: `A user with  username ${username} is already present in ${room}` }
    }

    if (users.filter(user => user.room === room.trim().toUpperCase()).length < 10) {
        users.push({
            id,
            username,
            room,
            score
        })
        return { info: `${username} entered ${room}` }
    }

    return { error: "A room can contain maximum of 10 members." }
}


const getUser = id => users.find(user => user.id === id)


const removeUser = id => {
    const index = users.findIndex(user => user.id === id)
    if (index === -1) {
        return { error: `User with id ${id} not present.` }
    }
    const user = users.splice(index, 1)
    return { info: user }
}


const getAllUsersInRoom = room => ({
    info: usersInRoom = users.filter(user => user.room === room.trim().toUpperCase())
})


module.exports = {
    addUser,
    getUser,
    removeUser,
    getAllUsersInRoom
}
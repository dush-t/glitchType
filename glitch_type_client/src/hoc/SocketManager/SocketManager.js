import React, { Component } from 'react'
import io from 'socket.io-client'

const CONNECTION_BASE_URL = 'http://localhost:3001'


export const SocketContext = React.createContext()
export const useWebSocket = () => React.useContext(SocketContext)


class SocketManager extends Component {
    state = {
        socket: null
    }

    constructor(props) {
        super(props)

        this.state.socket = io.connect(CONNECTION_BASE_URL, {
            transports: ['websocket'],
            rejectUnauthorized: false,
            secure: false
        })
    }

    componentWillUnmount() {
        try {
            this.socket.disconnect();
        } catch (e) {
            console.log('Socket already disconnected!')
        }
    }

    render() {
        return (
            <SocketContext.Provider value={this.state.socket}>
                {this.props.children}
            </SocketContext.Provider>
        )
    }
}

export default SocketManager
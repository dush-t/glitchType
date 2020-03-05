import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import Titlebar from '../../components/Titlebar/Titlebar'
import GameArea from '../../containers/GameArea/GameArea'
import Leaderboard from '../../containers/Leaderboard/Leaderboard'
import GameLogs from '../../containers/GameLogs/GameLogs'
// import classes from 'Layout.module.css'


class Layout extends Component {
    render() {
        return (
            <Aux>
                <Titlebar />
                Hello World
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout
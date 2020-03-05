import React, {Component} from 'react'

import Keyboard from '../../components/Keyboard/Keyboard'

import classes from './GameArea.module.css'

class GameArea extends Component {
    render() {
        return (
            <div className={classes.GameArea}>
                <div className={classes.KeyboardArea}>
                    <Keyboard />
                </div>
            </div>
        )
    }
}

export default GameArea
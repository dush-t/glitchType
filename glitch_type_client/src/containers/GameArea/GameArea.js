import React, {Component} from 'react'

import Keyboard from '../../components/Keyboard/Keyboard'
import TypingArea from '../../components/TypingArea/TypingArea'

import classes from './GameArea.module.css'

class GameArea extends Component {
    render() {
        return (
            <div className={classes.GameArea}>
                <div className={classes.TypingArea}>
                    <TypingArea text={"Hello world test"}/>
                </div>
                <div className={classes.StatsArea}>
                    {/* <TypingArea /> */}
                </div>
                <div className={classes.KeyboardArea}>
                    <Keyboard />
                </div>
            </div>
        )
    }
}

export default GameArea
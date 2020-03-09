import React, {Component} from 'react'

import Keyboard from '../../components/Keyboard/Keyboard'
import TypingArea from '../../components/TypingArea/TypingArea'
import Stats from '../../components/Stats/Stats'

import classes from './GameArea.module.css'

class GameArea extends Component {
    render() {
        return (
            <div className={classes.GameArea}>
                <div className={classes.TypingArea}>
                    <TypingArea text={"Helloworldtest"}/>
                </div>
                <div className={classes.StatsArea}>
                    <Stats position={1} keystrokes={20} accuracy={90} />
                </div>
                <div className={classes.KeyboardArea}>
                    <Keyboard />
                </div>
            </div>
        )
    }
}

export default GameArea
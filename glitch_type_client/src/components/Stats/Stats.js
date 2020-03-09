import React from 'react'
import { connect } from 'react-redux'

import classes from './Stats.module.css'
// import Aux from '../../hoc/Aux/Aux'

const stats = (props) => {

    const accuracyStyles = {fontSize: "30px", marginLeft: "22px"}

    return (
        <div className={classes.StatsArea}>
            <div className={classes.position}>Position: <span className={classes.positionValue}>{props.position}</span></div>
            <div className={classes.keystrokes}>Keystrokes: <span className={classes.keystrokesValue}>{props.keyStrokes}</span></div>
            <div>Accuracy: <span style={accuracyStyles}>{props.accuracy}%</span></div>
            <div>Current Word: {props.currentWord}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        position: state.gameStats.position,
        keyStrokes: state.gameStats.keyStrokes,
        accuracy: state.gameStats.accuracy,
        currentWord: state.gameStats.currentWord
    }
}

export default connect(mapStateToProps)(stats)
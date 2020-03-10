import React, {Component} from 'react'
import { connect } from 'react-redux'

import Character from './Character/Character'
import KeyMap from '../Keyboard/keyMap'
import * as keyStrokeActions from '../../store/actions/index';

import classes from './TypingArea.module.css'

class TypingArea extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        window.addEventListener('keydown', (e) => {
            const {keyCode, key} = e
            this.handleKeyStroke(keyCode.toString(), key)
            console.log(keyCode, key)
        })
    }

    handleKeyStroke = (keyCode, keyValue) => {
        if (!KeyMap[keyCode].allowInput) {  // Don't record input for keys like Alt and Ctrl
            return
        }

        if (keyCode === '8') {
            this.props.onBackspace()
            return
        }

        if (this.props.correctPosition === this.props.textArray.length) {
            return
        }

        if (keyValue === this.props.textArray[this.props.correctPosition]) {
            this.props.onCorrectKeyStroke(keyValue)

        } else {
            this.props.onIncorrectKeyStroke(keyValue)

        }
    }
    
    render() {
        const {trailPosition, correctPosition, incorrectOffset} = this.props
        console.log(`trail: ${trailPosition} | correct: ${correctPosition} | incorrect: ${incorrectOffset}`)
        // const {trailPosition, correctPosition, incorrectOffset} = {trailPosition: 0, correctPosition: 4, incorrectOffset: 1}

        const chars = this.props.textArray.map((char, i) => {
            if (i < trailPosition) {
                return <Character touched={false} correct={true} value={char} />
            } else if (i >= trailPosition && i < correctPosition) {
                return <Character touched={true} correct={true} value={char} />
            } else if (i >= correctPosition && i < correctPosition + incorrectOffset) {
                return <Character touched={true} incorrect={false} value={char}/>
            } else {
                return <Character touched={false} correct={true} value={char} />
            }
        })

        return (
            <div className={classes.TypingArea}>
                {chars}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        textArray: state.typingArea.textArray,
        correctPosition: state.typingArea.correctPosition,
        incorrectOffset: state.typingArea.incorrectOffset,
        trailPosition: state.typingArea.trailPosition
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCorrectKeyStroke: (keyStroke) => dispatch(keyStrokeActions.handleCorrectKeyStroke(keyStroke)),
        onIncorrectKeyStroke: (keyStroke) => dispatch(keyStrokeActions.handleIncorrectKeyStroke(keyStroke)),
        onBackspace: () => dispatch(keyStrokeActions.handleBackspace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingArea)
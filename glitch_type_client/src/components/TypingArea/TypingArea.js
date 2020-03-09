import React, {Component} from 'react'
import { connect } from 'react-redux'

import Character from './Character/Character'
import KeyMap from '../Keyboard/keyMap'
import * as keyStrokeActions from '../../store/actions/index';

import classes from './TypingArea.module.css'

class TypingArea extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        
        this.state['textArray'] = props.text.split('')
        this.state['correctPosition'] = 0
        this.state['incorrectOffset'] = 0
        this.state['trailPosition'] = 0
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
            this.doBackSpace()
            return
        }

        if (this.state.correctPosition === this.state.textArray.length) {
            return
        }

        if (keyValue === this.state.textArray[this.state.correctPosition]) {
            const newCorrectPosition = this.state.correctPosition + 1
            this.setState({ correctPosition: newCorrectPosition})
            this.props.onCorrectKeyStroke(keyValue)

        } else {
            const newIncorrectOffset = this.state.incorrectOffset + 1
            this.setState({ incorrectOffset: newIncorrectOffset })
            this.props.onIncorrectKeyStroke(keyValue)

        }
    }

    doBackSpace = () => {
        let incorrectOffset = this.state.incorrectOffset
        let correctPosition = this.state.correctPosition
        const trailPosition = this.state.trailPosition

        if (correctPosition === trailPosition) {
            return
        }

        if (incorrectOffset > 0) {
            const newIncorrectOffset = incorrectOffset - 1
            this.setState({ incorrectOffset: newIncorrectOffset })
        } else {
            const newCorrectPosition = correctPosition - 1
            this.setState({ correctPosition: newCorrectPosition})
        }
    }
    
    render() {
        const {trailPosition, correctPosition, incorrectOffset} = this.state
        console.log(`trail: ${trailPosition} | correct: ${correctPosition} | incorrect: ${incorrectOffset}`)
        // const {trailPosition, correctPosition, incorrectOffset} = {trailPosition: 0, correctPosition: 4, incorrectOffset: 1}

        const chars = this.state.textArray.map((char, i) => {
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

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCorrectKeyStroke: (keyStroke) => dispatch(keyStrokeActions.handleCorrectKeyStroke(keyStroke)),
        onIncorrectKeyStroke: (keyStroke) => dispatch(keyStrokeActions.handleIncorrectKeyStroke(keyStroke))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingArea)
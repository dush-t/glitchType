import React, {Component} from 'react'

import Character from './Character/Character'
import KeyMap from '../Keyboard/keyMap'

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
        console.log("Listener added")
    }

    handleKeyStroke = (keyCode, keyValue) => {
        console.log("Function called")
        if (!KeyMap[keyCode].allowInput) {
            console.log("Input not allowed")
            return
        }

        if (keyCode === '8') {
            this.doBackSpace()
            return
        }

        if (keyValue === this.state.textArray[this.state.correctPosition]) {

            const newCorrectPosition = this.state.correctPosition + 1
            this.setState({ correctPosition: newCorrectPosition})
        } else {
            const newIncorrectOffset = this.state.incorrectOffset + 1
            this.setState({ incorrectOffset: newIncorrectOffset })
        }
    }

    doBackSpace = () => {
        let incorrectOffset = this.state.incorrectOffset
        let correctPosition = this.state.correctPosition

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

export default TypingArea
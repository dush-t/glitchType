import React, {Component} from 'react'

import Character from './Character/Character'

import classes from './TypingArea.module.css'

class TypingArea extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        
        this.state['textArray'] = props.text.split('')
        this.state['correctCounter'] = 0
        this.state['incorrectOffset'] = 0
        this.state['trailPosition'] = 0
    }

    componentDidMount = () => {
        
    }
    
    render() {
        // const {trailPosition, correctPosition, incorrectOffset} = this.state
        const {trailPosition, correctPosition, incorrectOffset} = {trailPosition: 0, correctPosition: 4, incorrectOffset: 1}

        const chars = this.state.textArray.map((char, i) => {
            if (i <= trailPosition) {
                return <Character touched={false} correct={true} value={char} />
            } else if (i > trailPosition && i <= correctPosition) {
                return <Character touched={true} correct={true} value={char} />
            } else if (i > correctPosition && i <= correctPosition + incorrectOffset + 1) {
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
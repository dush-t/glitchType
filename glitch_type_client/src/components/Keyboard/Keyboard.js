import React, {Component} from 'react'

import classes from './Keyboard.module.css'

import Key from './Key/Key'

class Keyboard extends Component {
    render() {
        return (
            <div className={classes.Keyboard}>
                <Key pressed={false} keyType={"letter"} keyName={"H"} />
            </div>
        )
    }
}

export default Keyboard
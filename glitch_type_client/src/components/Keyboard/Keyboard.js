import React, {Component} from 'react'

import classes from './Keyboard.module.css'
import keyboardData from './keyboardData'

import Key from './Key/Key'



class Keyboard extends Component {

    render() {
        return (
            <div className={classes.Keyboard}>
                <div className={classes.row}>1</div>
                <div className={classes.row}>2</div>
                <div className={classes.row}>3</div>
                <div className={classes.row}>4</div>
                <div className={classes.row}>5</div>
                {/* <Key pressed={false} keyType={'letter'} keyName={'H'} /> */}
            </div>
        )
    }
}

export default Keyboard
import React, {Component} from 'react'

import classes from './Keyboard.module.css'
import keyboardData from './keyboardData'

import Key from './Key/Key'



class Keyboard extends Component {

    constructor(props) {
        super(props)
        console.log("Building keyboard from data")
        this.state = {
            row1: {},
            row2: {},
            row3: {},
            row4: {},
            row5: {},
        }
        Object.keys(keyboardData).forEach((key) => {
            let rowKeyData = {}
            keyboardData[key].forEach((keyData) => {
                rowKeyData[keyData.value] = {...keyData, pressed: false, row: key}
            })
            this.state[key] = rowKeyData
        })

        console.log(this.state)
    }

    keyDownHandler = (row, key) => {
        const rowObj = this.state[row]
        const keyObj = rowObj[key]
        const updatedKeyObj = {...keyObj, pressed: true}
        const updatedRowObj = {...rowObj}
        updatedRowObj[key] = updatedKeyObj

        const updationObj = {}
        updationObj[row] = updatedRowObj

        this.setState(updationObj)
    }

    keyUpHandler = (row, key) => {
        const rowObj = this.state[row]
        const keyObj = rowObj[key]
        const updatedKeyObj = {...keyObj, pressed: false}
        const updatedRowObj = {...rowObj}
        updatedRowObj[key] = updatedKeyObj

        const updationObj = {}
        updationObj[row] = updatedRowObj

        this.setState(updationObj)
    }

    getKeyList = (row) => {
        const rowData = this.state[row]
        const keyList = Object.keys(rowData).map((keyName) => {
            const {pressed, disabled, type} = rowData[keyName]
            return (
                <Key pressed={pressed} keyType={type} disabled={disabled} keyName={keyName} id={keyName}/>
            )
        })
        return keyList
    }

    render() {

        return (
            <div className={classes.Keyboard}>
                <div className={classes.row}>
                    {this.getKeyList('row1')}
                </div>
                <div className={classes.row}>
                    {this.getKeyList('row2')}
                </div>
                <div className={classes.row}>
                    {this.getKeyList('row3')}
                </div>
                <div className={classes.row}>
                    {this.getKeyList('row4')}
                </div>
                <div className={classes.row}>
                    {this.getKeyList('row5')}
                </div>
                {/* <Key pressed={false} keyType={'letter'} keyName={'H'} /> */}
            </div>
        )
    }
}

export default Keyboard
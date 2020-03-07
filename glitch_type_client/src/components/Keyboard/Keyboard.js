import React, {Component} from 'react'

import classes from './Keyboard.module.css'
import keyboardData from './keyboardData'
import keyMap from './keyMap'

import Key from './Key/Key'



class Keyboard extends Component {

    constructor(props) {
        super(props)
        console.log("Building keyboard from data")
        this.state = {
            eggString: '',
            row1: {},
            row2: {},
            row3: {},
            row4: {},
            row5: {},
            capsLock: false
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

    componentDidMount = () => {
        window.addEventListener('keydown', (e) => {
            const keyData = keyMap[e.keyCode.toString()]
            if (keyData === undefined || keyData === null) {
                console.log('Unsupported key pressed')
                return
            }

            const {row, keyName} = keyData
            // console.log(e)
            this.keyDownHandler(row, keyName)
        })
        window.addEventListener('keyup', (e) => {
            const keyData = keyMap[e.keyCode.toString()]
            if (keyData === undefined || keyData === null) {
                console.log('Unsupported key pressed')
                return
            }

            const {row, keyName} = keyData
            this.keyUpHandler(row, keyName)
        })
    }

    keyDownHandler = (row, key) => {
        const rowObj = this.state[row]
        const keyObj = rowObj[key]
        if (keyObj.disabled) {
            return
        }

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
        if (keyObj.disabled) {
            return
        }
        
        const updatedKeyObj = {...keyObj, pressed: false}
        const updatedRowObj = {...rowObj}
        updatedRowObj[key] = updatedKeyObj

        const updationObj = {}
        updationObj[row] = updatedRowObj

        if (key === 'Caps') {
            updationObj['capsLock'] = !this.state.capsLock
            updationObj[row][key].pressed = !this.state.capsLock
        }
        
        updationObj.eggString = this.state.eggString + key
        if (updationObj.eggString === 'gay') {
            alert('Ur mom gay')
        }

        this.setState(updationObj)
    }

    getKeyList = (row) => {
        const rowData = this.state[row]
        const keyList = Object.keys(rowData).map((keyName) => {
            const {pressed, disabled, type} = rowData[keyName]
            return (
                <Key pressed={pressed} keyType={type} disabled={disabled} keyName={keyName} key={keyName} upperCase={this.state.capsLock}/>
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
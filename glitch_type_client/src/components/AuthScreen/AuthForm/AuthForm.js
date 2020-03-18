import React, { Component } from 'react'

import classes from './AuthForm.module.css'

class AuthForm extends Component {

    state = {
        usernameInput: '',
        roomIdInput: ''
    }

    handleInputChange = (event, inputName) => {
        switch (inputName) {
            case 'usernameInput': return this.setState({ usernameInput: event.target.value })
            case 'roomIdInput': return this.setState({ roomIdInput: event.target.value })
        }
    }

    submitHandler = () => {
        console.log(this.state)
        console.log('submit pressed')
    }

    render() {
        return (
            <div className={classes.AuthForm}>
                <div className={classes.FormHeading}>glitchType.</div>
                
                <input 
                    placeholder={'Username'}
                    value={this.state.usernameInput}
                    onChange={(e) => this.handleInputChange(e, 'usernameInput')}></input>
                <input 
                    placeholder={'Room ID'}
                    value={this.state.roomIdInput}
                    onChange={(e) => this.handleInputChange(e, 'roomIdInput')}></input>

                <div 
                    className={classes.JoinButton}
                    onClick={this.submitHandler}>Join</div>

                <div className={classes.BottomLinkContainer}>
                    <span className={classes.BottomLink}>Instructions</span> <span className={classes.BottomLink}>Developers</span>
                </div>
            </div>
        )
    }
}

export default AuthForm
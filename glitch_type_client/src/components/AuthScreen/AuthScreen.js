import React, { Component } from 'react'

import AuthForm from './AuthForm/AuthForm'
import Aux from '../../hoc/Aux/Aux'

import classes from './AuthScreen.module.css'

const authScreen = (props) => {
    return (
        <Aux>
            <div className={classes.InstructionContainer}>
                instructions
            </div>
            <div className={classes.FormContainer}>
                <AuthForm />
            </div>
        </Aux>
    )

}

export default authScreen
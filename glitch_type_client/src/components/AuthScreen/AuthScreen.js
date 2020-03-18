import React from 'react'

import AuthForm from './AuthForm/AuthForm'
import Instruction from './Instruction/Instruction'
import Aux from '../../hoc/Aux/Aux'

import classes from './AuthScreen.module.css'

const authScreen = (props) => {
    return (
        <Aux>
            <div className={classes.InstructionContainer}>
                <div className={classes.Instructions}>
                    <Instruction content={"Choose a unique username of your choice."} />
                    <Instruction content={"Enter a Room ID."} />
                    <Instruction content={"Race."} />
                </div>
            </div>
            <div className={classes.FormContainer}>
                <AuthForm />
            </div>
        </Aux>
    )

}

export default authScreen
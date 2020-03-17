import React from 'react'

import classes from './AuthForm.module.css'

const authForm = (props) => {
    return (
        <div className={classes.AuthForm}>
            <div className={classes.FormHeading}>glitchType.</div>
            <input placeholder={'Username'}></input>
            <input placeholder={'Room ID'}></input>
            <div className={classes.JoinButton}>Join</div>
            <div className={classes.BottomLinkContainer}>
                <span className={classes.BottomLink}>Instructions</span> <span className={classes.BottomLink}>Developers</span>
            </div>
        </div>
    )
}

export default authForm
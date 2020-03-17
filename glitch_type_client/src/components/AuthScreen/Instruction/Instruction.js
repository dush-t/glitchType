import React from 'react'

import classes from './Instruction.module.css'

const instruction = (props) => {
    return (
        <div className={classes.Instruction}>
            {props.content}
        </div>
    )
}

export default instruction
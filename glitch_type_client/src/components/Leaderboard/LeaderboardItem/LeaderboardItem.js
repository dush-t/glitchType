import React from 'react'

import classes from './LeaderboardItem.module.css'

const leaderboardItem = (props) => {
    return (
        <tr className={classes.LeaderboardItem}>
            <td>{props.rank}</td>
            <td>{props.name}</td>
        </tr>
    )
}

export default leaderboardItem
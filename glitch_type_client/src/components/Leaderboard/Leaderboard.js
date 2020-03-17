import React from 'react'
import { connect } from 'react-redux'

import classes from './Leaderboard.module.css'
import LeaderboardItem from './LeaderboardItem/LeaderboardItem'

const leaderboard = (props) => {
    const leaderboardData = props.leaderboardData.map(
        (item, i) => <LeaderboardItem name={item} rank={i + 1} key={i}/>
    )

    return (
        <div className={classes.Leaderboard}>
            <table>
            <tr>
                <th></th>
                <th>Username</th>
            </tr>
            {leaderboardData}
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        leaderboardData: state.leaderboard.leaderboardData
    }
}

export default connect(mapStateToProps)(leaderboard)
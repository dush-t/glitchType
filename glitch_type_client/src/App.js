import React from 'react'
import { connect } from 'react-redux'

import GameArea from './containers/GameArea/GameArea'
import Leaderboard from './components/Leaderboard/Leaderboard'
import GameLogs from './containers/GameLogs/GameLogs'
import AuthScreen from './components/AuthScreen/AuthScreen'

import Layout from './hoc/Layout/Layout'

function App(props) {
  let screen = null
  
  if (props.gameStarted) {
    screen = (
      <Layout>
        <GameArea />
        <Leaderboard />
        <GameLogs />
      </Layout>
    )
  } else {
    screen = <AuthScreen />
  }

  return screen
}

const mapStateToProps = (state) => {
  return {
    gameStarted: state.gameData.gameStarted
  }
}

export default connect(mapStateToProps)(App);

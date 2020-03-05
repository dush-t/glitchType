import React from 'react';

import GameArea from './containers/GameArea/GameArea'
import Leaderboard from './containers/Leaderboard/Leaderboard'
import GameLogs from './containers/GameLogs/GameLogs'

import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <Layout>
      <GameArea />
      <Leaderboard />
      <GameLogs />
    </Layout>
  );
}

export default App;

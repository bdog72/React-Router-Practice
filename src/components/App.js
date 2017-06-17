import React, { Component } from 'react'
import VotingApp from './VotingApp'
import TimeTrackingApp from './TimeTrackingApp'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/voting'>Voting App</Link></li>
        <li><Link to='/topics'>Time Tracking App</Link></li>
      </ul>
      <hr />
      <Route exact path='/'component={Home} />
      <Route path='/voting'component={Voting} />
      <Route path='/topics'component={Topics} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1 className='fsrHead'>FULL STACK REACT</h1>
  </div>
)

const Voting = () => (
  <div>
    <VotingApp />
  </div>
)

const Topics = () => (
  <div>
    <TimeTrackingApp />
  </div>
)

class App extends Component {
  render () {
    return <div>
      <BasicExample />
    </div>
  }
}

export default App

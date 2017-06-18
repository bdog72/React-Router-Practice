import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ex1'>Example 1</Link></li>
        <li><Link to='/ex2'>Example 2</Link></li>
      </ul>
      <hr />
      <Route exact path='/'component={Home} />
      <Route path='/ex1'component={Voting} />
      <Route path='/ex2'component={Topics} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1 className='fsrHead'>REACT ROUTER</h1>
  </div>
)

const Voting = () => (
  <div>
    <h1>Bdog1</h1>
  </div>
)

const Topics = () => (
  <div>
    <h1>Bdog2</h1>
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

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

//Using Logical && Operator

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="Chakri👌" />
        {isLoggedIn && <button type="button"> Logout </button>}
        {!isLoggedIn && <button type="button"> Login </button>}
      </div>
    )
  }
}

//By using Ternary Operator

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn?<button type="button"> Logout </button>:<button type="button"> Login </button>}
      </div>
    )
  }
}

//By using Elements Variables

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button"> Logout </button>
    } else {
      authButton = <button type="button">Login</button>
    }
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authButton}
      </div>
    )
  }
}

//By using If-else Statements

class App extends Component {
  state = {
    isLoggedIn: true,
  }
  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }
  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App

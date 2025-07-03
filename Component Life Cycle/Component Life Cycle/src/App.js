import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isActiveButton: false}

  toggleButtonStatus = () => {
    this.setState(prevState => ({isActiveButton: !prevState.isActiveButton}))
  }

  render() {
    const {isActiveButton} = this.state
    const buttonText = !isActiveButton ? 'Show Clock' : 'Hide Clock'
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleButtonStatus}
        >
          {buttonText}
        </button>
        {isActiveButton && <Clock />}
      </div>
    )
  }
}

export default App

// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isClicked: true, content: 'Light Mode'}

  changeMode = () => {
    const {isClicked} = this.state
    this.setState(prev => ({isClicked: !prev.isClicked}))
    // if (isClicked) {
    //   content = 'Dark Mode'
    // } else {
    //   content = 'Light Mode'
    // }
    // console.log(content)
  }

  changeText = () => {
    const {isClicked, content} = this.state
    return isClicked ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const {isClicked} = this.state
    const headingCSS = isClicked ? 'main-heading2' : 'main-heading1'
    const subBackgroundCSS = isClicked
      ? 'sub-bg-container-2'
      : 'sub-bg-container-1'
    return (
      <div className="main-bg-container">
        <div className={subBackgroundCSS}>
          <h1 className={headingCSS}>Click To Change Mode</h1>
          <button
            type="button"
            className="main-button"
            onClick={this.changeMode}
          >
            {this.changeText()}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

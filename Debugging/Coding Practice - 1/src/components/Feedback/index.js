// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isEmojiClicked} = this.state

    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          {isEmojiClicked ? (
            <div className="thank-you-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thank-you-heading">Thank You!</h1>
              <p className="thank-you-text">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <>
              <h1 className="main-heading">
                How satisfied are you with our
                <br />
                customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(eachItem => (
                  <li key={eachItem.id}>
                    <button
                      type="button"
                      className="emoji-button"
                      onClick={this.onClickEmoji}
                    >
                      <img
                        src={eachItem.imageUrl}
                        alt={eachItem.name}
                        className="emojis"
                      />
                    </button>
                    <p className="emoji-name">{eachItem.name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback

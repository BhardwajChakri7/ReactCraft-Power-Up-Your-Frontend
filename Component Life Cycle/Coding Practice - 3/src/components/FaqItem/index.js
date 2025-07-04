// // // Write your code here.
// import {Component} from 'react'

// import './index.css'

// class FaqItem extends Component {
//   state = {isButtonClicked: false}

//   buttonClicked = () => {
//     this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
//   }

//   render() {
//     const {isButtonClicked} = this.state
//     console.log(isButtonClicked)
//     const {eachFaq} = this.props
//     const {questionText, answerText} = eachFaq
//     const imgUrl = isButtonClicked
//       ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
//       : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
//     const altContent = isButtonClicked ? 'plus' : 'minus'
//     return (
//       <li className="listItem">
//         <div className="main-disp">
//           <h1>{questionText}</h1>
//           <button
//             type="button"
//             className="main-button"
//             onClick={this.buttonClicked}
//           >
//             <img src={imgUrl} alt={altContent} className="mini-img" />
//           </button>
//         </div>
//         <br />
//         {isButtonClicked && (
//           <div className="ans-container">
//             <hr className="seperating-line" />
//             <p>{answerText}</p>
//           </div>
//         )}
//       </li>
//     )
//   }
// }

// export default FaqItem
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isButtonClicked: false}

  buttonClicked = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {isButtonClicked} = this.state
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq

    const imgUrl = isButtonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altContent = isButtonClicked ? 'minus' : 'plus'

    return (
      <li className="listItem">
        <div className="main-disp">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="main-button"
            onClick={this.buttonClicked}
          >
            <img src={imgUrl} alt={altContent} className="mini-img" />
          </button>
        </div>
        {isButtonClicked && (
          <div className="ans-container">
            <hr className="seperating-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem

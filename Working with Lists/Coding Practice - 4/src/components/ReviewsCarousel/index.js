// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  decreseCountForId = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 1}
      }
      return null // no state update if already at 0
    })
  }

  increseCountForId = () => {
    const {reviewsList} = this.props
    this.setState(prevState => {
      if (prevState.count < reviewsList.length - 1) {
        return {count: prevState.count + 1}
      }
      return null // no state update if already at max
    })
  }
  // decreseCountForId = () => {
  //   const {count} = this.state
  //   if (count <= 0) {
  //     this.setState({count: 4})
  //   } else {
  //     this.setState(prevState => ({count: prevState.count - 1}))
  //   }
  // }

  // increseCountForId = () => {
  //   const {count} = this.state
  //   console.log(count)
  //   if (count > 3) {
  //     this.setState({count: 0})
  //   } else {
  //     this.setState(prevState => ({count: prevState.count + 1}))
  //   }
  // }

  render() {
    const {count} = this.state
    console.log(count)
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="sub-bg-container">
          <button
            type="button"
            className="arrow-buttons"
            onClick={this.decreseCountForId}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-imgs"
            />
          </button>
          <ul className="reviews-list">
            <li className="item-list">
              <img src={imgUrl} alt={username} />
              <p>{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </li>
          </ul>
          <button
            type="button"
            className="arrow-buttons"
            onClick={this.increseCountForId}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-imgs"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel

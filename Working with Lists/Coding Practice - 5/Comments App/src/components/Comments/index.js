import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onChangeNameContent = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentContent = event => {
    this.setState({comment: event.target.value})
  }

  addCommment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date().toISOString(),
    }
    console.log(newComment.date)
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
    this.setState({name: '', comment: ''})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(comment =>
        comment.id === id ? {...comment, isLiked: !comment.isLiked} : comment,
      ),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(comment => comment.id !== id),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <div>
            <h1 className="main-heading">Comments</h1>
            <p className="main-para">Say something about 4.0 Technologies</p>
            <form className="input-area" onSubmit={this.addCommment}>
              <input
                type="text"
                className="name-input-area"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeNameContent}
              />
              <textarea
                cols="25"
                rows="7"
                value={comment}
                className="comment-text-area"
                placeholder="Your Comment"
                onChange={this.onChangeCommentContent}
              ></textarea>
              <button type="submit" className="main-button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
          </div>
        </div>
        <div>
          <hr className="line-sperater" />
        </div>
        <div className="comments-container">
          <p className="comment-heading">
            <spam className="comments-count">{commentsList.length}</spam>{' '}
            Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                commentItem={eachItem}
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments

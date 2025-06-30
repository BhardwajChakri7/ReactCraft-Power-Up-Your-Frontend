// import {formatDistanceToNow} from 'date-fns'

// const CommentItem = props => {
//   const {commentItem} = props
//   const {name, comment, isLiked, date} = commentItem

//   const timeAgo = formatDistanceToNow(new Date(date))

//   return (
//     <div className="comment-item">
//       <h1>{name}</h1>
//       <p>{comment}</p>
//       <p>{isLiked ? 'Liked' : 'Not Liked'}</p>
//       <p>{timeAgo} ago</p>
//     </div>
//   )
// }

// export default CommentItem

import {formatDistanceToNow} from 'date-fns'
import './index.css' // Assuming you will add styles here

const CommentItem = props => {
  const {commentItem, toggleLike, deleteComment} = props
  const {id, name, comment, isLiked, date} = commentItem

  const timeAgo = formatDistanceToNow(new Date(date))

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClass = isLiked ? 'liked' : 'like-text'

  return (
    <li className="comment-item">
      <div>
        <div className="comment-header">
          <div className="avatar-container">
            <p className="avatar">{name[0].toUpperCase()}</p>
            <div>
              <h1 className="commenter-name">{name}</h1>
              <p className="comment-time">{timeAgo} ago</p>
            </div>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
        <div className="comment-actions">
          <button
            className="action-button"
            type="button"
            onClick={() => toggleLike(id)}
          >
            <img src={likeImgUrl} alt="like" className="like-icon" />
            <span className={likeTextClass}>Like</span>
          </button>
          <button
            className="action-button"
            type="button"
            onClick={() => deleteComment(id)}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr className="line-sperater1" />
    </li>
  )
}

export default CommentItem

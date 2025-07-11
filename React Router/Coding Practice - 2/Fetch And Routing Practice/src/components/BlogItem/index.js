// Write your JS code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {imageUrl, id, title, topic, avatarUrl, author} = blogData
    console.log(imageUrl)
    return (
      <Link to={`/blogs/${id}`} className="list-item">
        <div className="main-bg-container">
          <div className="content-container">
            <div>
              <img src={imageUrl} alt={title} className="mini-main-img" />
            </div>
            <div>
              <p className="main-para-1">{topic}</p>
              <h1 className="main-para-2">{title}</h1>
              <div className="profile-container">
                <img
                  src={avatarUrl}
                  alt={`image${id}`}
                  className="avatar-img"
                />
                <p className="main-para-3">{author}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default BlogItem

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {eachBlogData: {}, isLoading: true}

  componentDidMount() {
    this.geteachBlogData()
  }

  geteachBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({eachBlogData: updatedData, isLoading: false})
  }

  renderDetails = () => {
    const {eachBlogData} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = eachBlogData
    return (
      <div className="main-blogItem-container">
        <h1 className="main-blogItem-heading">{title}</h1>
        <div className="profile-img-name-container">
          <img src={avatarUrl} alt={`image${id}`} className="author-mini-img" />
          <p className="main-para-blogItem-1">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image-mini-img" />
        <p className="main-para-blogItem-2">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails

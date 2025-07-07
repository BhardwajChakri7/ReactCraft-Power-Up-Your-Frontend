// // Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <div>
      <div className="heading-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </div>
  )
}
export default BlogItem

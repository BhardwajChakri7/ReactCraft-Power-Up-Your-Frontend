import './index.css'

const ImageDisplay = props => {
  const {eachImage, checkIsMatched} = props
  const {id, thumbnailUrl, category} = eachImage
  const imageButtonClicked = () => {
    checkIsMatched(id)
  }
  return (
    <li className="images-container">
      <button type="button" onClick={imageButtonClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default ImageDisplay

// import './index.css'

// const ImageDisplay = props => {
//   const {eachImage, checkIsMatched} = props
//   const {id, thumbnailUrl} = eachImage

//   const onClickImage = () => {
//     checkIsMatched(id)
//   }

//   return (
//     <li className="thumbnail-item">
//       <button type="button" className="thumbnail-button" onClick={onClickImage}>
//         <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
//       </button>
//     </li>
//   )
// }

// export default ImageDisplay

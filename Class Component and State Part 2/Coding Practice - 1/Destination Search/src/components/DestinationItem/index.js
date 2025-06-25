// // Write your code here
// import './index.css'

// const DestinationItem = props => {
//   const {destinationList} = props
//   return (
//     <div>
//       <img src={imgUrl} className="main-img" alt="places" />
//       <p className="main-paragraph">{name}</p>
//     </div>
//   )
// }

// export default DestinationItem
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem

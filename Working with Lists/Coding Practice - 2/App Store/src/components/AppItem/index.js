import './index.css'

const AppItem = props => {
  const {eachApp, searchValue} = props
  const {appName, imageUrl} = eachApp
  return appName.toLowerCase().includes(searchValue.toLowerCase()) ? (
    <div>
      <li className="app-bg-container">
        <img src={imageUrl} alt={appName} className="mini-img" />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  ) : (
    ''
  )
}
export default AppItem
// import './index.css'

// const AppItem = props => {
//   const {eachApp, searchValue} = props
//   const {appName, imageUrl} = eachApp

//   const isMatch = appName.toLowerCase().includes(searchValue.toLowerCase())

//   if (!isMatch) return null

//   return (
//     <li className="app-bg-container">
//       <img src={imageUrl} alt={appName} className="mini-img" />
//       <p className="app-name">{appName}</p>
//     </li>
//   )
// }

// export default AppItem

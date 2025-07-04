import './index.css'

const YourPasswords = props => {
  const {eachPassword, isPasswordShowed, itemTobeDeleted} = props
  const {websiteUrl, username, password, id} = eachPassword
  const deleteItem = () => {
    itemTobeDeleted(id)
  }
  return (
    <li className="main-list-container">
      <div className="main-container">
        <div className="sub-container1">
          <h1 className="profile-pic" id="colorBox">
            {websiteUrl[0]}
          </h1>
        </div>
        <div className="sub-container2">
          <p className="webpage-url">{websiteUrl}</p>
          <p className="user-name">{username}</p>
          {isPasswordShowed ? (
            <p className="user-name">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-img"
            />
          )}
        </div>
        <div>
          <button
            type="button"
            className="delete-btn"
            onClick={deleteItem}
            data-testid={'delete'}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default YourPasswords

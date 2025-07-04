import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import YourPasswords from '../YourPasswords'

import './index.css'

class MainUiSection extends Component {
  state = {
    searchInput: '',
    websiteUrl: '',
    username: '',
    password: '',
    passwordList: [],
    isPasswordShowed: false,
  }

  itemTobeDeleted = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachPassword => eachPassword.id !== id,
      ),
    }))
  }

  addPassWordDetails = event => {
    event.preventDefault()
    const {websiteUrl, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      websiteUrl,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      username: '',
      websiteUrl: '',
      password: '',
    }))
  }

  changeShowPasswordState = () => {
    this.setState(prevState => ({
      isPasswordShowed: !prevState.isPasswordShowed,
    }))
  }

  updateWebpageUrl = event => {
    this.setState({websiteUrl: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatepassword = event => {
    this.setState({password: event.target.value})
  }

  userSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      websiteUrl,
      username,
      password,
      passwordList,
      isPasswordShowed,
      searchInput,
    } = this.state
    const filteredList = passwordList.filter(each =>
      each.websiteUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-img"
        />
        <div className="add-password-container">
          <div className="form-container">
            <h1 className="main-heading">Add New Password</h1>
            <form onSubmit={this.addPassWordDetails}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-box"
                  value={websiteUrl}
                  onChange={this.updateWebpageUrl}
                />
              </div>
              <br />
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-box"
                  value={username}
                  onChange={this.updateUsername}
                />
              </div>
              <br />
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
                <input
                  type="password"
                  className="input-box"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.updatepassword}
                />
              </div>
              <br />
              <div className="add-btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
        </div>
        <br />
        <div className="your-password-container">
          <div className="your-password-heading-container">
            <h1 className="your-password-heading">Your Passwords</h1>
            <p>{filteredList.length}</p>
            <div className="search-container1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icon1"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input1"
                onChange={this.userSearchInput}
              />
            </div>
          </div>
          <hr className="seperation-line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="password"
              className="checkbox-element"
              onClick={this.changeShowPasswordState}
            />
            <label htmlFor="password" className="checkbox-para">
              Show Passwords
            </label>
          </div>
          {filteredList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="no-password-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="unordered-list">
              {filteredList.map(eachPassword => (
                <YourPasswords
                  key={eachPassword.id}
                  eachPassword={eachPassword}
                  isPasswordShowed={isPasswordShowed}
                  itemTobeDeleted={this.itemTobeDeleted}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default MainUiSection

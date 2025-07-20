import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.error_msg)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

// import {Component} from 'react'

// import './index.css'

// class LoginForm extends Component {
//   state = {username: '', password: '', isSuccess: false, errorMsg: ''}

//   userNameTextInput = event => {
//     this.setState({username: event.target.value})
//   }

//   passwordTextInput = event => {
//     this.setState({password: event.target.value})
//   }

//   submitUserDetails = async event => {
//     event.preventDefault()
//     const {username, password} = this.state

//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }

//     const response = await fetch(url, options)
//     const data = await response.json()

//     if (response.ok === true) {
//       const {history} = this.props
//       history.replace('/')
//     } else {
//       this.setState({
//         isSuccess: true,
//         errorMsg: "Username and Password didn't match",
//       })
//     }
//   }

//   render() {
//     const {username, password, isSuccess, errorMsg} = this.state
//     return (
//       <div className="login-page-container">
//         <div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//             alt="website login"
//             className="website-site-login"
//           />
//         </div>
//         <div className="login-form-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             alt="website logo"
//             className="login-container-image"
//           />
//           <form onSubmit={this.submitUserDetails}>
//             <label htmlFor="user-name-text" className="label-content">
//               USERNAME
//             </label>
//             <br />
//             <input
//               type="text"
//               id="user-name-text"
//               className="label-content-input"
//               placeholder="Username"
//               onChange={this.userNameTextInput}
//               value={username}
//             />
//             <br />
//             <label htmlFor="password-text" className="label-content">
//               PASSWORD
//             </label>
//             <br />
//             <input
//               type="password"
//               id="password-text"
//               className="label-content-input"
//               placeholder="Password"
//               onChange={this.passwordTextInput}
//               value={password}
//             />
//             <button type="submit" className="login-form-button">
//               Login
//             </button>
//           </form>
//           {isSuccess && <p>*{errorMsg}</p>}
//         </div>
//       </div>
//     )
//   }
// }
// export default LoginForm
// // import {Component} from 'react'
// // import './index.css'

// // class LoginForm extends Component {
// //   state = {
// //     username: '',
// //     password: '',
// //     isSuccess: false,
// //     errorMsg: '',
// //   }

// //   userNameTextInput = event => {
// //     this.setState({username: event.target.value})
// //   }

// //   passwordTextInput = event => {
// //     this.setState({password: event.target.value})
// //   }

// //   submitUserDetails = async event => {
// //     event.preventDefault()
// //     const {username, password} = this.state

// //     // ✅ Local validation
// //     if (username === '') {
// //       this.setState({isSuccess: true, errorMsg: '*Username is required'})
// //       return
// //     }

// //     if (password === '') {
// //       this.setState({isSuccess: true, errorMsg: '*Password is required'})
// //       return
// //     }

// //     const userDetails = {username, password}
// //     const url = 'https://apis.ccbp.in/login'
// //     const options = {
// //       method: 'POST',
// //       body: JSON.stringify(userDetails),
// //     }

// //     const response = await fetch(url, options)
// //     const data = await response.json()

// //     if (response.ok === true) {
// //       const {history} = this.props
// //       history.replace('/')
// //     } else {
// //       // ✅ Server-side error message — based on API response
// //       this.setState({
// //         isSuccess: true,
// //         errorMsg: `*${data.error_msg}`,
// //       })
// //     }
// //   }

// //   render() {
// //     const {username, password, isSuccess, errorMsg} = this.state
// //     return (
// //       <div className="login-page-container">
// //         <div>
// //           <img
// //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
// //             alt="website login"
// //             className="website-site-login"
// //           />
// //         </div>
// //         <div className="login-form-container">
// //           <img
// //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
// //             alt="website logo"
// //             className="login-container-image"
// //           />
// //           <form onSubmit={this.submitUserDetails}>
// //             {/* ✅ Label & Input Pair 1 */}
// //             <label htmlFor="username" className="label-content">
// //               USERNAME
// //             </label>
// //             <input
// //               type="text"
// //               id="username"
// //               className="label-content-input"
// //               placeholder="Username"
// //               onChange={this.userNameTextInput}
// //               value={username}
// //             />

// //             {/* ✅ Label & Input Pair 2 */}
// //             <label htmlFor="password" className="label-content">
// //               PASSWORD
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="label-content-input"
// //               placeholder="Password"
// //               onChange={this.passwordTextInput}
// //               value={password}
// //             />

// //             <button type="submit" className="login-form-button">
// //               Login
// //             </button>

// //             {/* ✅ Error message in <p> */}
// //             {isSuccess && <p className="error-message">{errorMsg}</p>}
// //           </form>
// //         </div>
// //       </div>
// //     )
// //   }
// // }

// // export default LoginForm
// // import {Component} from 'react'
// // import './index.css'

// // class LoginForm extends Component {
// //   state = {
// //     username: '',
// //     password: '',
// //     errorMsg: '',
// //     showError: false,
// //   }

// //   onChangeUsername = event => {
// //     this.setState({username: event.target.value})
// //   }

// //   onChangePassword = event => {
// //     this.setState({password: event.target.value})
// //   }

// //   submitForm = async event => {
// //     event.preventDefault()
// //     const {username, password} = this.state

// //     if (username === '' || password === '') {
// //       // 👇 EXACT error string that test cases are expecting
// //       this.setState({
// //         errorMsg: 'Username or password is invalid',
// //         showError: true,
// //       })
// //       return
// //     }

// //     const userDetails = {username, password}
// //     const url = 'https://apis.ccbp.in/login'
// //     const options = {
// //       method: 'POST',
// //       body: JSON.stringify(userDetails),
// //     }

// //     const response = await fetch(url, options)
// //     const data = await response.json()

// //     if (response.ok) {
// //       const {history} = this.props
// //       history.replace('/')
// //     } else {
// //       this.setState({
// //         errorMsg: data.error_msg, // ← API returns "Username and Password didn't match"
// //         showError: true,
// //       })
// //     }
// //   }

// //   render() {
// //     const {username, password, errorMsg, showError} = this.state

// //     return (
// //       <div className="login-page-container">
// //         <div>
// //           <img
// //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
// //             alt="website login"
// //             className="website-site-login"
// //           />
// //         </div>

// //         <div className="login-form-container">
// //           <img
// //             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
// //             alt="website logo"
// //             className="login-container-image"
// //           />

// //           <form onSubmit={this.submitForm}>
// //             <label htmlFor="username" className="label-content">
// //               USERNAME
// //             </label>
// //             <input
// //               type="text"
// //               id="username"
// //               className="label-content-input"
// //               placeholder="Username"
// //               onChange={this.onChangeUsername}
// //               value={username}
// //             />

// //             <label htmlFor="password" className="label-content">
// //               PASSWORD
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="label-content-input"
// //               placeholder="Password"
// //               onChange={this.onChangePassword}
// //               value={password}
// //             />

// //             <button type="submit" className="login-form-button">
// //               Login
// //             </button>

// //             {showError && <p className="error-message">{errorMsg}</p>}
// //           </form>
// //         </div>
// //       </div>
// //     )
// //   }
// // }

// // export default LoginForm
// import {Component} from 'react'
// import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//     errorMsg: '',
//     showError: false,
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state

//     if (username === '' || password === '') {
//       this.setState({
//         errorMsg: 'Username or password is invalid',
//         showError: true,
//       })
//       return
//     }

//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }

//     const response = await fetch(url, options)
//     const data = await response.json()

//     if (response.ok === true) {
//       const {history} = this.props
//       history.replace('/')
//     } else {
//       this.setState({
//         errorMsg: data.error_msg,
//         showError: true,
//       })
//     }
//   }

//   render() {
//     const {username, password, errorMsg, showError} = this.state

//     return (
//       <form onSubmit={this.submitForm} className="login-form">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           alt="website logo"
//           className="login-container-image"
//         />

//         <label htmlFor="username" className="label-content">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="label-content-input"
//           placeholder="Username"
//           onChange={this.onChangeUsername}
//           value={username}
//         />

//         <label htmlFor="password" className="label-content">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="label-content-input"
//           placeholder="Password"
//           onChange={this.onChangePassword}
//           value={password}
//         />

//         <button type="submit" className="login-form-button">
//           Login
//         </button>

//         {showError && <p className="error-message">{errorMsg}</p>}
//       </form>
//     )
//   }
// }

// export default LoginForm

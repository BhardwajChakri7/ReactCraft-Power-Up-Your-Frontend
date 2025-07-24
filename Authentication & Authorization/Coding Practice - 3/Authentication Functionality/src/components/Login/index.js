// import {Redirect, withRouter} from 'react-router-dom'
// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import './index.css'

// class Login extends Component {
//   loginButtonClicked = () => {
//     const {history} = this.props
//     Cookies.set(
//       'jwt_token',
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwiaWF0IjoxNjE5MDk0MjQxfQ.1i6BbQkQvtvpv72lHPNbl2JOZIB03uRcPbchYYCkL9o',
//       {expires: 30},
//     )
//     history.replace('/')
//   }

//   render() {
//     if (Cookies.get('jwt_token') !== undefined) {
//       return <Redirect to="/" />
//     }
//     return (
//       <div className="main-bg-container">
//         <h1 className="login-heading">Please Login</h1>
//         <button type="button" onClick={this.loginButtonClicked}>
//           Login with Sample Creds
//         </button>
//       </div>
//     )
//   }
// }
// export default withRouter(Login)
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setCookiesAndNavigateToHome = token => {
    const {history} = props

    Cookies.set('jwt_token', token, {
      expires: 30,
    })
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setCookiesAndNavigateToHome(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)

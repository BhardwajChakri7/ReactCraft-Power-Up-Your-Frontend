import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="unordered-container">
      <li className="nav-links">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-links">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)
export default withRouter(Header)

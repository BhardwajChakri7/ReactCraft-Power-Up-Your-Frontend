import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="web-page-logo"
      />
    </div>
    <div>
      <ul className="nav-unordered-list">
        <li className="nav-contents">Home</li>
        <li className="nav-contents">Products</li>
        <li className="nav-contents">Cart</li>
        <button type="button" className="nav-button">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)
export default Header

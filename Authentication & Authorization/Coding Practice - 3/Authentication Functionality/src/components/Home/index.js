import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="main-bg-contianer">
    <Header />
    <div className="sub-bg-contianer">
      <h1 className="home-heading">Home Route</h1>
    </div>
    <LogoutButton />
  </div>
)
export default Home

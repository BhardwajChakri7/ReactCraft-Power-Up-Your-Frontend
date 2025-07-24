import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => (
  <div className="main-bg-contianer">
    <Header />
    <div>
      <h1 className="about-heading">About Route</h1>
    </div>
    <LogoutButton />
  </div>
)
export default About

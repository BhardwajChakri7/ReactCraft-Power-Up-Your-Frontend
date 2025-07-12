import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home

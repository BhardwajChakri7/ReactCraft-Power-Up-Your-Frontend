import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="main-bg-container">
      <div>
        <h1 className="main-heading">
          Clothes That Get
          <br /> YOU Noticed
        </h1>
        <p className="main-para">
          Fashion is part of the daily air and it does not
          <br />
          quite help that it changes all the time. Clothes
          <br />
          have always been a marker of the era and we
          <br />
          are in a revolution. Your fashion makes you
          <br />
          been seen and heard that way you are. So,
          <br />
          celebrate the seasons new and exciting
          <br />
          fashion in your own way.
        </p>
        <button type="button" className="main-button">
          Shop Now
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="main-image"
        />
      </div>
    </div>
  </>
)
export default Home

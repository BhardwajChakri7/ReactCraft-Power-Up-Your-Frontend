import {Component} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {inputSearch: '', historyList: initialHistoryList}

  onClickSearchInput = event => {
    console.log(event.target.value)
    this.setState({inputSearch: event.target.value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filteredData = historyList.filter(eachEle => eachEle.id !== id)
    this.setState({historyList: filteredData})
  }

  render() {
    const {inputSearch, historyList} = this.state
    const filteredData = historyList.filter(each =>
      each.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <div className="main-bg-conatainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="main-img"
        />
        <div className="search-conatainer">
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search History"
            className="input-box-element"
            onChange={this.onClickSearchInput}
            value={inputSearch}
          />
        </div>
        <ul className="sub-bg-conatainer">
          {filteredData.length < 1 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            filteredData.map(eachEle => (
              <li className="list-conatainer" key={eachEle.id}>
                <p className="list-time">{eachEle.timeAccessed}</p>
                <img
                  src={eachEle.logoUrl}
                  alt="domain logo"
                  className="logo-img"
                />
                <p className="list-name">{eachEle.title}</p>
                <p className="list-link">{eachEle.domainUrl}</p>
                <div className="button-conatainer">
                  <button
                    type="button"
                    className="list-button"
                    data-testid="delete"
                    key={eachEle.id}
                    onClick={() => this.deleteItem(eachEle.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory

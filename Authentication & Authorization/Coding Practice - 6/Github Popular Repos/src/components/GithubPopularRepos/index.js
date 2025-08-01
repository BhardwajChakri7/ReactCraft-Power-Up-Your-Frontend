import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {onActiveTabId: languageFiltersData[0].id}

  updateOnActiveTabId = id => {
    this.setState({onActiveTabId: id})
  }

  render() {
    const {onActiveTabId} = this.state
    return (
      <div className="main-bg-container">
        <h1 className="the-main-page-heading">Popular</h1>
        <ul className="unordered-list-navs">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              key={eachItem.id}
              onActiveTabId={onActiveTabId}
              eachNav={eachItem}
              updateOnActiveTabId={this.updateOnActiveTabId}
            />
          ))}
        </ul>
        <div className="main-items-container">
          <RepositoryItem onActiveTabId={onActiveTabId} />
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos

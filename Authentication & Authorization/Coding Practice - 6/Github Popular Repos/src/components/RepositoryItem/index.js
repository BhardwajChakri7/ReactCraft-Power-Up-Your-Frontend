// import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import './index.css'

// class RepositoryItem extends Component {
//   state = {apiStatus: 'ALL', reposList: [], isLoading: true}

//   getRepos = async () => {
//     const {onActiveTabId} = this.props
//     const response = await fetch(
//       `https://apis.ccbp.in/popular-repos?language=${onActiveTabId}`,
//     )
//     console.log(onActiveTabId)
//     const fetchedData = await response.json()
//     const data = fetchedData.popular_repos.map(eachRepo => ({
//       avatarUrl: eachRepo.avatar_url,
//       forksCount: eachRepo.forks_count,
//       id: eachRepo.id,
//       issuesCount: eachRepo.issues_count,
//       name: eachRepo.name,
//       starsCount: eachRepo.stars_count,
//     }))
//     this.setState({reposList: data, isLoading: false})
//   }

//   renderLoadingView = () => {
//     console.log('isLoading')
//     return (
//       <div className="products-loader-container">
//         <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
//       </div>
//     )
//   }

//   renderAllProducts = () => {
//     console.log('all products')
//     const {reposList} = this.state
//     return reposList.map(eachRepo => {
//       const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachRepo
//       return (
//         <div className="card-item-container">
//           <img src={avatarUrl} alt="repo" className="avatars-img" />
//           <p className="card-name">{name}</p>
//           <div className="main-sub-container">
//             <div className="sub-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
//                 alt="stars"
//                 className="stars-img"
//               />
//               <p>{starsCount} stars</p>
//             </div>
//             <div className="sub-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
//                 alt="forks"
//                 className="stars-img"
//               />
//               <p>{forksCount} forks</p>
//             </div>
//             <div className="sub-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
//                 alt="open issues"
//                 className="stars-img"
//               />
//               <p>{issuesCount} open issues</p>
//             </div>
//           </div>
//         </div>
//       )
//     })
//   }

//   render() {
//     const {apiStatus} = this.state
//     this.getRepos()
//     switch (apiStatus) {
//       case 'INPROGRESS':
//         return this.renderLoadingView()
//       case 'ALL':
//         return <div>{this.renderAllProducts()}</div>
//       default:
//         return null
//     }
//   }
// }

// export default RepositoryItem
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class RepositoryItem extends Component {
  state = {apiStatus: apiStatusConstants.initial, reposList: []}

  componentDidMount() {
    this.getRepos()
  }

  componentDidUpdate(prevProps) {
    // Fetch new data when active tab changes
    if (prevProps.onActiveTabId !== this.props.onActiveTabId) {
      this.getRepos()
    }
  }

  getRepos = async () => {
    const {onActiveTabId} = this.props
    this.setState({apiStatus: apiStatusConstants.inProgress})

    try {
      const response = await fetch(
        `https://apis.ccbp.in/popular-repos?language=${onActiveTabId}`,
      )

      if (response.ok) {
        const fetchedData = await response.json()
        const data = fetchedData.popular_repos.map(eachRepo => ({
          avatarUrl: eachRepo.avatar_url,
          forksCount: eachRepo.forks_count,
          id: eachRepo.id,
          issuesCount: eachRepo.issues_count,
          name: eachRepo.name,
          starsCount: eachRepo.stars_count,
        }))
        this.setState({
          reposList: data,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const {reposList} = this.state
    return (
      <div className="repo-list">
        {reposList.map(eachRepo => {
          const {name, id, issuesCount, forksCount, starsCount, avatarUrl} =
            eachRepo
          return (
            <div className="card-item-container" key={id}>
              <img src={avatarUrl} alt={name} className="avatars-img" />
              <h1 className="card-name">{name}</h1>
              <div className="main-sub-container">
                <div className="sub-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
                    alt="stars"
                    className="stars-img"
                  />
                  <p>{starsCount} stars</p>
                </div>
                <div className="sub-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
                    alt="forks"
                    className="stars-img"
                  />
                  <p>{forksCount} forks</p>
                </div>
                <div className="sub-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
                    alt="open issues"
                    className="stars-img"
                  />
                  <p>{issuesCount} open issues</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  renderFailureView = () => (
    <div className="error-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <p>Something went wrong</p>
    </div>
  )

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderAllProducts()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <div className="repository-container">{this.renderContent()}</div>
  }
}

export default RepositoryItem

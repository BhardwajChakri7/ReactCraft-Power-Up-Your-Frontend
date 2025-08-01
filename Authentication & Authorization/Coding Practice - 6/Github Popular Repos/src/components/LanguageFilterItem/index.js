import './index.css'

const LanguageFilterItem = props => {
  const {eachNav, onActiveTabId, updateOnActiveTabId} = props
  const {id, language} = eachNav
  const buttonStatus =
    onActiveTabId === id ? 'each-nav-selected-heading' : 'each-nav-heading'
  const headingButtonClicked = () => {
    updateOnActiveTabId(id)
  }
  return (
    <li className="main-list-item">
      <button
        type="button"
        onClick={headingButtonClicked}
        className="main-nav-button"
      >
        <h1 className={`${buttonStatus}`}>{language}</h1>
      </button>
    </li>
  )
}
export default LanguageFilterItem

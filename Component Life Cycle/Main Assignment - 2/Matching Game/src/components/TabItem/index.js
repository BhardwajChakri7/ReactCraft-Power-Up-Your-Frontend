import './index.css'

const TabItem = props => {
  const {eachTab, clickTabItem, isActive} = props
  const {tabId, displayText} = eachTab
  const buttonClicked = () => {
    clickTabItem(tabId)
  }
  const isActiveButton = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${isActiveButton}`}
        onClick={buttonClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

import './index.css'

const TabItem = props => {
  const {tabDetails, updateStatus, isActive} = props
  const {displayText, tabId} = tabDetails
  const buttonClassName = isActive ? 'active-tab-btn' : ''
  const updateClickStatus = () => {
    updateStatus(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${buttonClassName}`}
        onClick={updateClickStatus}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

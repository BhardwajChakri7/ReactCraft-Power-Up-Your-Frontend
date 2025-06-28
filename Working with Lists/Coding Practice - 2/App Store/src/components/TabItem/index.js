// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, currentTab, isActice} = props
  const {displayText, tabId} = eachItem
  const toGetClickedItem = () => {
    currentTab(tabId)
  }
  console.log(isActice)
  const mainTabBtn = isActice ? 'main-tab-btn' : ''
  return (
    <li>
      <button
        className={`main-button ${mainTabBtn}`}
        type="button"
        onClick={toGetClickedItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

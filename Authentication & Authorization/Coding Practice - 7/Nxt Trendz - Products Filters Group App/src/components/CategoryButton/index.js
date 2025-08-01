import './index.css'

const CategoryButton = props => {
  const {eachCat, categoryButtonClicked, isActive} = props
  const {categoryId, name} = eachCat
  const onClickCategoryButton = () => {
    categoryButtonClicked(categoryId)
  }
  const buttonStatus = isActive
    ? 'category-button-clicked-yes'
    : 'category-button'
  return (
    <button
      key={eachCat.categoryId}
      type="button"
      className={buttonStatus}
      onClick={onClickCategoryButton}
    >
      <p>{name}</p>
    </button>
  )
}
export default CategoryButton

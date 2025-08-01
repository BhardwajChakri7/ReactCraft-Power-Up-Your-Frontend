import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    apiStatus: 'INITIAL',
    productsList: [],
    activeOptionId: sortbyOptions[0].optionId,
    searchInput: '',
    categorySelected: '',
    ratingSelected: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: 'INPROGRESS',
    })
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId, categorySelected, ratingSelected, searchInput} =
      this.state

    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${categorySelected}&title_search=${searchInput}&rating=${ratingSelected}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: 'SUCCESS',
      })
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  onChangeINputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state

    // TODO: Add No Products View
    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickedRating = ratingId => {
    this.setState({ratingSelected: ratingId}, this.getProducts)
  }

  onClickedCatogory = categoryId => {
    this.setState({categorySelected: categoryId}, this.getProducts)
  }

  onClickedReset = () => {
    this.setState(
      {
        categorySelected: '', // ✅ resets the applied category filter
        ratingSelected: '', // ✅ resets the applied rating filter
        searchInput: '', // ✅ resets the search
        activeOptionId: sortbyOptions[0].optionId, // ✅ resets sort
      },
      this.getProducts, // ✅ re-fetch only after state resets
    )
  }

  // TODO: Add failure view

  renderFailureView = () => (
    <div className="products-failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderNoProductsView = () => (
    <div className="no-products-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        alt="no products"
      />
      <h1>No Products Found</h1>
      <p>We could not find any products. Try other filters.</p>
    </div>
  )

  onKeyDownSearch = event => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value
      this.setState({searchInput: inputValue}, this.getProducts)
    }
  }

  render() {
    const {
      isLoading,
      searchInput,
      categorySelected,
      ratingSelected,
      productsList,
      apiStatus,
    } = this.state

    let renderOutput

    if (productsList.length === 0 && apiStatus === 'SUCCESS') {
      renderOutput = this.renderNoProductsView()
    } else {
      switch (apiStatus) {
        case 'FAILURE':
          renderOutput = this.renderFailureView()
          break
        case 'SUCCESS':
          renderOutput = this.renderProductsList()
          break
        case 'INPROGRESS':
          renderOutput = this.renderLoader()
          break
        default:
          renderOutput = null
      }
    }

    return (
      <div className="all-products-section">
        <div>
          <div className="search-container">
            <input
              type="search"
              className="main-search-input-element"
              onKeyDown={this.onKeyDownSearch}
              value={searchInput}
              placeholder="Search"
              onChange={this.onChangeINputSearch}
            />
            <button type="button" onClick={this.getProducts}>
              <BsSearch className="search-input-element-img" />
            </button>
          </div>

          <FiltersGroup
            categoryOptions={categoryOptions}
            ratingsList={ratingsList}
            onClickedCatogory={this.onClickedCatogory}
            onClickedRating={this.onClickedRating}
            onClickedReset={this.onClickedReset}
          />
        </div>

        {renderOutput}
      </div>
    )
  }
}

export default AllProductsSection

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ProductCard from '../ProductCard'
import './index.css'

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getProductsList()
  }

  getProductsList = async () => {
    const url = 'https://apis.ccbp.in/products'
    const options = {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const backendData = await response.json()
      const frontendData = backendData.products.map(eachItem => ({
        brand: eachItem.brand,
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        price: eachItem.price,
        rating: eachItem.rating,
        title: eachItem.title,
      }))
      this.setState({productsList: frontendData, isLoading: false})
    }
  }

  renderProductsList = () => {
    const {productsList} = this.state
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="loader-section">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>{this.renderProductsList()}</div>
        )}
      </>
    )
  }
}

export default AllProductsSection

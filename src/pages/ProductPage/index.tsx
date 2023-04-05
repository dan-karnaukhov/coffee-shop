import { useParams } from 'react-router-dom'

import Container from '../../components/Container'
import ProductPageCard from '../../components/ProductPageCard'
import ProductPageDescription from '../../components/ProductPageDescription'
import products from '../../data/products'

import './style.scss'

const ProductPage: React.FC = () => {
  const { id } = useParams()
  const product = products.filter((product) => product.id === Number(id))[0]

  return (
    <div className='product-page'>
      <Container className='product-page__container' small>
        <ProductPageCard product={product} />
        <ProductPageDescription description={product.description} />
      </Container>
    </div>
  )
}

export default ProductPage

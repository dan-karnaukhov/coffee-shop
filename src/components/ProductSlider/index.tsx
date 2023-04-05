import Slider from 'react-slick'

import { CartItem } from '../../App'
import { IProduct } from '../../data/products'
import Container from '../Container'
import ProductCard from '../ProductCard'
import SectionTitle from '../SectionTitle'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './style.scss'

type ProductSliderProps = {
  products: IProduct[]
  cartItems: CartItem[]
  onAddToCart: (productId: number) => void
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  cartItems,
  onAddToCart,
}) => {
  const settings = {
    speed: 1500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <section className='product-slider'>
      <Container className='product-slider__container'>
        <SectionTitle title='Хиты продаж' />
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={
                cartItems.find((item) => item.productId === product.id)
                  ? true
                  : false
              }
              onAddToCart={() => onAddToCart(product.id)}
            />
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default ProductSlider

import { Link } from 'react-router-dom'

import { IProduct } from '../../data/products'
import AddToCartButton from '../AddToCartButton'
import Counter from '../Counter'

import './style.scss'

type ProductCardProps = {
  product: IProduct
  inCart: boolean
  onAddToCart: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  inCart,
  onAddToCart,
}) => {
  const { id, name, region, weight, price, discount } = product

  const convertWeight = (weight: number): string => {
    if (weight === 1000) return '1 кг'
    return `${weight} г`
  }

  const discountPrice = Math.floor(price - price * (discount / 100))

  return (
    <div className='product-card'>
      <img
        className='product-card__image'
        src='/product-images/product.jpg'
        alt='Изображение товара'
      />
      <div className='product-card__body'>
        <Link className='product-card__name' to={`/catalog/${id}`}>
          {name}
        </Link>
        <div className='product-card__info'>
          {region}, {convertWeight(weight)}
        </div>
        <div className='product-card__prices'>
          <div className='product-card__price'>{discountPrice} ₽</div>
          {discount > 0 ? (
            <div className='product-card__old-price'>{price} ₽</div>
          ) : null}
        </div>
        <AddToCartButton
          className='product-card__button'
          inCart={inCart}
          onClick={onAddToCart}
        />
      </div>
    </div>
  )
}

export default ProductCard

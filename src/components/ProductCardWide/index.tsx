import { Link } from 'react-router-dom'

import { IProduct } from '../../data/products'
import Counter from '../Counter'

import './style.scss'

type ProductCardWideProps = {
  product: IProduct
  count: number
  onDeleteItem: (productId: number) => void
  changeCount: (productId: number, type: 'inc' | 'dec') => void
}

const ProductCardWide: React.FC<ProductCardWideProps> = ({
  product,
  count,
  onDeleteItem,
  changeCount,
}) => {
  const { id, name, region, weight, price, discount } = product

  const convertWeight = (weight: number): string => {
    if (weight === 1000) return '1 кг'
    return `${weight} г`
  }

  const discountPrice = Math.floor(price - price * (discount / 100))

  return (
    <div className='product-card-wide'>
      <img
        className='product-card-wide__image'
        src='/product-images/product.jpg'
        alt='Изображение товара'
      />
      <div className='product-card-wide__body'>
        <div className='product-card-wide__row'>
          <Link className='product-card-wide__name' to='/product'>
            {name}
          </Link>
          <span className='product-card-wide__price'>{discountPrice * count} ₽</span>
        </div>
        <div className='product-card-wide__row'>
          <span className='product-card-wide__info'>
            {region}, {convertWeight(weight)}
          </span>
          <span className='product-card-wide__amount'>
            {count} шт. × {discountPrice} ₽
          </span>
        </div>
        <div className='product-card-wide__row'>
          <Counter
            count={count}
            onIncrement={() => changeCount(id, 'inc')}
            onDecrement={() => changeCount(id, 'dec')}
          />
          <span
            className='product-card-wide__delete'
            onClick={() => onDeleteItem(id)}
          >
            Удалить
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCardWide

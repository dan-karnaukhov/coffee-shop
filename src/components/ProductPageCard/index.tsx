import { IProduct } from '../../data/products'
import AddToCartButton from '../AddToCartButton'
import SectionTitle from '../SectionTitle'

import './style.scss'

type ProductPageCardProps = {
  product: IProduct
}

const ProductPageCard: React.FC<ProductPageCardProps> = ({ product }) => {
  const { name, region, roasting, weight, price } = product

  const convertWeight = (weight: number): string => {
    if (weight === 1000) return '1 кг'
    return `${weight} г`
  }

  return (
    <div className='product-page-card'>
      <img
        className='product-page-card__image'
        src='/product-images/product.jpg'
        alt='Изображение товара'
      />
      <div className='product-page-card__body'>
        <SectionTitle title={name} />
        <div className='product-page-card__info'>
          <div>
            <span>Регион:&nbsp;</span>
            <span>&nbsp;{region}</span>
          </div>
          <div>
            <span>Степень обжарки:&nbsp;</span>
            <span>&nbsp;{roasting}</span>
          </div>
          <div>
            <span>Вес:&nbsp;</span>
            <span>&nbsp;{convertWeight(weight)}</span>
          </div>
        </div>
        <div className='product-page-card__body-bottom'>
          <div className='product-page-card__price'>{price} ₽</div>
          <AddToCartButton className='product-page-card_button' />
        </div>
      </div>
    </div>
  )
}

export default ProductPageCard

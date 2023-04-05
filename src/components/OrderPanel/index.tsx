import classNames from 'classnames'

import { CartItem } from '../../App'
import { IProduct } from '../../data/products'
import Button from '../Button'
import TrashIcon from '../icons/TrashIcon'

import './style.scss'

type OrderPanelProps = {
  items: CartItem[]
  products: IProduct[]
  count: number
  onDeleteAllItems: () => void
  className?: string
}

const OrderPanel: React.FC<OrderPanelProps> = ({
  count,
  items,
  products,
  onDeleteAllItems,
  className,
}) => {
  const totalSum = items.reduce((sum, current) => {
    const product = products.filter(
      (product) => product.id === current.productId
    )[0]
    return sum + current.count * product.price
  }, 0)

  const withDiscountSum = items.reduce((sum, current) => {
    const product = products.filter(
      (product) => product.id === current.productId
    )[0]
    return (
      sum +
      current.count *
        Math.floor(product.price - product.price * (product.discount / 100))
    )
  }, 0)

  const words = ['товар', 'товара', 'товаров']

  const numWord = (value: number, words: string[]) => {
    value = Math.abs(value) % 100
    const num = value % 10
    if (value > 10 && value < 20) return words[2]
    if (num > 1 && num < 5) return words[1]
    if (num === 1) return words[0]
    return words[2]
  }

  return (
    <div className={classNames('order-panel', className)}>
      <div className='order-panel__sum'>
        <div>
          <span>
            {count} {numWord(count, words)} на сумму&nbsp;
          </span>
          <span>&nbsp;{totalSum} ₽</span>
        </div>
        <div>
          <span>Скидка&nbsp;</span>
          <span>&nbsp;{totalSum - withDiscountSum} ₽</span>
        </div>
        <div>
          <span>ИТОГО&nbsp;</span>
          <span>&nbsp;{withDiscountSum} ₽</span>
        </div>
      </div>
      <div className='order-panel__actions'>
        <Button className='order-panel__button'>Оформить заказ</Button>
        <span className='order-panel__delete' onClick={onDeleteAllItems}>
          <TrashIcon />
          Очистить корзину
        </span>
      </div>
    </div>
  )
}

export default OrderPanel

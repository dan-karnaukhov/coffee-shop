import { CartItem } from '../../App'
import { IProduct } from '../../data/products'
import ProductCardWide from '../ProductCardWide'

import './style.scss'

type CartListProps = {
  products: IProduct[]
  items: CartItem[]
  onDeleteItem: (productId: number) => void
  changeCount: (productId: number, type: 'inc' | 'dec') => void
}

const CartList: React.FC<CartListProps> = ({
  products,
  items,
  onDeleteItem,
  changeCount,
}) => {
  return (
    <div className='cart-list'>
      {items.map((item) => {
        const product = products.filter(
          (product) => product.id === item.productId
        )[0]
        return (
          <ProductCardWide
            key={product.id}
            product={product}
            count={item.count}
            changeCount={changeCount}
            onDeleteItem={onDeleteItem}
          />
        )
      })}
    </div>
  )
}

export default CartList

import { CartItem } from '../../App'
import CartList from '../../components/CartList'
import CartNotFound from '../../components/CartNotFound'
import Container from '../../components/Container'
import OrderPanel from '../../components/OrderPanel'
import PageTitle from '../../components/PageTitle'
import { IProduct } from '../../data/products'

import './style.scss'

type CartPageProps = {
  products: IProduct[]
  items: CartItem[]
  cartItemsCount: number
  onDeleteItem: (productId: number) => void
  onDeleteAllItems: () => void
  changeCount: (productId: number, type: 'inc' | 'dec') => void
}

const CartPage: React.FC<CartPageProps> = ({
  products,
  items,
  cartItemsCount,
  onDeleteItem,
  onDeleteAllItems,
  changeCount,
}) => {
  return (
    <div className='cart-page'>
      <Container small>
        <PageTitle title='Корзина' count={cartItemsCount} />
        {items.length !== 0 ? (
          <>
            <OrderPanel
              className='cart-page__order-panel'
              items={items}
              products={products}
              count={cartItemsCount}
              onDeleteAllItems={onDeleteAllItems}
            />
            <CartList
              items={items}
              products={products}
              changeCount={changeCount}
              onDeleteItem={onDeleteItem}
            />
          </>
        ) : (
          <CartNotFound />
        )}
      </Container>
    </div>
  )
}

export default CartPage

import classNames from 'classnames'
import { Link } from 'react-router-dom'

import CartIcon from '../icons/CartIcon'

import './style.scss'

type CartLinkProps = {
  cartItemsCount: number
  cartTotalSum: number
  className?: string
}

const CartLink: React.FC<CartLinkProps> = ({
  cartItemsCount,
  cartTotalSum,
  className,
}) => {
  return (
    <Link className={classNames('cart-link', className)} to='/cart'>
      <div className='cart-link__container'>
        <CartIcon className='cart-link__icon' />
        {cartItemsCount > 0 ? (
          <div className='cart-link__badge'>{cartItemsCount}</div>
        ) : null}
      </div>
      <span className='cart-link__sum'>{cartTotalSum} ₽</span>
    </Link>
  )
}

export default CartLink

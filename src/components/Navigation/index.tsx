import { Link } from 'react-router-dom'

import CartLink from '../CartLink'

import './style.scss'

type NavigationProps = {
  cartItemsCount: number
  cartTotalSum: number
}

const Navigation: React.FC<NavigationProps> = ({
  cartItemsCount,
  cartTotalSum,
}) => {
  return (
    <nav className='nav'>
      <Link className='nav__link' to='/'>
        Главная
      </Link>
      <Link className='nav__link' to='/catalog'>
        Каталог
      </Link>
      <CartLink
        className='nav__link'
        cartItemsCount={cartItemsCount}
        cartTotalSum={cartTotalSum}
      />
    </nav>
  )
}

export default Navigation

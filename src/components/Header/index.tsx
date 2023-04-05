import Container from '../Container'
import Logo from '../Logo'
import Navigation from '../Navigation'

import './style.scss'

type HeaderProps = {
  cartItemsCount: number
  cartTotalSum: number
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, cartTotalSum }) => {
  return (
    <header className='header'>
      <Container className='header__container'>
        <Logo className='header__logo' />
        <Navigation
          cartItemsCount={cartItemsCount}
          cartTotalSum={cartTotalSum}
        />
      </Container>
    </header>
  )
}

export default Header

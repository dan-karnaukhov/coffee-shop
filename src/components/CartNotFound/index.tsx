import './style.scss'
import Button from '../Button'

const CartNotFound: React.FC = () => {
  return (
    <div className='cart-not-found'>
      <span>Корзина пуста</span>
      <Button href='/catalog'>Перейти в каталог</Button>
    </div>
  )
}

export default CartNotFound

import Container from '../Container'

import './style.scss'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <Container className='footer__container'>
        <span className='footer__copyright'>
          2023 Компания Арабика. Все права защищены
        </span>
        <div className='footer__contacts'>
          <span>arabika@mail.ru</span>
          <span>+7-977-845-67-21</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

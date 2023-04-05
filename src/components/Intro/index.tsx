import Button from '../Button'
import Container from '../Container'

import './style.scss'

const Intro: React.FC = () => {
  return (
    <section className='intro'>
      <Container className='intro__container'>
        <div className='intro__content'>
          <h1 className='intro__title'>Лучшие сорта кофе со всего мира!</h1>
          <p className='intro__text'>
            Порадуйте себя великолепным вкусом и благородными букетами ароматов
            нашего кофе
          </p>
          <Button className='intro__button' href='/catalog' large>
            В каталог
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Intro

import Container from '../Container'
import SectionTitle from '../SectionTitle'

import './style.scss'

const AboutUs: React.FC = () => {
  return (
    <section className='about-us'>
      <Container className='about-us__container' small>
        <SectionTitle title='О нас' />
        <p className='about-us__text'>
          В нашем ассортименте более 50 сортов со всего мира, которые мы
          обжариваем каждый день и бесплатно доставляем до двери. Следим за
          качеством кофе от фермы до чашки: сами ищем кофе в странах
          произрастания, обжариваем на лучших ростерах в мире, проводим каппинги
          с участием Q-грейдеров, проверяем каждую партию по 7 контрольным
          точкам.
        </p>
      </Container>
    </section>
  )
}

export default AboutUs

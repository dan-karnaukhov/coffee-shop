import CoffeeBeansIcon from '../icons/CoffeeBeansIcon'

import './style.scss'

type SectionTitleProps = {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='section-title'>
      <h3 className='section-title__title'>{title}</h3>
      <div className='section-title__decoration'>
        <CoffeeBeansIcon className='section-title__icon' />
      </div>
    </div>
  )
}

export default SectionTitle

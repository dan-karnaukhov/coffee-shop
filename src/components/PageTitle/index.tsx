import './style.scss'

type PageTitleProps = {
  title: string
  count: number
}

const PageTitle: React.FC<PageTitleProps> = ({ title, count }) => {
  return (
    <div className='page-title'>
      <h2 className='page-title__title'>{title}</h2>
      <span className='page-title__count'>({count})</span>
    </div>
  )
}

export default PageTitle

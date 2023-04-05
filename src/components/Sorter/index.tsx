import classNames from 'classnames'

import './style.scss'

export type SorterType =
  | 'popularity'
  | 'price increase'
  | 'price decrease'
  | 'title'

type SorterItemType = {
  label: string
  value: SorterType
}

type SorterProps = {
  sorter: SorterType
  onSorterChange: (sorter: SorterType) => void
  className?: string
}

const Sorter: React.FC<SorterProps> = ({
  sorter,
  onSorterChange,
  className,
}) => {
  const items: SorterItemType[] = [
    { label: 'По популярности', value: 'popularity' },
    { label: 'По возрастанию цены', value: 'price increase' },
    { label: 'По убыванию цены', value: 'price decrease' },
    { label: 'По названию', value: 'title' },
  ]

  return (
    <div className={classNames('sorter', className)}>
      {items.map(({ label, value }) => (
        <span
          className={classNames('sorter__item', {
            'sorter__item_selected': value === sorter,
          })}
          key={value}
          onClick={() => onSorterChange(value)}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

export default Sorter

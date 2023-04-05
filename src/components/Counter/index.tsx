import classNames from 'classnames'

import './style.scss'

type CounterProps = {
  count: number
  onIncrement: () => void
  onDecrement: () => void
  className?: string
}

const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
  className,
}) => {
  return (
    <div className={classNames('counter', className)}>
      <div
        className={classNames('counter__decrement', {
          'counter__decrement_disabled': count === 1,
        })}
        onClick={onDecrement}
      >
        -
      </div>
      <div className='counter__count'>{count}</div>
      <div className='counter__increment' onClick={onIncrement}>
        +
      </div>
    </div>
  )
}

export default Counter

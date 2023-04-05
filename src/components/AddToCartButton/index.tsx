import { FC, ButtonHTMLAttributes } from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'

import CheckIcon from '../icons/CheckIcon'
import PlusIcon from '../icons/PlusIcon'

import './style.scss'

type AddToCartButton = {
  inCart?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const AddToCartButton: FC<AddToCartButton> = ({
  inCart,
  onClick,
  className,
}) => {
  return (
    <button
      className={classNames('add-to-cart-button', className)}
      type='button'
      onClick={inCart ? undefined : onClick}
    >
      {inCart ? (
        <Link to='/cart'>
          <CheckIcon className='add-to-cart-button__icon' />
        </Link>
      ) : (
        <PlusIcon className='add-to-cart-button__icon' />
      )}
    </button>
  )
}

export default AddToCartButton

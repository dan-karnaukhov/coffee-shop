import { ButtonHTMLAttributes, FC } from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './style.scss'

type ButtonProps = {
  large?: boolean
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  disabled,
  large,
  href,
  type = 'button',
  children,
  className,
  ...rest
}) => {
  const classes = classNames('button', className, {
    'button_disabled': disabled,
    'button_large': large,
  })

  if (href) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    )

  }
  
  return (
    <button className={classes} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button

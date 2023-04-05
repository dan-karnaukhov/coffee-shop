import { FC, HTMLAttributes } from 'react'

import classNames from 'classnames'

import './style.scss'

type ContainerProps = {
  small?: boolean
} & HTMLAttributes<HTMLDivElement>

const Container: FC<ContainerProps> = ({
  small,
  className,
  children,
  ...rest
}) => {
  const classes = classNames(
    'container',
    { 'container_small': small },
    className
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Container

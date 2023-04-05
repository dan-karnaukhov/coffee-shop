import { FC, HTMLAttributes } from 'react'

const CheckIcon: FC<HTMLAttributes<SVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5.88626 18C5.67299 18 5.41706 17.8816 5.24645 17.6447L0.255924 10.6579C-0.0853081 10.1842 -0.0853081 9.41447 0.255924 8.88158C0.597156 8.4079 1.15166 8.4079 1.53555 8.88158L5.92891 14.9803L16.4645 0.355263C16.8057 -0.118421 17.3602 -0.118421 17.7441 0.355263C18.0853 0.828947 18.0853 1.59868 17.7441 2.13158L6.48341 17.6447C6.3128 17.8816 6.09953 18 5.88626 18Z' />
    </svg>
  )
}

export default CheckIcon

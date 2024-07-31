import { ElProps } from '@/types'
import { memo } from 'react'

interface IProps extends ElProps<'svg'> {}

const Vector: React.FC<IProps> = (props) => {
  return (
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 0.5H2.83984C3.58426 0.5 4.26708 0.913455 4.61209 1.57311L6.10462 4.42689C6.44962 5.08655 7.13245 5.5 7.87687 5.5H9.57143M6.23002 0.5H9.57143"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default memo(Vector)
